import { useEffect, useState } from 'react';

const ImageSwitcher = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/Slider/1.jpg',
    '/Slider/2.jpg',
    '/Slider/3.jpg',
    '/Slider/4.jpg',
    '/Slider/5.jpg',
    '/Slider/6.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [images.length]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <img
        src={images[currentImage]}
        alt="Switching"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          transition: 'opacity 1s ease-in-out',
          opacity: 1,
        }}
      />
      <h1
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' , fontSize :"36px", textShadow : "1px 1px 10px gray" , fontWeight: 'bold' }}>
        Welcome to Real Designer House
      </h1>
    </div>
  );
};

export default ImageSwitcher;
