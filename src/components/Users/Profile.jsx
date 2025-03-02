import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  IdentificationIcon,
  CalendarIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [currentDate] = useState(new Date().toISOString().split("T")[0]); // Current date
  const [subscriptionType, setSubscriptionType] = useState("Basic");

  // Fetch user details from localStorage and backend
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.id) {
      axios
        .get(`http://localhost:8080/user/${user.id}`) // Replace with your API endpoint
        .then((response) => {
          setUserDetails(response.data);
          setUpdatedDetails(response.data); // Pre-fill the update form
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    } else {
      console.error("User ID not found in localStorage");
    }
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (userDetails && userDetails.id) {
      axios
        .put(`http://localhost:8080/user/update/${userDetails.id}`, updatedDetails) // Replace with your API endpoint
        .then((response) => {
          setUserDetails(response.data);
          toggleModal();
          alert("Profile updated successfully!");
        })
        .catch((error) => {
          console.error("Error updating user profile:", error);
          alert("Failed to update profile. Please try again.");
        });
    } else {
      console.error("User ID not available for update");
    }
  };

  if (!userDetails) {
    return <div>Loading...</div>; // Render a loading state while data is being fetched
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      {/* Page Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-gray-800">Customer Profile</h1>
        <p className="text-gray-600 text-lg">
          Manage your account and track your complaints
        </p>
      </header>

      {/* Profile Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-5xl mx-auto mb-10">
        {/* Profile Image and Name */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mb-4">
            <img
              src={
                userDetails.imageUrl ||
                "https://ik.imagekit.io/1in7nqs7x/pc%20complaint/user.png?updatedAt=1735835144686"
              }
              alt="Customer Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">{userDetails.name}</h2>
          <p className="text-gray-600 text-sm">
            Customer ID: <span className="font-medium">CUST{userDetails.id}</span>
          </p>
          <button
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 flex items-center justify-center mt-4"
            onClick={toggleModal}
          >
            <PencilIcon className="w-5 h-5 mr-2" />
            Update Profile
          </button>
        </div>

        {/* Account Overview */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Overview</h3>
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col">
              <h4 className="text-gray-800 font-medium">Active Complaints</h4>
              <p className="text-gray-600">You have 3 active complaints</p>
            </div>
            <div className="flex flex-col text-right">
              <h4 className="text-gray-800 font-medium">Subscription</h4>
              <p className="text-green-600">{subscriptionType} (Expires in 10 days)</p>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col">
              <h4 className="text-gray-800 font-medium">Recent Updates</h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Complaint #12345 status updated to "Resolved"</li>
                <li>Complaint #67890 has been assigned to an agent</li>
                <li>Your profile has been successfully updated</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
          <EnvelopeIcon className="w-8 h-8 text-blue-600" />
          <div className="ml-4">
            <h4 className="text-gray-800 font-medium">Email</h4>
            <p className="text-gray-600">{userDetails.email}</p>
          </div>
        </div>

        <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
          <PhoneIcon className="w-8 h-8 text-green-600" />
          <div className="ml-4">
            <h4 className="text-gray-800 font-medium">Phone</h4>
            <p className="text-gray-600">{userDetails.phone}</p>
          </div>
        </div>

        <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
          <MapPinIcon className="w-8 h-8 text-red-600" />
          <div className="ml-4">
            <h4 className="text-gray-800 font-medium">Location</h4>
            <p className="text-gray-600">{userDetails.location}</p>
          </div>
        </div>

        <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
          <IdentificationIcon className="w-8 h-8 text-purple-600" />
          <div className="ml-4">
            <h4 className="text-gray-800 font-medium">Registered On</h4>
            <p className="text-gray-600">{currentDate}</p>
          </div>
        </div>

        <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
          <MapPinIcon className="w-8 h-8 text-teal-600" />
          <div className="ml-4">
            <h4 className="text-gray-800 font-medium">Pincode</h4>
            <p className="text-gray-600">{userDetails.pincode}</p>
          </div>
        </div>

        <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
          <CalendarIcon className="w-8 h-8 text-orange-600" />
          <div className="ml-4">
            <h4 className="text-gray-800 font-medium">Subscription</h4>
            <p className="text-gray-600">{subscriptionType}</p>
          </div>
        </div>
      </section>

      {/* Modal for Updating Profile */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Update Profile</h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={updatedDetails.name || ""}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={updatedDetails.email || ""}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={updatedDetails.phone || ""}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Location</label>
                <input
                  type="text"
                  name="location"
                  value={updatedDetails.location || ""}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  value={updatedDetails.pincode || ""}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg mr-2"
                  onClick={toggleModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
