import React from 'react';

const PortfolioFooter = () => {
  return (
    <footer className="bg-[#121212] border-r border-l border-gray border-b text-gray-3 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid divide-x-2 grid-cols-1 md:grid-cols-3 gap-8">
         
          <div>
            <h3 className="text-2xl font-bold mb-4">Shashwanth N Sivakumar</h3>
            <div className="text-sm">
              <p>Chennai, India</p>
              <p>Email: <a href="mailto:shashwanthnsivakumar@gmail.com" className="underline hover:text-gray-400">shashwanthnsivakumarn@gmail.com</a></p>
              <p>Phone: <a href="tel:1234567890" className="underline hover:text-gray-400">+91 9790850801</a></p>
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
