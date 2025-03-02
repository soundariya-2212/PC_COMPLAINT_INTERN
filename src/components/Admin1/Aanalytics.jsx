import React, { useEffect, useState } from 'react';
import { FaUsers, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import { Bar, Pie, Line } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend, LineElement, PointElement);

const Aanalytics = () => {
  const [complaintsData, setComplaintsData] = useState([]);
  const [faqsData, setFaqsData] = useState([]); // New state for FAQs
  const [lineChartData, setLineChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Monthly Complaints',
        data: [],
        borderColor: '#FF6384',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
    ],
  });

  const [barData, setBarData] = useState({
    labels: [],
    datasets: [
      {
        label: 'New Users',
        data: [],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Complaints Received',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'FAQs Posted',
        data: [],
        backgroundColor: 'rgba(255, 159, 64, 0.6)', // Color for FAQ data
        borderColor: 'rgba(255, 159, 64, 1)', // Border color for FAQ data
        borderWidth: 1,
      },
    ],
  });

  // Fetch complaint and FAQ data from the backend
  useEffect(() => {
    axios
      .get('http://localhost:8080/complaint') // Replace with your actual endpoint for complaints data
      .then((response) => {
        const complaintData = response.data;
        setComplaintsData(complaintData);
        updateBarChartData(complaintData);
        updateLineChartData(complaintData);
      })
      .catch((error) => {
        console.error('Error fetching complaints data:', error);
      });

    axios
      .get('http://localhost:8080/faq/get') // Replace with your actual endpoint for FAQs data
      .then((response) => {
        const faqData = response.data;
        setFaqsData(faqData);
        updateBarChartData(faqData); // Update bar chart with FAQ data
      })
      .catch((error) => {
        console.error('Error fetching FAQs data:', error);
      });
  }, []);

  // Process the complaint and FAQ data to group by month for bar chart
  const updateBarChartData = (data) => {
    const complaintsByMonth = {};
    const faqsByMonth = {};

    data.forEach((item) => {
      const date = new Date(item.date); // Assuming 'date' is a valid date string
      const month = date.toLocaleString('default', { month: 'short' }); // Get the short month name

      // Group complaints by month
      if (complaintsByMonth[month]) {
        complaintsByMonth[month]++;
      } else {
        complaintsByMonth[month] = 1;
      }

      // Group FAQs by month (add logic to track FAQs if applicable)
      faqsData.forEach((faq) => {
        const faqDate = new Date(faq.date); // Assuming 'date' is a valid date string for FAQs
        const faqMonth = faqDate.toLocaleString('default', { month: 'short' });

        if (faqMonth === month) {
          if (faqsByMonth[month]) {
            faqsByMonth[month]++;
          } else {
            faqsByMonth[month] = 1;
          }
        }
      });
    });

    // Prepare the bar chart data
    const months = Object.keys(complaintsByMonth);
    const complaintCount = Object.values(complaintsByMonth);
    const faqCount = months.map((month) => faqsByMonth[month] || 0);

    setBarData({
      labels: months,
      datasets: [
        {
          label: 'FAQs Posted',
          data: faqCount,
          backgroundColor: 'rgba(255, 159, 64, 0.6)', // Color for FAQ data
          borderColor: 'rgba(255, 159, 64, 1)', // Border color for FAQ data
          borderWidth: 1,
        },
        {
          label: 'Complaints Received',
          data: complaintCount,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    });
  };

  // Process the complaint data to group by month for line chart
  const updateLineChartData = (data) => {
    const complaintsByMonth = {};

    data.forEach((complaint) => {
      const date = new Date(complaint.date); // Assuming 'date' is a valid date string
      const month = date.toLocaleString('default', { month: 'short' }); // Get the short month name
      if (complaintsByMonth[month]) {
        complaintsByMonth[month]++;
      } else {
        complaintsByMonth[month] = 1;
      }
    });

    // Prepare the data for the line chart
    const months = Object.keys(complaintsByMonth);
    const complaints = Object.values(complaintsByMonth);

    setLineChartData({
      labels: months,
      datasets: [
        {
          label: 'Monthly Complaints',
          data: complaints,
          borderColor: '#FF6384',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          tension: 0.4,
        },
      ],
    });
  };

  const pieData = {
    labels: ['Pending', 'In Progress', 'Completed'],
    datasets: [
      {
        data: [20, 35, 45],
        backgroundColor: ['#FF6384', '#36A2EB', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#4BC0C0'],
      },
    ],
  };

  return (
    <div className="h-full overflow-auto bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Analytics</h1>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total FAQs Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 h-52 flex flex-col justify-center items-center">
          <FaUsers size={40} className="text-blue-500 mb-4" />
          <h2 className="text-sm font-semibold text-gray-600">Total FAQs</h2>
          <p className="text-3xl font-bold text-gray-800">{faqsData.length}</p> {/* Display total FAQs */}
        </div>
        {/* Total Complaints Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 h-52 flex flex-col justify-center items-center">
          <FaExclamationTriangle size={40} className="text-orange-500 mb-4" />
          <h2 className="text-sm font-semibold text-gray-600">Total Complaints</h2>
          <p className="text-3xl font-bold text-gray-800">{complaintsData.length}</p>
        </div>
        {/* Resolved Complaints Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 h-52 flex flex-col justify-center items-center">
          <FaCheckCircle size={40} className="text-green-500 mb-4" />
          <h2 className="text-sm font-semibold text-gray-600">Resolved Complaints</h2>
          <p className="text-3xl font-bold text-gray-800"></p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white shadow-lg rounded-lg p-3 overflow-hidden">
          <h2 className="text-sm font-semibold text-gray-600 mb-4">FAQ vs Complaints Received</h2>
          <div className="h-[300px]">
            <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow-lg rounded-lg p-3 overflow-hidden">
          <h2 className="text-sm font-semibold text-gray-600 mb-4">Complaint Status Breakdown</h2>
          <div className="h-[300px]">
            <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Line Chart */}
        <div className="bg-white shadow-lg rounded-lg p-3 mb-[10vh] overflow-hidden col-span-2">
          <h2 className="text-sm font-semibold text-gray-600 mb-4">Monthly Complaints</h2>
          <div className="h-[300px]">
            <Line data={lineChartData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aanalytics;


// import React, { useEffect, useState } from 'react';
// import { FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
// import { Bar, Pie, Line } from 'react-chartjs-2';
// import axios from 'axios';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Tooltip,
//   Legend,
//   LineElement,
//   PointElement,
// } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend, LineElement, PointElement);

// const Aanalytics = () => {
//   const [complaintsData, setComplaintsData] = useState([]);
//   const [faqData, setFaqData] = useState([]);
//   const [barData, setBarData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: 'Complaints Received',
//         data: [],
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: 'FAQs Added',
//         data: [],
//         backgroundColor: 'rgba(255, 159, 64, 0.6)',
//         borderColor: 'rgba(255, 159, 64, 1)',
//         borderWidth: 1,
//       },
//     ],
//   });

//   // Fetch data from the backend
//   useEffect(() => {
//     // Fetch complaints data
//     axios
//       .get('http://localhost:8080/complaint') // Replace with your actual endpoint
//       .then((response) => {
//         const complaintData = response.data;
//         setComplaintsData(complaintData);
//         updateBarChartData(complaintData);
//       })
//       .catch((error) => {
//         console.error('Error fetching complaints data:', error);
//       });

//     // Fetch FAQ data
//     axios
//       .get('http://localhost:8080/faq/get') // Replace with your actual endpoint
//       .then((response) => {
//         const faqData = response.data;
//         setFaqData(faqData);
//         updateBarChartData(faqData);
//       })
//       .catch((error) => {
//         console.error('Error fetching FAQ data:', error);
//       });
//   }, []);

//   const updateBarChartData = () => {
//     const complaintsByMonth = {};
//     const faqByMonth = {};

//     // Group complaints by month
//     complaintsData.forEach((item) => {
//       const date = new Date(item.date);
//       const month = date.toLocaleString('default', { month: 'short' });
//       complaintsByMonth[month] = (complaintsByMonth[month] || 0) + 1;
//     });

//     // Group FAQs by month
//     faqData.forEach((item) => {
//       const date = new Date(item.date);
//       const month = date.toLocaleString('default', { month: 'short' });
//       faqByMonth[month] = (faqByMonth[month] || 0) + 1;
//     });

//     const months = Object.keys(complaintsByMonth);
//     const complaintCount = months.map((month) => complaintsByMonth[month] || 0);
//     const faqCount = months.map((month) => faqByMonth[month] || 0);

//     setBarData({
//       labels: months,
//       datasets: [
//         {
//           label: 'Complaints Received',
//           data: complaintCount,
//           backgroundColor: 'rgba(75, 192, 192, 0.6)',
//           borderColor: 'rgba(75, 192, 192, 1)',
//           borderWidth: 1,
//         },
//         {
//           label: 'FAQs Added',
//           data: faqCount,
//           backgroundColor: 'rgba(255, 159, 64, 0.6)',
//           borderColor: 'rgba(255, 159, 64, 1)',
//           borderWidth: 1,
//         },
//       ],
//     });
//   };

//   return (
//     <div className="h-full overflow-auto bg-gray-100 p-6">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Analytics</h1>

//       {/* Key Statistics */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         {/* Total Complaints Card */}
//         <div className="bg-white shadow-lg rounded-lg p-6 h-52 flex flex-col justify-center items-center">
//           <FaExclamationTriangle size={40} className="text-orange-500 mb-4" />
//           <h2 className="text-sm font-semibold text-gray-600">Total Complaints</h2>
//           <p className="text-3xl font-bold text-gray-800">{complaintsData.length}</p>
//         </div>
//         {/* Resolved Complaints Card */}
//         <div className="bg-white shadow-lg rounded-lg p-6 h-52 flex flex-col justify-center items-center">
//           <FaCheckCircle size={40} className="text-green-500 mb-4" />
//           <h2 className="text-sm font-semibold text-gray-600">Resolved Complaints</h2>
//           <p className="text-3xl font-bold text-gray-800">
//             {complaintsData.filter((complaint) => complaint.status === 'resolved').length}
//           </p>
//         </div>
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Bar Chart */}
//         <div className="bg-white shadow-lg rounded-lg p-3 overflow-hidden">
//           <h2 className="text-sm font-semibold text-gray-600 mb-4">Complaints vs FAQs per Month</h2>
//           <div className="h-[300px]">
//             <Bar
//               data={barData}
//               options={{
//                 responsive: true,
//                 maintainAspectRatio: false,
//               }}
//             />
//           </div>
//         </div>

//         {/* Pie Chart */}
//         <div className="bg-white shadow-lg rounded-lg p-3 overflow-hidden">
//           <h2 className="text-sm font-semibold text-gray-600 mb-4">Complaint Status Breakdown</h2>
//           <div className="h-[300px]">
//             <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
//           </div>
//         </div>

//         {/* Line Chart */}
//         <div className="bg-white shadow-lg rounded-lg p-3 mb-[10vh] overflow-hidden col-span-2">
//           <h2 className="text-sm font-semibold text-gray-600 mb-4">Monthly Complaints</h2>
//           <div className="h-[300px]">
//             <Line
//               data={lineChartData}
//               options={{
//                 responsive: true,
//                 maintainAspectRatio: false,
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Aanalytics;
