// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ProjectUploadForm from "../components/ProjectUploadForm";
// import Sidebar from '../components/Sidebar';

// function Dashboard() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();
//   const [darkMode, setDarkMode] = useState(false);


//   // On page load, check token
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');

//     if (!token || !userData) {
//       navigate('/login'); // Not logged in
//     } else {
//       setUser(JSON.parse(userData)); // Load user info
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     navigate('/login');
//   };

//   return (
//  <>
//     <div className="p-6 max-w-3xl mx-auto">
//       {user ? (
//         <>
//           <h2 className="text-2xl font-bold mb-4">Welcome, {user.name} 👋</h2>
//           <p className="mb-6 text-gray-600">Email: {user.email}</p>

//           <button
//             onClick={handleLogout}
//             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//           >
//             Logout
//           </button>

//           {/* Placeholder for Project Upload */}
//           <div className="mt-10 border-t pt-6">
//             <h3 className="text-xl font-semibold">Upload Your Project</h3>
//             <p className="text-sm text-gray-500">Coming up next...</p>
//           </div>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-6">Welcome to Dashboard</h1>
//       <ProjectUploadForm />
//     </div>
//      <div className={darkMode ? 'dark' : ''}>
//       <div className="flex">
//         <Sidebar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

//         <main className="ml-64 p-6 w-full min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
//           <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h1>
//           <p>This is your central place to manage your team, project, and profile.</p>
//         </main>
//       </div>
//     </div>
//  </>
//   );
// }

// export default Dashboard;
// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [isOpen, setIsOpen] = useState(false);          // ⬅ mobile drawer

  /* keep <html> class in sync with darkMode */
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  /* lock body scroll when drawer open on mobile */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex">
        <Sidebar
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        {/* Main content shifts right on desktop, full‑width on mobile */}
        <main className="flex-1 md:ml-64 p-6 min-h-screen bg-gray-100 dark:bg-gray-800
                          text-gray-900 dark:text-white transition-colors">
          <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h1>
          <p>
            This is your central place to manage your team, project, and profile.
          </p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
