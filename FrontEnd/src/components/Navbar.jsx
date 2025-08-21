import React, { useState, useRef, useEffect } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [token, setToken] = useState(true); // Assume logged in
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = () => {
    setShowMenu(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
            <img className="h-10" src={assets.logo} alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {token && (
              <div
                ref={dropdownRef}
                className="relative flex items-center gap-2 cursor-pointer group"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                <img
                  className="w-9 h-9 rounded-full object-cover border-2 border-violet-300"
                  src={assets.profile_pic}
                  alt="Profile"
                />
                <img
                  className="w-3 transition-transform transform group-hover:rotate-180"
                  src={assets.dropdown_icon}
                  alt="Arrow"
                />

                {showDropdown && (
                  <div className="absolute right-0 top-10 mt-2 w-48 bg-white rounded-lg shadow-xl z-10 py-2 text-sm font-medium text-gray-700">
                    <p onClick={() => { navigate(''); setShowDropdown(false); }}
                      className="block px-4 py-2 hover:bg-violet-100 hover:text-violet-700 cursor-pointer"
                    >
                      Home
                    </p>
                    <p onClick={() => { navigate('members'); setShowDropdown(false); }}
                      className="block px-4 py-2 hover:bg-violet-100 hover:text-violet-700 cursor-pointer"
                    >
                      Members
                    </p>
                    <p onClick={() => { navigate('notice'); setShowDropdown(false); }}
                      className="block px-4 py-2 hover:bg-violet-100 hover:text-violet-700 cursor-pointer"
                    >
                      Notifications
                    </p>
                    <p onClick={() => { navigate('my-profile'); setShowDropdown(false); }}
                      className="block px-4 py-2 hover:bg-violet-100 hover:text-violet-700 cursor-pointer"
                    >
                      My Profile
                    </p>
                    <p onClick={() => { setToken(false); setShowDropdown(false); }}
                      className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 cursor-pointer"
                    >
                      Logout
                    </p>
                  </div>
                )}
              </div>
            )}

            {!token && (
              <button
                onClick={() => navigate('/login')}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
              >
                Create Account
              </button>
            )}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <img src={assets.menu_icon} alt="Menu" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-20 animate-fadeIn">
          <div className="px-4 pt-4 pb-3 space-y-3">
            {token && (
              <>
                <div onClick={() => { navigate(''); handleNavClick(); }}
                  className="block px-4 py-2 text-gray-700 hover:text-violet-600 cursor-pointer"
                >
                  Home
                </div>
                <div onClick={() => { navigate('members'); handleNavClick(); }}
                  className="block px-4 py-2 text-gray-700 hover:text-violet-600 cursor-pointer"
                >
                  Members
                </div>
                <div onClick={() => { navigate('my-profile'); handleNavClick(); }}
                  className="block px-4 py-2 text-gray-700 hover:text-violet-600 cursor-pointer"
                >
                  My Profile
                </div>
                <div onClick={() => { navigate('notice'); handleNavClick(); }}
                  className="block px-4 py-2 text-gray-700 hover:text-violet-600 cursor-pointer"
                >
                  Notifications
                </div>
                <div onClick={() => { navigate('chatbot'); handleNavClick(); }}
                  className="block px-4 py-2 text-gray-700 hover:text-violet-600 cursor-pointer"
                >
                  ChatBot
                </div>
                <div onClick={() => { setToken(false); handleNavClick(); }}
                  className="block px-4 py-2 text-gray-700 hover:text-red-600 cursor-pointer"
                >
                  Logout
                </div>
              </>
            )}
            {!token && (
              <button
                onClick={() => {
                  navigate('/login');
                  handleNavClick();
                }}
                className="w-full text-left block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Create Account
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
