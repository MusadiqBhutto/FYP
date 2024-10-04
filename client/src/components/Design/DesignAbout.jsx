import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const DesignAbout = () => {
  const images = [
    "/protfolio/slider1.jpg",
    "/protfolio/slider2.jpg",
    "/protfolio/slider3.jpg",
    // Add more image links here
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 second

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full overflow-hidden space-y-6">
      {/* quotes slider */}
      <div className="w-10/12 mx-auto py-8">
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-slate-200 p-8">
              <h1 className="font-bold text-4xl text-center text-gray-800 mb-2">
                The Spruce
              </h1>
              <h3 className="text-center text-gray-500 text-mds italic mb-4">
                Make Your Best Home
              </h3>
              <h2 className="text-xl text-center text-gray-600 italic mb-4">
                “Have nothing in your home that you don't know to be useful or
                believe to be beautiful.”
              </h2>
              <p className="text-right text-gray-500 font-medium">
                - William Morris
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-slate-200 p-8">
              <h1 className="font-bold text-4xl text-center text-gray-800 mb-4">
                The Spruce
              </h1>
              <h3 className="text-center text-gray-500 text-md mb-4 italic">
                Make Your Best Home
              </h3>
              <h2 className="text-xl text-center text-gray-600 italic mb-4">
                “A designer knows when he has reached perfection not when there
                is nothing left to add but when there is nothing left to take
                away.”
              </h2>
              <p className="text-right text-gray-500 font-medium">
                —Antione de Sainte-Exupery
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-slate-200 p-8">
              <h1 className="font-bold text-4xl text-center text-gray-800 mb-4">
                The Spruce
              </h1>
              <h3 className="text-center text-gray-500 text-md mb-4 italic">
                Make Your Best Home
              </h3>
              <h2 className="text-xl text-center text-gray-600 italic mb-4">
                “Have no fear of perfection—you’ll never reach it.”{" "}
              </h2>
              <p className="text-right text-gray-500 font-medium">—Salvador </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-slate-200 p-8">
              <h1 className="font-bold text-4xl text-center text-gray-800 mb-4">
                The Spruce
              </h1>
              <h3 className="text-center text-gray-500 text-md mb-4 italic">
                Make Your Best Home
              </h3>
              <h2 className="text-xl text-center text-gray-600 italic mb-4">
                “Everything has a place, and everything in its place.”
              </h2>
              <p className="text-right text-gray-500 font-medium">—Unknown</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-slate-200 p-8">
              <h1 className="font-bold text-4xl text-center text-gray-800 mb-4">
                The Spruce
              </h1>
              <h3 className="text-center text-gray-500 text-md mb-4 italic">
                Make Your Best Home
              </h3>
              <h2 className="text-xl text-center text-gray-600 italic mb-4">
                “Creativity is allowing yourself to make mistakes. Design is
                knowing which ones to keep.”{" "}
              </h2>
              <p className="text-right text-gray-500 font-medium">
                —Scott Adams
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      

      {/* image box */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-5/12 bg-black text-white flex flex-col justify-between">
          {/* Logo and Title */}
          <div className="flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-4">The Spruce</h1>
            {/* Image Slider */}
            <div className="w-full h-full flex justify-center items-center overflow-hidden">
              <img
                src={images[currentImageIndex]}
                alt="Slider"
                className="w-full h-[1300px]"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-6">
          <div className="grid grid-cols-2 gap-4">
            {/* Image Cards */}
            <div className="relative">
              <img
                src="/protfolio/sidemenu1.jpg"
                alt="Soft Accents"
                className="w-full h-[320px]"
              />
              <p className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-2 py-1">
                Soft Accents
              </p>
            </div>
            <div className="relative">
              <img
                src="/protfolio/sidemenu2.jpg"
                alt="Eclectic Residence"
                className="w-full h-[320px]"
              />
              <p className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-2 py-1">
                Eclectic Residence
              </p>
            </div>
            <div className="relative">
              <img
                src="/protfolio/sidemenu3.jpg"
                alt="Plant Decor"
                className="w-full h-[320px]"
              />
              <p className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-2 py-1">
                Plant Decor
              </p>
            </div>
            <div className="relative">
              <img
                src="/protfolio/sidemenu4.jpg"
                alt="Cozy Apartment"
                className="w-full h-[320px]"
              />
              <p className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-2 py-1">
                Cozy Apartment
              </p>
            </div>
            <div className="relative">
              <img
                src="/protfolio/sidemenu5.jpg"
                alt="Rattan Decor"
                className="w-full h-[320px]"
              />
              <p className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-2 py-1">
                Rattan Decor
              </p>
            </div>
            <div className="relative">
              <img
                src="/protfolio/sidemenu6.jpg"
                alt="White Rooms"
                className="w-full h-[320px]"
              />
              <p className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-2 py-1">
                White Rooms
              </p>
            </div>
            <div className="relative">
              <img
                src="/protfolio/sidemenu7.jpg"
                alt="Office Decor"
                className="w-full h-[320px]"
              />
              <p className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-2 py-1">
                Office Decor
              </p>
            </div>
            <div className="relative">
              <img
                src="/protfolio/sidemenu8.jpg"
                alt="Stairs Ideas"
                className="w-full h-[320px]"
              />
              <p className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-2 py-1">
                Stairs Ideas
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* testimonial */}
      <section className="bg-gray-900 text-white">
        <div className="container mx-auto py-16 px-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-4">Testimonial</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div>
                <img
                  src="/images/viewer1.png"
                  alt="Sania Roy"
                  className="rounded-full w-24 h-24 mb-4 md:mb-0"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg font-semibold mb-2">Sania Roy</p>
                <p className="text-gray-400 mb-4">CEO, HEMIMATE</p>
                <blockquote className="text-gray-500 italic">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate.
                </blockquote>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <div className="flex space-x-6">
                <img
                  src="/images/partner1.png"
                  alt="Robert Hunter"
                  className="w-16 h-16"
                />
                <img
                  src="/images/partner2.png"
                  alt="Arthur Dawean"
                  className="w-16 h-16"
                />
                <img
                  src="/images/partner3.png"
                  alt="Hughes"
                  className="w-16 h-16"
                />
                <img
                  src="/images/partner4.png"
                  alt="John West"
                  className="w-16 h-16"
                />
                <img
                  src="/images/partner5.png"
                  alt="John West"
                  className="w-16 h-16"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignAbout;
