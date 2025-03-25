import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-primary shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-3">
            <img src="/favicon.ico" alt="MFUMO Logo" className="w-8 h-8" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#missionstatement"
              className="text-white hover:text-gray-200"
            >
              Mission
            </a>
            <a href="#about" className="text-white hover:text-gray-200">
              About Us
            </a>
            <a href="#policies" className="text-white hover:text-gray-200">
              Policies
            </a>
            <a href="#leadership" className="text-white hover:text-gray-200">
              Leadership
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary">
            <a
              href="#mission"
              onClick={handleLinkClick}
              className="text-white block px-3 py-2 rounded-md"
            >
              Mission
            </a>
            <a
              href="#about"
              onClick={handleLinkClick}
              className="text-white block px-3 py-2 rounded-md"
            >
              About Us
            </a>
            <a
              href="#policies"
              onClick={handleLinkClick}
              className="text-white block px-3 py-2 rounded-md"
            >
              Policies
            </a>
            <a
              href="#leadership"
              onClick={handleLinkClick}
              className="text-white block px-3 py-2 rounded-md"
            >
              Leadership
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
