import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faSearch, faUser, faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="relative font-montserrat">
      <div className="flex justify-between items-center px-4 py-3 bg-gray-100">
        {/* Logo on the left */}
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>

        {/* Navigation and Icons for larger screens */}
        <div className="hidden md:flex justify-between items-center flex-1">
          <nav className="flex space-x-4 ml-8 text-sm">
            <Link to="/" className="text-gray-700 hover:text-black">HOME</Link>
            <Link to="/about" className="text-gray-700 hover:text-black">ABOUT</Link>
            <Link to="#" className="text-gray-700 hover:text-black">MEET THE ARTISANS</Link>
            <Link to="/news" className="text-gray-700 hover:text-black">NEWS</Link>
            <Link to="/contact" className="text-gray-700 hover:text-black">CONTACT</Link>
         
          </nav>
          <div className="flex space-x-4">
            <button className="text-gray-700">
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <button className="text-gray-700">
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button className="text-gray-700">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
        </div>

        {/* Toggle button for mobile */}
        <div className="md:hidden">
          <button 
            className="text-gray-700 p-2" 
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile navigation dropdown */}
      <div 
        className={`absolute top-full left-0 w-full bg-gray-100 md:hidden transition-all duration-300 ease-in-out ${
          isNavOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col items-start space-y-4 p-4">
          <a href="/" className="text-gray-700 hover:text-black w-full">HOME</a>
          <a href="/about" className="text-gray-700 hover:text-black w-full">ABOUT</a>
          <a href="/news" className="text-gray-700 hover:text-black w-full">NEWS</a>
          <a href="/contact" className="text-gray-700 hover:text-black w-full">CONTACT</a>
          
        </nav>
        <div className="flex justify-around p-4 border-t border-gray-200">
          <button className="text-gray-700 p-2">
            <FontAwesomeIcon icon={faSearch} size="lg" />
          </button>
          <button className="text-gray-700 p-2">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </button>
          <button className="text-gray-700 p-2">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header