import React from 'react';
import { Search } from 'lucide-react';
import backg from './background1.jpg'; // Replace with the correct image path

const Body = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <section
          className="relative w-[94vw] h-[35rem] mx-auto mt-[5vh] overflow-hidden"
          style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}
        >
          <img src={backg} className="w-full h-full object-cover" alt="Background" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>

          {/* Centered Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
            <h6 className="font-bold text-4xl leading-tight text-center">
              We are here to help you
            </h6>
            <h6 className="font-bold text-4xl leading-tight mt-2 text-center">
              Search your product
            </h6>

            {/* Search Bar */}
            <div className="relative mt-8 w-full max-w-xl">
              <div className="flex bg-white shadow-md">
                <input
                  type="text"
                  className="w-full h-12 px-4 text-gray-800 placeholder-gray-500"
                  placeholder="Search by product_id, serial_number or brand"
                />
                <button
                  className="px-6 bg-blue-600 text-white hover:bg-blue-800 transition duration-300"
                  title="Search"
                >
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="w-[94vw] mx-auto mt-[5vh] p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Welcome to our PC hardware support platform. With years of expertise and a team of dedicated professionals, 
              we specialize in diagnostics, repairs, and custom builds to meet all your computing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="text-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To provide reliable and efficient PC hardware solutions, ensuring seamless performance for our customers.
              </p>
            </div>

            {/* Values */}
            <div className="text-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">Our Values</h3>
              <p className="text-gray-600">
                Integrity, innovation, and customer satisfaction drive everything we do.
              </p>
            </div>

            {/* Experience */}
            <div className="text-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">Our Expertise</h3>
              <p className="text-gray-600">
                Over a decade of experience in the industry, with a skilled team ready to tackle any hardware challenge.
              </p>
            </div>
          </div>
        </section>

        {/* Our Official Partners Section */}
        {/* Our Official Partners Section */}
<section className="w-[94vw] mx-auto mt-[5vh] p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-lg">
  <div className="text-center mb-8">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Official Partners</h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-6">
      We are proud to be partnered with some of the leading PC hardware brands in the industry.
    </p>

    {/* Partner Logos */}
    <div className="grid md:grid-cols-5 gap-x-0 gap-y-8 justify-center">
      {/* Example Partner Logos */}
      <div className="flex justify-center items-center">
        <img src="https://ik.imagekit.io/1in7nqs7x/pc%20complaint/intel.svg?updatedAt=1735542899710" alt="Intel Logo" className="h-16 object-contain hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="flex justify-center items-center">
        <img src="https://ik.imagekit.io/1in7nqs7x/pc%20complaint/nvidia.svg?updatedAt=1735542899720" alt="Nvidia Logo" className="h-16 object-contain hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="flex justify-center items-center">
        <img src="https://ik.imagekit.io/1in7nqs7x/pc%20complaint/amd.svg?updatedAt=1735542899934" alt="AMD Logo" className="h-16 object-contain hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="flex justify-center items-center">
        <img src="https://ik.imagekit.io/1in7nqs7x/pc%20complaint/dell.svg?updatedAt=1735542899521" alt="Dell Logo" className="h-16 object-contain hover:scale-110 transition-transform duration-300" />
      </div>
      {/* New Partner Logos */}
      <div className="flex justify-center items-center">
        <img src="https://ik.imagekit.io/1in7nqs7x/pc%20complaint/hp.svg?updatedAt=1735542899770" alt="HP Logo" className="h-16 object-contain hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="flex justify-center items-center">
        <img src="https://ik.imagekit.io/1in7nqs7x/pc%20complaint/asus.svg?updatedAt=1735542899654" alt="Asus Logo" className="h-16 object-contain hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="flex justify-center items-center">
        <img src="https://ik.imagekit.io/1in7nqs7x/pc%20complaint/apple.svg?updatedAt=1735542899954" alt="Apple Logo" className="h-16 object-contain hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="flex justify-center items-center">
        <img src="https://ik.imagekit.io/1in7nqs7x/pc%20complaint/jbl.svg?updatedAt=1735543661786" alt="Samsung Logo" className="h-16  object-contain hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="flex justify-center items-center">
        <img src="https://ik.imagekit.io/1in7nqs7x/pc%20complaint/lenovo.svg?updatedAt=1735543463437" alt="Samsung Logo" className="h-16 w-24 object-contain hover:scale-110 transition-transform duration-300" />
      </div>
      <div className="flex justify-center items-center">
        <img src="https://ik.imagekit.io/1in7nqs7x/pc%20complaint/samsung.svg?updatedAt=1735542895627" alt="Samsung Logo" className="h-16 w-20 object-contain hover:scale-110 transition-transform duration-300" />
      </div>
    </div>
  </div>
</section>

      </div>
    </>
  );
};

export default Body;
