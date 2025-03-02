import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import axios from "axios";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: 0,
    image: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        image: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare the data to send to the backend
    const feedbackData = {
      name: formData.name,
      email: formData.email,
      rating: formData.rating.toString(),
      img1: formData.image ? formData.image : "",  // Send the image URL or an empty string if no image
      feedback: formData.message,
    };

    // Send feedback data to the backend
    axios
      .post("http://localhost:8080/feedback/feed", feedbackData)
      .then((response) => {
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("There was an error submitting the feedback!", error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="bg-gray-100 shadow-lg rounded-xl p-6 w-full max-w-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            We Appreciate Your Feedback
          </h2>
          {submitted ? (
            <div className="text-green-500 font-medium text-center">
              Thank you for your feedback!
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-800 font-medium mb-1 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm text-gray-700 bg-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-800 font-medium mb-1 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm text-gray-700 bg-white"
                  required
                />
              </div>

              {/* Image Upload Section */}
              <div className="mb-4">
                <label htmlFor="image" className="block text-gray-800 font-medium mb-1 text-sm">
                  Upload Image (Optional)
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm text-gray-700 bg-white"
                />
                {formData.image && (
                  <div className="mt-2 text-center">
                    <img
                      src={formData.image}
                      alt="Uploaded Preview"
                      className="max-w-full max-h-48 object-contain rounded-md"
                    />
                  </div>
                )}
              </div>

              {/* Rating Dropdown Section */}
              <div className="mb-4">
                <label htmlFor="rating" className="block text-gray-800 font-medium mb-1 text-sm">
                  Rating
                </label>
                <select
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm text-gray-700 bg-white"
                >
                  <option value={0}>Select Rating</option>
                  <option value={1}>1 - Poor</option>
                  <option value={2}>2 - Fair</option>
                  <option value={3}>3 - Good</option>
                  <option value={4}>4 - Very Good</option>
                  <option value={5}>5 - Excellent</option>
                </select>
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="block text-gray-800 font-medium mb-1 text-sm">
                  Do you have any suggestions to improve our product and service?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm text-gray-700 bg-white"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 text-sm"
              >
                Submit Feedback
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Feedback;
