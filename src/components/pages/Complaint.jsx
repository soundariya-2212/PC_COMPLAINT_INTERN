import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaQuestionCircle, FaPaperPlane, FaTools } from "react-icons/fa";
import Navbar from '../shared/Navbar.jsx';
import Footer from '../shared/Footer.jsx';
import axios from "axios";

const Complaint = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    pid: "",
    ctitle: "",
    cdetails: "",
    csolution: "",
    file: null,
  });
  // localStorage.setItem("user", JSON.stringify(user)); // Store the user object as a string
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };
  const useri = JSON.parse(localStorage.getItem("user"));
  const uid = useri ? useri.id : null;
  console.log(useri.id);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080/complaint/comp?userId=${uid}`, formData);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error submitting the complaint:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gray-100 p-6">
        {/* Image and Buttons Section */}
        <div className="lg:w-1/2 w-full flex flex-col items-start" style={{ marginTop: "-30vh" }}>
          <img
            src="https://ik.imagekit.io/1in7nqs7x/pc%20complaint/undraw_completed-tasks_1j9z.svg?updatedAt=1735628966116"
            alt="PC and Hardware Support"
            className="ml-[4vw] w-[35vw] h-[50vh] mb-4"
          />

          <div className="mt-11">
            <button
              className="flex items-center gap-2 bg-blue-600 text-white py-2 px-3 rounded-md hover:bg-blue-700 mb-4 w-[20vw] ml-[10vw]"
              onClick={() => navigate("/faq")}
            >
              <FaQuestionCircle size={16} />
              Frequently Asked Questions
            </button>
            <div className="space-y-4 w-3/4">
              <button
                className="flex items-center gap-2 bg-green-600 text-white py-2 px-3 rounded-md hover:bg-green-700 w-[20vw] ml-[10vw]"
                onClick={() => navigate("/feedback")}
              >
                <FaPaperPlane size={16} />
                Submit Your Feedback
              </button>
              <button
                className="flex items-center gap-2 bg-gray-600 text-white py-2 px-3 rounded-md hover:bg-gray-700 w-[20vw] ml-[10vw]"
                onClick={() => navigate("/diagnostic-tool")}
              >
                <FaTools size={16} />
                Run Diagnostic Tool
              </button>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:w-[60%] w-full bg-white p-8 shadow-lg rounded-lg mr-7">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            PC and Hardware Complaint Form
          </h1>
          <p className="mb-4 text-gray-600 text-sm">
            Fill out the form below to submit your complaint. This helps us address the issue effectively.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="(000) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="example@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label
                  htmlFor="brand"
                  className="block text-gray-700 font-medium"
                >
                  Brand
                </label>
                <select
                  id="brand"
                  name="brand"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  value={formData.brand}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select the brand
                  </option>
                  <option value="AMD">AMD</option>
                  <option value="NVIDIA">NVIDIA</option>
                  <option value="Intel">Intel</option>
                  <option value="HP">HP</option>
                  <option value="ASUS">ASUS</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Dell">Dell</option>
                  <option value="Lenovo">Lenovo</option>
                </select>
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="pid"
                  className="block text-gray-700 font-medium"
                >
                  Product ID or Serial Number
                </label>
                <input
                  type="text"
                  id="pid"
                  name="pid"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter the product ID or serial number"
                  value={formData.pid}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="ctitle"
                className="block text-gray-700 font-medium"
              >
                Complaint Title
              </label>
              <input
                type="text"
                id="ctitle"
                name="ctitle"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter the complain title"
                value={formData.ctitle}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="cdetails"
                className="block text-gray-700 font-medium"
              >
                Complaint Details
              </label>
              <textarea
                id="cdetails"
                name="cdetails"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Describe the issue"
                rows="3"
                value={formData.cdetails}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="csolution"
                className="block text-gray-700 font-medium"
              >
                Expected Resolution
              </label>
              <textarea
                id="csolution"
                name="csolution"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Describe your expected resolution"
                rows="3"
                value={formData.csolution}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="file"
                className="block text-gray-700 font-medium"
              >
                Supporting Documents (Optional)
              </label>
              <input
                type="file"
                id="file"
                name="file"
                className="w-full p-3 border border-gray-300 rounded-md"
                onChange={handleFileChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700"
            >
              Submit Complaint
            </button>
          </form>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[90%] max-w-md">
            <img
              src="https://cdnl.iconscout.com/lottie/premium/thumb/successfully-send-6461954-5372873.gif"
              alt="Success"
              className="w-24 h-24 mx-auto"
            />
            <h2 className="text-2xl font-bold text-gray-800 mt-4">
              Complaint Submitted Successfully!
            </h2>
            <p className="text-gray-600 mt-2">
              Thank you for your complaint. We will get back to you shortly.
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Back
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Complaint;
