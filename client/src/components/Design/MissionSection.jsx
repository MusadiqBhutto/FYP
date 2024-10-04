const MissionSection = () => {
  return (
    <div className="bg-[#E2E8F0] text-white py-20 space-y-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-stretch justify-between">
        {/* Left Box */}
        <div className="bg-black p-10 lg:w-1/2 flex flex-col justify-center gap-6">
          <h2 className="text-3xl font-bold mb-4">OUR MISSION IS DESIGN & DEVELOP</h2>
          <p className="mb-6">
            Augue interdum velit euismod in pellentesque massa placerat duis. Et pharetra pharetra massa massa.
          </p>
          <button className="border-2 border-yellow-500 text-yellow-500 px-6 py-2 hover:bg-yellow-500 hover:text-black">
            About Us
          </button>
        </div>

        {/* Right Image with Overlay */}
        <div className="relative lg:w-1/2 mt-10 lg:mt-0 flex items-center">
          <img
            src="/images/after.png"
            alt="Design Comparison"
            className="w-full h-full object-cover"
          />
          <button className="absolute top-4 right-4 bg-black text-white px-4 py-2 hover:bg-gray-700">
            COMBINE DESIGN
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-black text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-yellow-500">20K</h3>
            <p className="mt-2">CLIENTS</p>
            <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-yellow-500">564</h3>
            <p className="mt-2">PROJECTS</p>
            <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-yellow-500">15K</h3>
            <p className="mt-2">SALES</p>
            <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
