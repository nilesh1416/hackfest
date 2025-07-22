// src/components/DashboardLayout.jsx
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Hack Fest</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/dashboard/edit-profile" className="hover:underline">Edit Profile</Link>
          <Link to="/dashboard/ProjectUpload" className="hover:underline">Upload Project</Link>
          <Link to="/dashboard/ca" className="hover:underline ">CampusAmbassador</Link>
          <Link to="/logout" className="hover:underline text-red-400">Logout</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white p-8">
        <Outlet /> {/* Dynamic sub-route content */}
      </main>
    </div>
  );
};

export default DashboardLayout;
