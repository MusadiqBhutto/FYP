import { useEffect, useState } from 'react';
import ImageSwitcher from './ImageSwitcher';

const Slider = () => {
  const [images, setImages] = useState([]);
  const categories = ['kitchen', 'bedroom', 'washroom', 'office', 'outdoor' , "living" ,'dining' ,'exterior','hall','basement','baby Room'];

  // Function to generate image paths based on category
  const getImagePaths = (category) => {
    const imageCount = 50; // Number of images per category
    return Array.from({ length: imageCount }, (_, i) => 
      `/${category}/image${i + 1}.jpg` // Direct path without process.env.PUBLIC_URL
    );
  };

  // Set default category images on initial render
  useEffect(() => {
    setImages(getImagePaths('bedroom'));
  }, []);

  const handleButtonClick = (category) => {
    setImages(getImagePaths(category));
  };

  return (
    <div className="text-center">
      <ImageSwitcher images={images} />  
      <h1 className="text-3xl font-bold mb-6">Image Gallery</h1>
      <div className="m-5">
        {categories.map((category) => (
          <button 
            key={category} 
            onClick={() => handleButtonClick(category)}
            className="shadow-md shadow-gray-400 m-1.5 text-white bg-gray-300 rounded-lg p-2.5 text-base"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`img-${index}`}
            className="m-2.5 max-w-xs h-auto transition-transform duration-300 cursor-pointer rounded-lg hover:scale-110 hover:shadow-lg hover:z-10"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
