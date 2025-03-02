// import React from "react";

// const Tracking = () => {
//   const complaints = [
//     {
//       id: 1,
//       title: "PC not working",
//       status: "In Progress",
//       date: "2024-12-31T10:30:00Z",
//       description: "The PC is unresponsive and does not boot up.",

//       priority: "High",
//     },
//     {
//       id: 2,
//       title: "Network issues",
//       status: "Resolved",
//       date: "2024-12-29T08:15:00Z",
//       description: "Unable to access the internet on multiple devices.",
//       priority: "Medium",
//     },
//     {
//       id: 3,
//       title: "Software installation request",
//       status: "Pending",
//       date: "2024-12-28T14:45:00Z",
//       description:
//         "Request for installation of licensed graphic design software.",
//       priority: "Low",
//     },
//   ];

//   return (
//     <div className="flex flex-col h-full">
//       <h1 className="text-2xl font-bold text-gray-800 p-6 border-b bg-white shadow h-[8vh]">
//         Complaint Tracking
//       </h1>
//       <div className="flex-1 overflow-y-auto p-8 bg-gray-50 pb-20"> {/* Added pb-20 */}
//         <div className="max-w-4xl mx-auto space-y-6">
//           {complaints.map((complaint) => (
//             <div
//               key={complaint.id}
//               className="relative pl-10 pb-6 border-l-2 border-gray-200"
//             >
//               <div className="absolute top-0 left-0 w-6 h-6 bg-blue-500 rounded-full -ml-3 border-2 border-white"></div>
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h2 className="text-lg font-semibold text-gray-800">
//                   {complaint.title}
//                 </h2>
//                 <p className="mt-1 text-sm text-gray-600">{complaint.description}</p>
//                 <div className="mt-2 text-sm text-gray-500">
//                   <span className="font-medium">Submitted on:</span>{" "}
//                   {new Date(complaint.date).toLocaleDateString("en-US", {
//                     year: "numeric",
//                     month: "short",
//                     day: "numeric",
//                   })}
//                 </div>
              
//                 <div
//                   className={`mt-2 inline-block px-3 py-1 rounded-full text-sm font-medium ${
//                     complaint.priority === "High"
//                       ? "bg-red-100 text-red-600"
//                       : complaint.priority === "Medium"
//                       ? "bg-yellow-100 text-yellow-600"
//                       : "bg-green-100 text-green-600"
//                   }`}
//                 >
//                   Priority: {complaint.priority}
//                 </div>
//                 <div
//                   className={`mt-2 inline-block px-3 py-1 rounded-full text-sm font-medium ${
//                     complaint.status === "Resolved"
//                       ? "bg-green-100 text-green-600"
//                       : complaint.status === "In Progress"
//                       ? "bg-yellow-100 text-yellow-600"
//                       : "bg-red-100 text-red-600"
//                   }`}
//                 >
//                   {complaint.status}
//                 </div>
//               </div>
//             </div>
//           ))}
//           {complaints.length === 0 && (
//             <div className="text-center text-gray-500">No complaints to display.</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tracking;


import React, { useEffect, useState } from "react";
import axios from "axios";

const Tracking = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Retrieve the userId dynamically from localStorage, context, or global state
  const useri = JSON.parse(localStorage.getItem("user"));
  const userId = useri ? useri.id : null;
  console.log(userId);
  
  
  
  useEffect(() => {
    if (!userId) {
      setError("User ID is not available.");
      setLoading(false);
      return;
    }

    // Fetch complaints for the specific user ID
    const fetchComplaints = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/complaint?userId=${userId}`
        );
        setComplaints(response.data);
      } catch (err) {
        setError("Error fetching complaints.");
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
  }, [userId]);

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-2xl font-bold text-gray-800 p-6 border-b bg-white shadow h-[8vh]">
        Complaint Tracking
      </h1>
      <div className="flex-1 overflow-y-auto p-8 bg-gray-50 pb-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {loading ? (
            <div className="text-center text-gray-500">Loading complaints...</div>
          ) : error ? (
            <div className="text-center text-gray-500">{error}</div>
          ) : complaints.length === 0 ? (
            <div className="text-center text-gray-500">No complaints to display.</div>
          ) : (
            complaints.map((complaint) => (
              <div
                key={complaint.id}
                className="relative pl-10 pb-6 border-l-2 border-gray-200"
              >
                <div className="absolute top-0 left-0 w-6 h-6 bg-blue-500 rounded-full -ml-3 border-2 border-white"></div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {complaint.ctitle}
                  </h2>
                  <p className="mt-1 text-sm text-gray-600">{complaint.cdetails}</p>
                  <div className="mt-2 text-sm text-gray-500">
                    <span className="font-medium">Submitted on:</span>{" "}
                    {new Date(complaint.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>

                  <div className="mt-2 text-sm text-gray-500">
                    <span className="font-medium">Name:</span> {complaint.name}
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    <span className="font-medium">Phone:</span> {complaint.phone}
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    <span className="font-medium">Email:</span> {complaint.email}
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    <span className="font-medium">Brand:</span> {complaint.brand}
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    <span className="font-medium">Product ID:</span> {complaint.pid}
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    <span className="font-medium">Solution:</span> {complaint.csolution}
                  </div>
                  {complaint.file && (
                    <div className="mt-2 text-sm text-gray-500">
                      <span className="font-medium">File:</span> {complaint.file}
                    </div>
                  )}

                  {/* <div
                    className={`mt-2 inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      complaint.priority === "High"
                        ? "bg-red-100 text-red-600"
                        : complaint.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    Priority: {complaint.priority}
                  </div> */}
                  <div
                    className={`mt-2 inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      complaint.status === "Resolved"
                        ? "bg-green-100 text-green-600"
                        : complaint.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {complaint.status}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Tracking;