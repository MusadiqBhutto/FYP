import { useRef, useEffect } from 'react';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <section className="relative h-[400px] bg-gray-900">
      <video
        ref={videoRef}
        className="object-cover w-full h-full"
        loop
        muted
        autoPlay
      >
        <source src="/images/v1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <h1 className="text-5xl font-bold">COMBINE DESIGN</h1>
        <p className="text-lg mt-4">Elevated and minimal aesthetic for modern living</p>
      </div>
    </section>
  );
};

export default HeroSection;