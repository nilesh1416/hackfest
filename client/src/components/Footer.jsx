import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-2">© 2025 Hack Fest, MMMUT. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
