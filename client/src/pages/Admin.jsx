import React from 'react';
import DashboardLayout from '../components/layouts/DashboardLayout';

const Admin = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <p className="mb-4 text-gray-700">Welcome, Admin! Here you can manage the Hackathon dashboard.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Manage Teams</h2>
            <p>View, edit, or remove registered teams.</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Review Projects</h2>
            <p>Check uploaded projects and download PPTs.</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Add Announcements</h2>
            <p>Create important updates or alerts.</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Admin;
