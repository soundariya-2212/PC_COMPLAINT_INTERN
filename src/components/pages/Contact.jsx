// import React, { useState } from "react";
// import Navbar from "../shared/Navbar";
// import Footer from "../shared/Footer";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";  // Import the styles

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     fname: "",
//     lname: "",
//     location: "",
//     phone: "",
//     description: "",
//   });

//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:8080/contact/con", formData);

//       if (response.status === 200) {
//         setSuccessMessage("Thank you for reaching out! We will contact you soon.");
//         setErrorMessage("");
//         setFormData({
//           email: "",
//           fname: "",
//           lname: "",
//           location: "",
//           phone: "",
//           description: "",
//         });

//         // Show success toast
//         toast.success("Your request has been successfully submitted!", {
//           position: toast.POSITION.TOP_RIGHT,
//           autoClose: 5000,  // Close toast after 5 seconds
//         });
//       }
//     } catch (error) {
//       setErrorMessage("Something went wrong. Please try again.");
//       setSuccessMessage("");

//       // Show error toast
//       toast.error("Something went wrong. Please try again.", {
//         position: toast.POSITION.TOP_RIGHT,
//         autoClose: 5000,  // Close toast after 5 seconds
//       });
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="flex flex-wrap justify-center items-start p-20 bg-gray-50">
//         {/* Left Section */}
//         <div className="w-full md:w-1/3 lg:w-1/2 p-6">
//           <h1 className="text-4xl font-bold text-blue-400">
//             Let's <span className="text-black">Talk</span>
//           </h1>
//           <p className="mt-4 text-gray-700">
//             Engage with our expert support team to arrange a comprehensive
//             troubleshooting session, select the optimal solution tailored to
//             your PC's needs.
//           </p>

//           <div className="mt-4">
//             <h2 className="text-lg font-semibold">Location</h2>
//             <p className="text-gray-600">
//               TechDoc Private Limited, Neyveli, Township,
//               <p>Cuddalore, Tamil Nadu 641006</p>
//             </p>
//           </div>

//           <div className="mt-4">
//             <h2 className="text-lg font-semibold">Email</h2>
//             <p className="text-gray-600">
//               Enquiry:{" "}
//               <a
//                 href="mailto:mani@TechDoc.com"
//                 className="text-blue-600"
//               >
//                 mani@TechDoc.com
//               </a>
//             </p>
//             <p className="text-gray-600">
//               Career:{" "}
//               <a
//                 href="mailto:career@TechDoc.com"
//                 className="text-blue-600"
//               >
//                 career@TechDoc.com
//               </a>
//             </p>
//           </div>

//           <div className="mt-4">
//             <h2 className="text-lg font-semibold">Phone</h2>
//             <p className="text-gray-600">Support: +91 94008 45698</p>
//           </div>

//           <div className="mt-6">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7073.665182370294!2d79.48552072048183!3d11.6000028247549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54b6b42a5782bf%3A0xc0a16c856c8e9e2b!2sAdministrative%20Office%20Mine%201%20%26%201A!5e1!3m2!1sen!2sin!4v1735707467377!5m2!1sen!2sin"
//               width="100%"
//               height="200"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               title="Location Map"
//             ></iframe>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="w-full md:w-2/3 lg:w-1/2 p-6 bg-white shadow-md rounded-md h-auto">
//           <h2 className="text-2xl font-semibold mb-4 text-center">
//             CONTACT US
//           </h2>
//           <p className="text-sm text-gray-500 mb-6">
//             Please fill out the form below, and we'll contact you shortly.
//             Fields with an asterisk (*) are mandatory.
//           </p>

//           {/* Success/Error Message */}
//           {successMessage && (
//             <div className="p-4 bg-green-100 text-green-800 mb-4 rounded">
//               {successMessage}
//             </div>
//           )}
//           {errorMessage && (
//             <div className="p-4 bg-red-100 text-red-800 mb-4 rounded">
//               {errorMessage}
//             </div>
//           )}

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email *
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 placeholder="name@mail.com"
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>

//             <div className="flex space-x-4">
//               <div className="w-1/2">
//                 <label
//                   htmlFor="fname"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   First Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="fname"
//                   name="fname"
//                   value={formData.fname}
//                   onChange={handleChange}
//                   required
//                   placeholder="Your First Name"
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//               </div>
//               <div className="w-1/2">
//                 <label
//                   htmlFor="lname"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Last Name *
//                 </label>
//                 <input
//                   type="text"
//                   id="lname"
//                   name="lname"
//                   value={formData.lname}
//                   onChange={handleChange}
//                   required
//                   placeholder="Your Last Name"
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="location"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Location *
//               </label>
//               <input
//                 type="text"
//                 id="location"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//                 placeholder="Location"
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Phone Number *
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 placeholder="+91 XXXXX-XXXXX"
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>

//             <div>
//               <label
//                 htmlFor="description"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Your Message *
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 required
//                 placeholder="Leave a comment..."
//                 className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               ></textarea>
//             </div>

//             <button
//               type="submit" onSubmit={handleSubmit}
//               className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
//             >
//               Contact Us
//             </button>
//           </form>
//         </div>
//       </div>
//       <Footer />
//       <ToastContainer /> 
//     </>
//   );
// };

// export default Contact;



import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  // Make sure this line is included

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    fname: "",
    lname: "",
    location: "",
    phone: "",
    description: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/contact/con", formData);

      if (response.status === 200) {
        setSuccessMessage("Thank you for reaching out! We will contact you soon.");
        setErrorMessage("");
        setFormData({
          email: "",
          fname: "",
          lname: "",
          location: "",
          phone: "",
          description: "",
        });

        // Show success toast
        toast.success("Your request has been successfully submitted!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,  // Close toast after 5 seconds
        });
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
      setSuccessMessage("");

      // Show error toast
      toast.error("Something went wrong. Please try again.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,  // Close toast after 5 seconds
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center items-start p-20 bg-gray-50">
        {/* Left Section */}
        <div className="w-full md:w-1/3 lg:w-1/2 p-6">
          <h1 className="text-4xl font-bold text-blue-400">
            Let's <span className="text-black">Talk</span>
          </h1>
          <p className="mt-4 text-gray-700">
            Engage with our expert support team to arrange a comprehensive
            troubleshooting session, select the optimal solution tailored to
            your PC's needs.
          </p>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">Location</h2>
            <p className="text-gray-600">
              TechDoc Private Limited, Neyveli, Township,
              <p>Cuddalore, Tamil Nadu 641006</p>
            </p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">Email</h2>
            <p className="text-gray-600">
              Enquiry:{" "}
              <a
                href="mailto:mani@TechDoc.com"
                className="text-blue-600"
              >
                mani@TechDoc.com
              </a>
            </p>
            <p className="text-gray-600">
              Career:{" "}
              <a
                href="mailto:career@TechDoc.com"
                className="text-blue-600"
              >
                career@TechDoc.com
              </a>
            </p>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">Phone</h2>
            <p className="text-gray-600">Support: +91 94008 45698</p>
          </div>

          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7073.665182370294!2d79.48552072048183!3d11.6000028247549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54b6b42a5782bf%3A0xc0a16c856c8e9e2b!2sAdministrative%20Office%20Mine%201%20%26%201A!5e1!3m2!1sen!2sin!4v1735707467377!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3 lg:w-1/2 p-6 bg-white shadow-md rounded-md h-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            CONTACT US
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Please fill out the form below, and we'll contact you shortly.
            Fields with an asterisk (*) are mandatory.
          </p>

          {/* Success/Error Message */}
          {successMessage && (
            <div className="p-4 bg-green-100 text-green-800 mb-4 rounded">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="p-4 bg-red-100 text-red-800 mb-4 rounded">
              {errorMessage}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="name@mail.com"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="fname"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  required
                  placeholder="Your First Name"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="lname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  required
                  placeholder="Your Last Name"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 XXXXX-XXXXX"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Leave a comment..."
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <button
              onSubmit={handleSubmit} 
              className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
      <Footer />
      <ToastContainer /> {/* Ensure this is placed at the end */}
    </>
  );
};

export default Contact;

