 import React, { useEffect, useState } from 'react';
 import { Link } from 'react-router-dom';
 import { Menu, X, Moon, Sun } from 'lucide-react';
 import Sidebar from './Sidebar';

const Navbar = () => {
    
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-gray-900 dark:text-white shadow-md sticky top-0 z-50">

        
        

      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <button className="md:hidden fixed px-2 py-3 rounded bg-gray-100/70 dark:bg-gray-800/70"
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold px-12 text-indigo-700 dark:text-indigo-300">
          MMMUT HackFest
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/events">Events</Link>
          {/* <Link to="/dashboard">Dashboard</Link> */}
          <Link to="/contact">Contact</Link>
          <Link to="/Team">Team</Link>
          <Link to="/Register">Register</Link>
          {/* <Link to="/admin" className="hover:text-blue-500">Admin</Link> */}
          {/* <Link to="/adminPage">Admin</Link> */}
          
        </nav>

        {/* Icons */}
        <div className="flex justify-items-start gap-4">
          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="text-gray-700 dark:text-white">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Icon */}
        </div>
      </div>
      

      {/* Mobile Nav */}
      {isOpen && (
      <div className={`relative min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Sidebar component */}
      <Sidebar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      Main content layout
      <div className="ml-0 md:ml-64 transition-all">
        {/* Optional header/navbar area */}
        <header className="p-4 shadow-md bg-white dark:bg-gray-800 flex justify-between items-center">
          <h1 className="text-xl font-bold">HackFest Dashboard</h1>
        </header>

        {/* Page Content */}
        <main className="p-4">
          {/* Add Routes or children here */}
          <p>Welcome to your Hackathon Dashboard!</p>
        </main>
      </div>
    </div>
      
        
      )
      }
    </header>
  );
};

export default Navbar;
