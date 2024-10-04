import { useEffect, useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase.js";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const UpdateShop = () => {
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    imageUrls: [],
    shopname: "",
    ownername: "",
    description: "",
    address: "",
    phone: "",
    type: "",
  });

  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchShop = async () => {
      try {
        const shopId = params.shopId;
        const res = await fetch(`/api/shop/get/${shopId}`);
        const data = await res.json();

        if (data.success === false) {
          console.log(data.message);
          return;
        }
        setFormData(data);
      } catch (error) {
        console.error("Error fetching shop data:", error);
      }
    };

    fetchShop();
  }, [params.shopId]);

  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUploadError("Image upload failed. (2 mb max per image)");
          setUploading(false);
        });
    } else {
      setImageUploadError("You can only upload 6 images per listing");
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  const handleChange = (e) => {
     {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.imageUrls.length < 1)
        return setError("You must upload at least one image");

      if (+formData.regularPrice < +formData.discountPrice)
        return setError("Discount price cannot be higher than regular price");

      setLoading(true);
      setError(false);

      const res = await fetch(`/api/shoplisting/update/${params.shoplistingId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
        }),
      });

      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
        return;
      }

      navigate(`/shoplisting/${data._id}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };


  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Update Shop</h1>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-6">
        <div className="flex flex-col gap-4 flex-1">
          {/* Shop Name */}
          <input
            type="text"
            placeholder="Shop Name"
            className="border p-3 rounded-lg"
            id="shopname"
            required
            onChange={handleChange}
            value={formData.shopname}
          />
          {/* Owner Name */}
          <input
            type="text"
            placeholder="Owner Name"
            className="border p-3 rounded-lg"
            id="ownername"
            required
            onChange={handleChange}
            value={formData.ownername}
          />
          {/* Description */}
          <textarea
            placeholder="Description"
            className="border p-3 rounded-lg"
            id="description"
            required
            onChange={handleChange}
            value={formData.description}
          />
          {/* Address */}
          <input
            type="text"
            placeholder="Address"
            className="border p-3 rounded-lg"
            id="address"
            required
            onChange={handleChange}
            value={formData.address}
          />
          {/* Phone */}
          <input
            type="text"
            placeholder="Phone"
            className="border p-3 rounded-lg"
            id="phone"
            required
            onChange={handleChange}
            value={formData.phone}
          />
          {/* Shop Type */}
          <select
            className="border p-3 rounded-lg"
            id="type"
            required
            onChange={handleChange}
            value={formData.type}
          >
           <option value="">Select Shop Type</option>
          <option value="Iron">Iron Merchant</option>
          <option value="Cement">Cement</option>
          <option value="Electronics">Electronics Item</option>
          <option value="Colors">Colors</option>
            {/* Add more options based on your shop types */}
          </select>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          {/* Image Upload */}
          {/* Include image upload UI similar to UpdateListing component */}
          {/* Submit Button */}
          <button
            disabled={loading || uploading}
            className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            {loading ? "Updating..." : "Update Shop"}
          </button>
          {/* Error Message */}
          {error && <p className="text-red-700 text-sm">{error}</p>}
        </div>
      </form>
    </main>
  );
};

export default UpdateShop;
