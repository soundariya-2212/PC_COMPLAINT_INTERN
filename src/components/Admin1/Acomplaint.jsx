// import React, { useState } from 'react';

// const Acomplaints = () => {
//   const [complaints, setComplaints] = useState([
//     {
//       id: 1,
//       username: 'John Doe',
//       email: 'john@example.com',
//       complaintTitle: 'Broken Screen',
//       complaintDescription: 'The screen of my laptop is cracked.',
//       brand: 'Dell',
//       expectedSolution: 'Replacement of screen',
//       priority: 'High',
//       date: '2025-01-02',
//       status: 'Pending',
//     },
//     {
//       id: 2,
//       username: 'Jane Smith',
//       email: 'jane@example.com',
//       complaintTitle: 'Overheating Issue',
//       complaintDescription: 'The laptop overheats after 30 minutes of use.',
//       brand: 'HP',
//       expectedSolution: 'Check cooling system and replace fan',
//       priority: 'Medium',
//       date: '2025-01-01',
//       status: 'In Progress',
//     },
//     {
//       id: 3,
//       username: 'Sara Williams',
//       email: 'sara@example.com',
//       complaintTitle: 'Battery not charging',
//       complaintDescription: 'My laptop battery is not charging properly.',
//       brand: 'Apple',
//       expectedSolution: 'Replace the battery or check charging port',
//       priority: 'Low',
//       date: '2025-01-03',
//       status: 'Updated',
//     },
//     {
//       id: 4,
//       username: 'Sara Williams',
//       email: 'sara@example.com',
//       complaintTitle: 'Battery not charging',
//       complaintDescription: 'My laptop battery is not charging properly.',
//       brand: 'Apple',
//       expectedSolution: 'Replace the battery or check charging port',
//       priority: 'Low',
//       date: '2025-01-03',
//       status: 'Updated',
//     }
//   ]);

//   const [searchQuery, setSearchQuery] = useState('');
//   const [filterStatus, setFilterStatus] = useState('All');
//   const [currentPage, setCurrentPage] = useState(1);
//   const complaintsPerPage = 3;

//   // Filtering and Searching Logic
//   const filteredComplaints = complaints
//     .filter((complaint) =>
//       // Search by multiple fields
//       `${complaint.username} ${complaint.email} ${complaint.complaintTitle} ${complaint.brand}`
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase())
//     )
//     .filter((complaint) => (filterStatus === 'All' ? true : complaint.status === filterStatus));

//   // Pagination Logic
//   const indexOfLastComplaint = currentPage * complaintsPerPage;
//   const indexOfFirstComplaint = indexOfLastComplaint - complaintsPerPage;
//   const currentComplaints = filteredComplaints.slice(indexOfFirstComplaint, indexOfLastComplaint);

//   const totalPages = Math.ceil(filteredComplaints.length / complaintsPerPage);

//   // Status Update Logic
//   const handleStatusChange = (complaintId, newStatus) => {
//     const updatedComplaints = complaints.map((complaint) =>
//       complaint.id === complaintId ? { ...complaint, status: newStatus } : complaint
//     );
//     setComplaints(updatedComplaints);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-semibold text-gray-800 mb-6">Admin Complaints</h1>

//       {/* Search and Filter Section */}
//       <div className="flex flex-wrap gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search complaints..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full md:w-1/2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         <select
//           value={filterStatus}
//           onChange={(e) => setFilterStatus(e.target.value)}
//           className="w-full md:w-1/4 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           <option value="All">All Statuses</option>
//           <option value="Pending">Pending</option>
//           <option value="In Progress">In Progress</option>
//           <option value="Updated">Updated</option>
//           <option value="Completed">Completed</option>
//         </select>
//       </div>

//       {/* Complaints List */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {currentComplaints.map((complaint) => (
//           <div
//             key={complaint.id}
//             className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
//           >
//             {/* Complaint Header */}
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-lg font-semibold text-gray-800">{complaint.complaintTitle}</h2>
//               <span
//                 className={`px-3 py-1 rounded-full text-white text-sm ${complaint.status === 'Pending'
//                   ? 'bg-gray-400'
//                   : complaint.status === 'In Progress'
//                   ? 'bg-blue-500'
//                   : complaint.status === 'Updated'
//                   ? 'bg-yellow-500'
//                   : 'bg-green-500'
//                 }`}
//               >
//                 {complaint.status}
//               </span>
//             </div>

//             {/* User and Complaint Details */}
//             <div className="mb-2 text-gray-600">
//               <p>
//                 <strong>User:</strong> {complaint.username}
//               </p>
//               <p>
//                 <strong>Email:</strong> {complaint.email}
//               </p>
//               <p>
//                 <strong>Brand:</strong> {complaint.brand}
//               </p>
//             </div>

//             <div className="mb-4 text-gray-600">
//               <p>
//                 <strong>Description:</strong> {complaint.complaintDescription}
//               </p>
//               <p>
//                 <strong>Expected Solution:</strong> {complaint.expectedSolution}
//               </p>
//               <p>
//                 <strong>Priority:</strong> {complaint.priority}
//               </p>
//             </div>

//             {/* Date and Status Update */}
//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-500">{complaint.date}</span>
//               <select
//                 value={complaint.status}
//                 onChange={(e) => handleStatusChange(complaint.id, e.target.value)}
//                 className="border rounded-lg px-3 py-2 text-sm text-gray-700 bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               >
//                 <option value="Pending">Pending</option>
//                 <option value="In Progress">In Progress</option>
//                 <option value="Updated">Updated</option>
//                 <option value="Completed">Completed</option>
//               </select>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="mt-6 flex justify-center items-center gap-4">
//         <button
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage((prev) => prev - 1)}
//           className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           Previous
//         </button>
//         <span className="text-gray-700">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           disabled={currentPage === totalPages}
//           onClick={() => setCurrentPage((prev) => prev + 1)}
//           className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Acomplaints;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Acomplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const complaintsPerPage = 3;

  useEffect(() => {
    // Fetch complaints from the API
    axios.get('http://localhost:8080/complaint')  // Replace with your API endpoint
      .then((response) => {
        setComplaints(response.data);
      })
      .catch((error) => {
        console.error('Error fetching complaints:', error);
      });
  }, []);

  // Filtering and Searching Logic
  const filteredComplaints = complaints
    .filter((complaint) =>
      `${complaint.username} ${complaint.email} ${complaint.complaintTitle} ${complaint.brand}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
    .filter((complaint) => (filterStatus === 'All' ? true : complaint.status === filterStatus));

  // Pagination Logic
  const indexOfLastComplaint = currentPage * complaintsPerPage;
  const indexOfFirstComplaint = indexOfLastComplaint - complaintsPerPage;
  const currentComplaints = filteredComplaints.slice(indexOfFirstComplaint, indexOfLastComplaint);

  const totalPages = Math.ceil(filteredComplaints.length / complaintsPerPage);

  // Status Update Logic
  const handleStatusChange = (complaintId, newStatus) => {
    const updatedComplaints = complaints.map((complaint) =>
      complaint.id === complaintId ? { ...complaint, status: newStatus } : complaint
    );
    setComplaints(updatedComplaints);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Admin Complaints</h1>

      {/* Search and Filter Section */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search complaints..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="w-full md:w-1/4 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Updated">Updated</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Complaints List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentComplaints.map((complaint) => (
          <div
            key={complaint.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Complaint Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">{complaint.ctitle}</h2>
              <span
                className={`px-3 py-1 rounded-full text-white text-sm ${complaint.status === 'Pending'
                  ? 'bg-gray-400'
                  : complaint.status === 'In Progress'
                  ? 'bg-blue-500'
                  : complaint.status === 'Updated'
                  ? 'bg-yellow-500'
                  : 'bg-green-500'
                }`}
              >
                {complaint.status}
              </span>
            </div>

            {/* User and Complaint Details */}
            <div className="mb-2 text-gray-600">
              <p>
                <strong>User:</strong> {complaint.name}
              </p>
              <p>
                <strong>Email:</strong> {complaint.email}
              </p>
              <p>
                <strong>Brand:</strong> {complaint.brand}
              </p>
            </div>

            <div className="mb-4 text-gray-600">
              <p>
                <strong>Description:</strong> {complaint.cdetails}
              </p>
              <p>
                <strong>Expected Solution:</strong> {complaint.csolution}
              </p>
              {/* <p>
                <strong>Priority:</strong> {complaint.priority}
              </p> */}
            </div>

            {/* Date and Status Update */}
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{complaint.date}</span>
              <select
                value={complaint.status}
                onChange={(e) => handleStatusChange(complaint.id, e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm text-gray-700 bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Updated">Updated</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center items-center gap-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Acomplaints;
