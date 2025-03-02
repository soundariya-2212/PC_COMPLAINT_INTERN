import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../shared/Navbar.jsx";
import ChatBot from "./Chatbot.jsx";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showChatBot, setShowChatBot] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState({ question: "", answer: "" });
  const [showAddForm, setShowAddForm] = useState(false);

  // Fetch FAQs on component load
  useEffect(() => {
    axios
      .get("http://localhost:8080/faq/get")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setFaqs(response.data);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching FAQs:", error);
      });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleChatBot = () => {
    setShowChatBot(!showChatBot);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFaq({ ...newFaq, [name]: value });
  };

  const handleAddFaq = (e) => {
    e.preventDefault();
    if (newFaq.question && newFaq.answer) {
      axios
        .post("http://localhost:8080/faq/post", newFaq)
        .then((response) => {
          setFaqs([...faqs, response.data]);
          setNewFaq({ question: "", answer: "" });
          setShowAddForm(false);
        })
        .catch((error) => {
          console.error("Error adding FAQ:", error);
        });
    }
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center p-4 relative">
        <div className="max-w-3xl w-full">
          <div className="h-60 w-80 flex justify-center items-center ml-48">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/faq-illustration-download-in-svg-png-gif-file-formats--customer-questions-interrogation-point-and-answers-whoooa-bw-1-pack-people-illustrations-3778933.png?f=webp"
              alt="FAQ Illustration"
            />
          </div>
          <h1 className="text-3xl font-bold text-center mb-6">FAQs</h1>

          {/* Search Bar */}
          <div className="flex items-center mb-6">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="flex-1 border border-gray-300 p-3 rounded-md focus:outline-none"
            />
            <button
              className="ml-4 bg-black text-white p-3 rounded-md shadow-lg hover:bg-gray-600"
              onClick={() => setShowAddForm(!showAddForm)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="border border-gray-950 rounded-md">
                <button
                  className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-300 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-200 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeIndex === index && (
                  <div className="p-4 border-t border-gray-700 bg-none">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Add FAQ Form */}
          {showAddForm && (
            <form
              onSubmit={handleAddFaq}
              className="mt-6 border border-gray-300 p-4 rounded-md"
            >
              <h2 className="text-xl font-semibold mb-4">Add New FAQ</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Question</label>
                <input
                  type="text"
                  name="question"
                  value={newFaq.question}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Answer</label>
                <textarea
                  name="answer"
                  value={newFaq.answer}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Add FAQ
              </button>
            </form>
          )}
        </div>

        {/* Chat Bot Button */}
        <div className="fixed bottom-4 right-4">
          <button
            onClick={toggleChatBot}
            className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4 0h-4m-4 0H5a2 2 0 01-2-2v-6a2-2 0 012-2h2m4 0V4m0 0L9 8m3-4l3 4"
              />
            </svg>
          </button>
        </div>

        {/* Chat Bot Component */}
        {showChatBot && <ChatBot onClose={() => setShowChatBot(false)} />}
      </div>
    </>
  );
};

export default Faq;
