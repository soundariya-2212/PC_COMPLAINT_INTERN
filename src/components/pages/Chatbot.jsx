import React, { useState } from "react";

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { sender: "user", text: input },
      { sender: "bot", text: getBotResponse(input) },
    ];

    setMessages(newMessages);
    setInput("");
  };

  const getBotResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    // Responses specific to PC Complaint Portal
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      return "Hi there! Welcome to the PC Complaint Portal. How can I assist you today?";
    }
    if (lowerCaseMessage.includes("how to submit complaint") || lowerCaseMessage.includes("Facing issues in submiting the complaint") ||
    lowerCaseMessage.includes("How to submit complaint")){
      return "To submit a complaint, log in to your account and navigate to the 'Submit Complaint' section.";
    }
    if (lowerCaseMessage.includes("how to check status") || lowerCaseMessage.includes("complaint status") || lowerCaseMessage.includes("How to check complaint status")){
      return "You can check the status of your complaint by visiting the 'Complaint Status' section and entering your complaint ID.";
    }
    if (lowerCaseMessage.includes("how to reset password")) {
      return "To reset your password, click on the 'Forgot Password' link on the login page and follow the instructions.";
    }
    if (lowerCaseMessage.includes("how to update complaint")) {
      return "You can update your complaint details by going to the 'My Complaints' section and selecting the complaint you want to modify.";
    }
    if (lowerCaseMessage.includes("contact support")) {
      return "For additional support, you can reach out through the 'Contact Us' section or email us at support@pcportal.com.";
    }
    if (lowerCaseMessage.includes("delete account")) {
      return "To delete your account, please contact our support team with a written request for account deletion.";
    }
    if (lowerCaseMessage.includes("login issues")) {
      return "If you're facing login issues, ensure your credentials are correct or reset your password if needed.";
    }
    if (lowerCaseMessage.includes("attach files")) {
      return "You can attach files to your complaint by clicking the 'Attach Files' button in the 'Submit Complaint' section.";
    }
    if (lowerCaseMessage.includes("faq")) {
      return "Visit the FAQ section on the homepage for answers to commonly asked questions.";
    }
    if (lowerCaseMessage.includes("response time")) {
      return "Our team typically responds to complaints within 48-72 hours. Thank you for your patience.";
    }
    if (lowerCaseMessage.includes("logout")) {
      return "To log out, click on your profile icon in the top right corner and select 'Logout'.";
    }
    if (lowerCaseMessage.includes("feedback")) {
      return "We value your feedback! Please use the 'Feedback' section to share your thoughts about our service.";
    }
    if (lowerCaseMessage.includes("open hours")) {
      return "Our support team is available from 9 AM to 6 PM, Monday to Friday.";
    }
    if (lowerCaseMessage.includes("complaint id")) {
      return "A complaint ID is a unique identifier for your complaint. You can find it in the 'My Complaints' section.";
    }
    return "I'm sorry, I couldn't understand that. Could you please rephrase or provide more details?";
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white text-black w-80 p-4 rounded-lg shadow-lg border border-gray-300">
      {/* Close Button */}
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="text-gray-800 hover:text-gray-700 font-bold mt-0"
        >
          X
        </button>
      </div>

      
      <div className="h-64 overflow-y-auto mb-4 border border-gray-300 p-2 rounded">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${
              msg.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block p-2 rounded-lg ${
                msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      
      <div className="flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-2 border border-gray-300 rounded-l"
        />
        <button
          onClick={handleSend}
          className="ml-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;