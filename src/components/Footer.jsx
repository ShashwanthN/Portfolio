import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Shashwanth N Sivakumar. </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/ShashwanthN" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            LinkedIn
          </a>
          <a href="mailto:shashwanthsivakumarn@gmail.com" className="hover:text-gray-400">
            Email
          </a>
        </div>
        <div className="mt-4 text-xs">
          <p>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
