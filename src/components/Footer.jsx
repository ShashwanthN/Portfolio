import React from 'react';

const PortfolioFooter = () => {
  return (
    <footer className="bg-[#121212] text-gray-3 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <div>
            <h3 className="text-2xl font-bold mb-4">Your Name</h3>
            <div className="text-sm">
              <p>City, Country</p>
              <p>Email: <a href="mailto:youremail@example.com" className="underline hover:text-gray-400">youremail@example.com</a></p>
              <p>Phone: <a href="tel:1234567890" className="underline hover:text-gray-400">123-456-7890</a></p>
            </div>
            <div className="flex space-x-4 mt-4">
            
              <a href="#"><img src="/path-to-icon" alt="LinkedIn Icon" className="h-6 w-6" /></a>
              <a href="#"><img src="/path-to-icon" alt="GitHub Icon" className="h-6 w-6" /></a>
              <a href="#"><img src="/path-to-icon" alt="Twitter Icon" className="h-6 w-6" /></a>
            </div>
          </div>

       
          <div>
            <h4 className="font-bold mb-2">Projects</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline hover:text-gray-400">Project 1</a></li>
              <li><a href="#" className="hover:underline hover:text-gray-400">Project 2</a></li>
              <li><a href="#" className="hover:underline hover:text-gray-400">Project 3</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline hover:text-gray-400">Blog</a></li>
              <li><a href="#" className="hover:underline hover:text-gray-400">Documentation</a></li>
              <li><a href="#" className="hover:underline hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
