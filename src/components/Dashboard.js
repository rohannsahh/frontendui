// import React from 'react';

// const Dashboard = () => {
//   return (
//     <div className="flex min-h-screen">

//       <div className="w-64 bg-gradient-to-b from-indigo-800 to-indigo-900 text-white p-6 hidden lg:flex flex-col">
//         <h1 className="text-2xl font-bold mb-10">Hello, Ayushi</h1>
//         <nav>
//           <ul>
//             <li className="mb-6">
//               <a href="/Dasboard" className="flex items-center p-2 text-white rounded hover:bg-indigo-700">
//                 Home
//               </a>
//             </li>
//             <li className="mb-6">
//               <a href="/visaSelection" className="flex items-center p-2 text-white rounded hover:bg-indigo-700">
//                 Book
//               </a>
//             </li>
//             <li className="mb-6">
//               <a href="#meet" className="flex items-center p-2 text-white rounded hover:bg-indigo-700">
//                 Meetings
//               </a>
//             </li>
//             <li className="mb-6">
//               <a href="/orders" className="flex items-center p-2 text-white rounded hover:bg-indigo-700">
//                 Orders
//               </a>
//             </li>
//             <li>
//               <a href="/support" className="flex items-center p-2 text-white rounded hover:bg-indigo-700">
//                 Support
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       <div className="flex-1  p-6 lg:p-12"style={{background: "linear-gradient(rgba(0, 0, 128, 1), rgba(0, 0, 61, 1))"
// }}>
//         <div className="lg:hidden mb-6">
//           <button className="p-2 text-indigo-800 rounded-md border border-indigo-800">
//             Menu
//           </button>
//         </div>
//         <h2 className="text-2xl font-bold mb-6">Upcoming Appointments</h2>
//         <div className="bg-gray-100 p-6 rounded-lg shadow-lg  w-full max-w-lg">
//           <div className="bg-white p-6 rounded-lg shadow-md relative w-full max-w-lg">
//             <p className="text-right text-gray-500 absolute top-4 right-4">Order ID- #001</p>
//             <div className="flex items-center mb-4">
//               <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-8 7v2m8-2v2m-8 4v2m8-2v2m-8 4v2m8-2v2m4-16H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2z"></path>
//               </svg>
//               <p className="ml-2 text-indigo-600 font-bold">Feb 30th 2024</p>
//             </div>
//             <div className="flex items-center mb-4">
//               <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-1V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m0 4h.01M6 8v8a2 2 0 002 2h8a2 2 0 002-2v-4H6a2 2 0 00-2 2v4a2 2 0 002 2h.01M6 8h.01M6 12h.01"></path>
//               </svg>
//               <p className="ml-2 text-indigo-600 font-bold">11:11 AM</p>
//             </div>
//             <p className="text-lg font-bold mb-2">A-Z Prep</p>
//             <p className="text-xl font-bold mb-2">Foundation Call</p>
//             <p className="text-green-600 font-semibold mb-4">Confirmed</p>
//             <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg">
//               Join
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row lg:p-12 text-white" style={{background: "linear-gradient(rgba(0, 0, 128, 1), rgba(0, 0, 61, 1))"
    }} >

      <div className="flex-shrink-0 w-full lg:w-64 p-6 lg:p-8  space-y-6">
        <nav className="space-y-4 flex flex-row lg:flex-col ">
          <a href="/dashboard" className="block py-2 px-2 bg-white font-semibold text-black rounded-lg text-center">Home</a>
          <a href="/visaSelection" className="block py-2 bg-white font-semibold text-black rounded-lg text-center">Book</a>
          <a href="/meet" className="block py-2 px-2 bg-white font-semibold text-black rounded-lg text-center">Meetings</a>
          <a href="/orders" className="block py-2 px-2 bg-white font-semibold text-black rounded-lg text-center">Orders</a>
          <a href="/support" className="block py-2 px-2 bg-white font-semibold text-black rounded-lg text-center">Support</a>
        </nav>
      </div>
      <div className='flex-grow p-6 lg:p-10 lg:pt-6  items-center justify-center  '>
      <div className='mt-0 mb-8'>
        <h1 className="text-2xl font-bold">Hello, Ayushi</h1>
        </div>

      <div className="  bg-white rounded-lg  shadow-lg w-full max-w-5xl h-full max-h-5xl  p-6 lg:p-10 ">
        <h2 className="text-2xl font-bold text-black mb-6">Upcoming Appointments</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-lg">
          <div className="bg-white p-6 rounded-lg shadow-md relative">
            <p className="text-right text-gray-500 absolute top-4 right-4">Order ID- #001</p>
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-8 7v2m8-2v2m-8 4v2m8-2v2m-8 4v2m8-2v2m4-16H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2z"></path>
                </svg>
                <p className="ml-2 text-indigo-600 font-bold">Feb 30th 2024</p>
              </div>
              <div className="flex items-center ml-6">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-1V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m0 4h.01M6 8v8a2 2 0 002 2h8a2 2 0 002-2v-4H6a2 2 0 00-2 2v4a2 2 0 002 2h.01M6 8h.01M6 12h.01"></path>
                </svg>
                <p className="ml-2 text-indigo-600 font-bold">11:11 AM</p>
              </div>
            </div>
            <p className="text-lg font-bold mb-2 text-black">A-Z Prep</p>
            <p className="text-xl font-bold mb-2 text-black">Foundation Call</p>
            <p className="text-green-600 font-semibold mb-4">Confirmed</p>
            <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg">
              Join
            </button>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
