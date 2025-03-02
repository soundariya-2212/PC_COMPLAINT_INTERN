// import React, { useState } from "react";
// import { Edit, Trash, Search, ChevronDown, ChevronUp, CheckCircle, XCircle } from "lucide-react";

// const Ausers = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [users, setUsers] = useState([
//     { id: 1, name: "John Doe", location: "New York", phone: "123-456-7890", email: "john@example.com", pincode: "10001" },
//     { id: 2, name: "Jane Smith", location: "Los Angeles", phone: "987-654-3210", email: "jane@example.com", pincode: "90001" },
//     { id: 3, name: "Sam Johnson", location: "Chicago", phone: "555-123-4567", email: "sam@example.com", pincode: "60601" },
//     { id: 4, name: "Sara Williams", location: "Houston", phone: "321-987-6543", email: "sara@example.com", pincode: "77001" },
//     // Add more users for demo purposes
//   ]);
//   const [editingUserId, setEditingUserId] = useState(null);
//   const [editedUserData, setEditedUserData] = useState(null);

//   const handleSearch = (e) => setSearchQuery(e.target.value);
//   const handleSort = (column) => {
//     const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
//     setSortOrder(newSortOrder);

//     setUsers(
//       [...users].sort((a, b) => {
//         if (column === "name") {
//           return newSortOrder === "asc"
//             ? a.name.localeCompare(b.name)
//             : b.name.localeCompare(a.name);
//         }
//         if (column === "location") {
//           return newSortOrder === "asc"
//             ? a.location.localeCompare(b.location)
//             : b.location.localeCompare(a.location);
//         }
//         if (column === "email") {
//           return newSortOrder === "asc"
//             ? a.email.localeCompare(b.email)
//             : b.email.localeCompare(a.email);
//         }
//         return 0;
//       })
//     );
//   };

//   const handleDelete = (id) => {
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   const filteredUsers = users.filter((user) => {
//     const matchSearch =
//       user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.phone.includes(searchQuery) ||
//       user.pincode.includes(searchQuery);
//     return matchSearch;
//   });

//   const handleEditStart = (user) => {
//     setEditingUserId(user.id);
//     setEditedUserData({ ...user });
//   };

//   const handleEditChange = (e, field) => {
//     setEditedUserData((prevData) => ({
//       ...prevData,
//       [field]: e.target.value,
//     }));
//   };

//   const handleEditSave = () => {
//     setUsers((prevUsers) =>
//       prevUsers.map((user) =>
//         user.id === editingUserId ? { ...user, ...editedUserData } : user
//       )
//     );
//     setEditingUserId(null);
//     setEditedUserData(null);
//   };

//   const handleEditCancel = () => {
//     setEditingUserId(null);
//     setEditedUserData(null);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8 overflow-hidden">
//       <h1 className="text-3xl font-semibold text-gray-800 mb-6">Manage Users</h1>

//       {/* Search and Sort */}
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6 flex justify-between items-center">
//         <div className="flex items-center gap-4">
//           <Search size={20} />
//           <input
//             type="text"
//             placeholder="Search by name, email, location, phone, or pincode"
//             value={searchQuery}
//             onChange={handleSearch}
//             className="w-[24vw] p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//           />
//         </div>

//         <div className="flex items-center gap-6">
//           <div className="flex items-center gap-2">
//             <button onClick={() => handleSort("name")} className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
//               Name {sortOrder === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//             </button>
//             <button onClick={() => handleSort("location")} className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
//               Location {sortOrder === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//             </button>
//             <button onClick={() => handleSort("email")} className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
//               Email {sortOrder === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* User Table */}
//       <div className="bg-white shadow-lg rounded-lg p-6 overflow-x-auto" style={{ maxHeight: '600px', overflowY: 'auto' }}>
//         <table className="w-full table-auto text-left text-gray-600">
//           <thead className="bg-gray-50 border-b border-gray-200">
//             <tr>
//               <th className="p-4 font-semibold text-gray-700">Name</th>
//               <th className="p-4 font-semibold text-gray-700">Location</th>
//               <th className="p-4 font-semibold text-gray-700">Phone</th>
//               <th className="p-4 font-semibold text-gray-700">Email</th>
//               <th className="p-4 font-semibold text-gray-700">Pincode</th>
//               <th className="p-4 font-semibold text-gray-700">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-100">
//             {filteredUsers.length > 0 ? (
//               filteredUsers.map((user) => (
//                 <tr key={user.id} className="hover:bg-gray-50">
//                   <td className="p-4">
//                     {editingUserId === user.id ? (
//                       <input
//                         type="text"
//                         value={editedUserData.name}
//                         onChange={(e) => handleEditChange(e, "name")}
//                         className="p-1.5 w-28 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     ) : (
//                       user.name
//                     )}
//                   </td>
//                   <td className="p-4">
//                     {editingUserId === user.id ? (
//                       <input
//                         type="text"
//                         value={editedUserData.location}
//                         onChange={(e) => handleEditChange(e, "location")}
//                         className="p-1.5 w-28 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     ) : (
//                       user.location
//                     )}
//                   </td>
//                   <td className="p-4">
//                     {editingUserId === user.id ? (
//                       <input
//                         type="text"
//                         value={editedUserData.phone}
//                         onChange={(e) => handleEditChange(e, "phone")}
//                         className="p-1.5 w-28 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     ) : (
//                       user.phone
//                     )}
//                   </td>
//                   <td className="p-4">
//                     {editingUserId === user.id ? (
//                       <input
//                         type="email"
//                         value={editedUserData.email}
//                         onChange={(e) => handleEditChange(e, "email")}
//                         className="p-1.5 w-28 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     ) : (
//                       user.email
//                     )}
//                   </td>
//                   <td className="p-4">
//                     {editingUserId === user.id ? (
//                       <input
//                         type="text"
//                         value={editedUserData.pincode}
//                         onChange={(e) => handleEditChange(e, "pincode")}
//                         className="p-1.5 w-28 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     ) : (
//                       user.pincode
//                     )}
//                   </td>
//                   <td className="p-4 flex gap-4">
//                     {editingUserId === user.id ? (
//                       <>
//                         <button onClick={handleEditSave} className="text-green-600 hover:text-green-800">
//                           <CheckCircle size={20} />
//                         </button>
//                         <button onClick={handleEditCancel} className="text-red-600 hover:text-red-800">
//                           <XCircle size={20} />
//                         </button>
//                       </>
//                     ) : (
//                       <>
//                         <button onClick={() => handleEditStart(user)} className="text-blue-600 hover:text-blue-800">
//                           <Edit size={20} />
//                         </button>
//                         <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:text-red-800">
//                           <Trash size={20} />
//                         </button>
//                       </>
//                     )}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="p-4 text-center text-gray-500">
//                   No users found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Ausers;




import React, { useState, useEffect } from "react";
import axios from "axios";
import { Edit, Trash, Search, ChevronDown, ChevronUp, CheckCircle, XCircle } from "lucide-react";

const Ausers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUserData, setEditedUserData] = useState(null);

  // Fetch all users from the backend on component load
  useEffect(() => {
    axios
      .get("http://localhost:8080/user/all") // Update this URL to match your backend
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users:", error);
      });
  }, []);

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const handleSort = (column) => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    setUsers(
      [...users].sort((a, b) => {
        if (column === "name") {
          return newSortOrder === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        }
        if (column === "location") {
          return newSortOrder === "asc"
            ? a.location.localeCompare(b.location)
            : b.location.localeCompare(a.location);
        }
        if (column === "email") {
          return newSortOrder === "asc"
            ? a.email.localeCompare(b.email)
            : b.email.localeCompare(a.email);
        }
        return 0;
      })
    );
  };

  const handleDelete = async (userId) => {
    try {
        const response = await axios.delete(`http://localhost:8080/user/delete/${userId}`);
        console.log('User deleted:', response.data);
        
        // Remove the deleted user from the state
        setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
        console.error('Error deleting user:', error.response ? error.response.data : error.message);
    }
};
  

  const filteredUsers = users.filter((user) => {
    const matchSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.includes(searchQuery) ||
      user.pincode.includes(searchQuery);
    return matchSearch;
  });

  const handleEditStart = (user) => {
    setEditingUserId(user.id);
    setEditedUserData({ ...user });
  };

  const handleEditChange = (e, field) => {
    setEditedUserData((prevData) => ({
      ...prevData,
      [field]: e.target.value,
    }));
  };

  const handleEditSave = () => {
    axios
      .put(`http://localhost:8080/user/update/${editedUserData.id}`, editedUserData)
      .then((response) => {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === editedUserData.id ? { ...user, ...editedUserData } : user
          )
        );
        setEditingUserId(null);
        setEditedUserData(null);
      })
      .catch((error) => {
        console.error("There was an error saving the user data:", error);
      });
  };

  const handleEditCancel = () => {
    setEditingUserId(null);
    setEditedUserData(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 overflow-hidden">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Manage Users</h1>

      {/* Search and Sort */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search by name, email, location, phone, or pincode"
            value={searchQuery}
            onChange={handleSearch}
            className="w-[24vw] p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <button onClick={() => handleSort("name")} className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
              Name {sortOrder === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <button onClick={() => handleSort("location")} className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
              Location {sortOrder === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <button onClick={() => handleSort("email")} className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
              Email {sortOrder === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* User Table */}
      <div className="bg-white shadow-lg rounded-lg p-6 overflow-x-auto" style={{ maxHeight: '600px', overflowY: 'auto' }}>
        <table className="w-full table-auto text-left text-gray-600">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="p-4 font-semibold text-gray-700">Name</th>
              <th className="p-4 font-semibold text-gray-700">Location</th>
              <th className="p-4 font-semibold text-gray-700">Phone</th>
              <th className="p-4 font-semibold text-gray-700">Email</th>
              <th className="p-4 font-semibold text-gray-700">Pincode</th>
              <th className="p-4 font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="p-4">
                    {editingUserId === user.id ? (
                      <input
                        type="text"
                        value={editedUserData.name}
                        onChange={(e) => handleEditChange(e, "name")}
                        className="p-1.5 w-28 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      user.name
                    )}
                  </td>
                  <td className="p-4">
                    {editingUserId === user.id ? (
                      <input
                        type="text"
                        value={editedUserData.location}
                        onChange={(e) => handleEditChange(e, "location")}
                        className="p-1.5 w-28 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      user.location
                    )}
                  </td>
                  <td className="p-4">
                    {editingUserId === user.id ? (
                      <input
                        type="text"
                        value={editedUserData.phone}
                        onChange={(e) => handleEditChange(e, "phone")}
                        className="p-1.5 w-28 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      user.phone
                    )}
                  </td>
                  <td className="p-4">
                    {editingUserId === user.id ? (
                      <input
                        type="email"
                        value={editedUserData.email}
                        onChange={(e) => handleEditChange(e, "email")}
                        className="p-1.5 w-28 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td className="p-4">
                    {editingUserId === user.id ? (
                      <input
                        type="text"
                        value={editedUserData.pincode}
                        onChange={(e) => handleEditChange(e, "pincode")}
                        className="p-1.5 w-28 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      user.pincode
                    )}
                  </td>
                  <td className="p-4 flex gap-4">
                    {editingUserId === user.id ? (
                      <>
                        <button onClick={handleEditSave} className="text-green-600 hover:text-green-800">
                          <CheckCircle size={20} />
                        </button>
                        <button onClick={handleEditCancel} className="text-red-600 hover:text-red-800">
                          <XCircle size={20} />
                        </button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEditStart(user)} className="text-yellow-600 hover:text-yellow-800">
                          <Edit size={20} />
                        </button>
                        <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:text-red-800">
                          <Trash size={20} />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-600">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ausers;
