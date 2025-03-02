import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../shared/Navbar.jsx';
import Footer from '../shared/Footer.jsx';
import { Laptop, Server, FileSearch, Network, Wrench, Clock, Clipboard, Shield } from 'lucide-react';

const Support = () => {
  const services = React.useMemo(
    () => [
      {
        title: 'File Complaint',
        description: 'Easily report your technical concerns and get quick resolutions.',
        icon: <Clipboard size={48} className="text-red-500" />,
        link: '/complaint',
      },
      {
        title: 'Device Repair',
        description: 'Quick and reliable repair services for PCs, laptops, and other devices.',
        icon: <Wrench size={48} className="text-red-500" />,
        link: '/device-repair',
      },
      {
        title: 'Software Support',
        description: 'Troubleshooting and assistance with software installations and issues.',
        icon: <Laptop size={48} className="text-red-500" />,
        link: '/software-support',
      },
      {
        title: 'System Upgrades',
        description: 'Enhance your device performance with our expert upgrade services.',
        icon: <Server size={48} className="text-red-500" />,
        link: '/system-upgrades',
      },
      {
        title: 'Data Recovery',
        description: 'Recover lost or corrupted files with our specialized data recovery solutions.',
        icon: <FileSearch size={48} className="text-red-500" />,
        link: '/data-recovery',
      },
      {
        title: 'Networking',
        description: 'Setup and troubleshooting for home and office networks.',
        icon: <Network size={48} className="text-red-500" />,
        link: '/networking',
      },
      {
        title: '24/7 Support',
        description: 'Round-the-clock assistance to resolve your technical issues.',
        icon: <Clock size={48} className="text-red-500" />,
        link: '/support-247',
      },
      {
        title: 'Extend Warranty',
        description: 'Extend your device warranty for uninterrupted support and protection.',
        icon: <Shield size={48} className="text-red-500" />,
        link: '/extend-warranty',
      },
    ],
    []
  );

  const products = React.useMemo(
    () => [
      {
        name: 'Laptops',
        link: '/products/laptops',
        image: 'https://ik.imagekit.io/1in7nqs7x/pc%20complaint/pngwing.com%20(3).png',
      },
      {
        name: 'Motherboards',
        link: '/products/motherboards',
        image: 'https://ik.imagekit.io/1in7nqs7x/pc%20complaint/pngwing.com%20(4).png',
      },
      {
        name: 'CPUs',
        link: '/products/cpus',
        image: 'https://ik.imagekit.io/1in7nqs7x/pc%20complaint/pngwing.com%20(5).png',
      },
      {
        name: 'Networking',
        link: '/products/networking',
        image: 'https://ik.imagekit.io/1in7nqs7x/pc%20complaint/pngwing.com%20(6).png',
      },
      {
        name: 'Coolers',
        link: '/products/coolers',
        image: 'https://ik.imagekit.io/1in7nqs7x/pc%20complaint/pngwing.com%20(7).png',
      },
    ],
    []
  );

  return (
    <>
      <Navbar />
      <div>
        {/* Hero Section */}
        <section className="relative w-full h-80 overflow-hidden shadow-lg">
          <img
            src="https://ik.imagekit.io/1in7nqs7x/pc%20complaint/michail-sapiton-alCEnNmzhPE-unsplash.jpg"
            className="w-full h-full object-cover"
            alt="Support Center Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col items-center justify-center text-center">
            <h1 className="text-white text-5xl font-bold drop-shadow-lg mb-2">TechDoc Support Center</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Your trusted partner for technical assistance. Reach out to us for expert solutions, helpful guidance, and unmatched support.
            </p>
          </div>
        </section>

        {/* Select Product Section */}
        <section className="container mx-auto px-6 py-8 text-gray-800">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">Select Product</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
            Choose the category of your product to access tailored support. Our team specializes in offering assistance for a wide range of devices.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-4">
            {products.map((product) => (
              <NavLink
                key={product.name}
                to={product.link}
                className="flex flex-col items-center hover:scale-105 transition-transform"
              >
                <img
                  src={product.image}
                  alt={`${product.name} icon`}
                  className="w-32 h-24 object-cover mb-2 transition-transform hover:scale-110"
                />
                <span className="text-gray-700 font-medium">{product.name}</span>
              </NavLink>
            ))}
          </div>
        </section>

        {/* Support Cards Section */}
        <section className="container mx-auto px-6 py-12 text-gray-800">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">How Can We Assist You?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <NavLink
                key={service.title}
                to={service.link}
                className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transform transition-transform hover:scale-105 flex flex-col items-center"
              >
                <div className="flex items-center justify-center bg-gray-100 p-4 rounded-full mb-4 w-16 h-16 transition-all hover:bg-red-100">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{service.title}</h3>
                <p className="text-sm text-gray-600 text-center">{service.description}</p>
              </NavLink>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Support;
