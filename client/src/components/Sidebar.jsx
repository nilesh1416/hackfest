// src/components/Sidebar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Moon, Sun, LogOut } from 'lucide-react';

const Sidebar = ({ darkMode, toggleDarkMode, isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const close = () => setIsOpen(false);

  return (
    <>
      {/* Burger for mobile */}
      <button className="md:hidden fixed top-4 left-4 z-[60] p-2 rounded bg-gray-100/70 dark:bg-gray-800/70"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-[50] bg-black/40"
          onClick={close}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`
          fixed z-[55] top-0 left-0 h-full w-64 bg-white dark:bg-gray-900
          text-gray-800 dark:text-white shadow-lg
          transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
        `}
      >
        <div className="p-6 text-xl font-bold border-b border-gray-200 dark:border-gray-700">
          HackFest
        </div>

        {/* Vertical menu */}
        <nav className="flex flex-col px-6 py-4 space-y-4 text-lg">
          <Link to="/" onClick={close} className="hover:text-blue-600">🏠 Home</Link>
          <Link to="/about" onClick={close} className="hover:text-blue-600">ℹ️ About</Link>
          <Link to="/events" onClick={close} className="hover:text-blue-600">📅 Events</Link>
          <Link to="/dashboard" onClick={close} className="hover:text-blue-600">📊 Dashboard</Link>
          <Link to="/contact" onClick={close} className="hover:text-blue-600">📞 Contact</Link>
          <Link to="/team" onClick={close} className="hover:text-blue-600">👥 Team</Link>
          <Link to="/register" onClick={close} className="hover:text-blue-600">📝 Register</Link>

          <hr className="border-gray-300 dark:border-gray-700 my-4" />

          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 hover:text-blue-600"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-600 hover:text-red-800"
          >
            <LogOut size={18} />
            Logout
          </button>
        </nav>
      </aside>
      
    </>
  );
};

export default Sidebar;
