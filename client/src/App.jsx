import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/AuthContext';

// Import all pages
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';

// Import Navbar and Footer
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// src/App.jsx or src/routes.jsx
import DashboardLayout from './components/layouts/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import EditProfile from './pages/EditProfile';
import UploadForm from './pages/ProjectUpload';
import Logout from './pages/Logout'; // Optional
import CampusAmbassador from './pages/CampusAmbassador';
import AdminRoute from './pages/AdminRoute';
import AdminPage from './pages/AdminPage';


function App() {
  return (
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="ProjectUpload" element={<UploadForm/>} />
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard/ca" element={<CampusAmbassador />} />
        {/* Add login/register routes as needed */}
        <Route path="/adminPage" element={<AdminPage />} />
        <Route path="/admin"element={<AdminRoute><AdminPage /></AdminRoute> }/>

        
      </Routes>
      <Footer />
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

export default App;
