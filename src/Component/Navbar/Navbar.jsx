import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Firebase/context/AuthContext';
import { FaSun, FaMoon, FaBars, FaTimes, FaUser, FaHeart, FaImages, FaChartLine } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logout Successful"))
      .catch((error) => console.error(error));
    setIsDropdownOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/exploreArtwork" },
    { name: "Add Artwork", path: "/addArtwork" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  const userMenuItems = [
    { name: "My Gallery", path: "/myGallery", icon: FaImages },
    { name: "My Favorites", path: "/myFavorites", icon: FaHeart },
    { name: "Dashboard", path: "/dashboard", icon: FaChartLine },
  ];

  const showScrolledStyle = isScrolled || !isHomePage;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showScrolledStyle
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-sm border-b border-gray-200/50 dark:border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-black tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300">
                Artist
              </span>
              <span className={`${showScrolledStyle ? "text-gray-900 dark:text-white" : "text-white"} transition-colors`}>
                Hub
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm font-semibold transition-colors duration-200 ${
                        isActive 
                          ? "text-purple-600 dark:text-purple-400" 
                          : showScrolledStyle 
                            ? "text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400" 
                            : "text-white/90 hover:text-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 pl-6 border-l border-gray-200/30 dark:border-gray-700/30">
              {/* Theme Toggle */}
              <button 
                onClick={handleThemeToggle} 
                className={`p-2 rounded-lg transition-all duration-200 ${
                  showScrolledStyle 
                    ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                aria-label="Toggle theme"
              >
                {theme === "light" ? <FaMoon size={16} /> : <FaSun size={16} />}
              </button>

              {/* User Section */}
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                    className="flex items-center gap-2 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-[2px]">
                      <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 overflow-hidden">
                        <img
                          src={user.photoURL}
                          alt={user.displayName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {/* User Info */}
                      <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                        <p className="text-sm font-bold text-gray-900 dark:text-white truncate">
                          {user.displayName}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {user.email}
                        </p>
                      </div>

                      {/* Menu Items */}
                      <div className="py-2">
                        {userMenuItems.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsDropdownOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                          >
                            <item.icon className="w-4 h-4 text-purple-500" />
                            {item.name}
                          </Link>
                        ))}
                      </div>

                      {/* Logout */}
                      <div className="border-t border-gray-100 dark:border-gray-700 pt-2">
                        <button
                          onClick={handleLogOut}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        >
                          <FaUser className="w-4 h-4" />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Link
                    to="/auth/login"
                    className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                      showScrolledStyle 
                        ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" 
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    Log In
                  </Link>
                  <Link
                    to="/auth/signup"
                    className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className={`lg:hidden p-2 rounded-lg ${
              showScrolledStyle 
                ? "text-gray-800 dark:text-white" 
                : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-300 origin-top ${
          isMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {/* Nav Links */}
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2 text-base font-semibold rounded-lg transition-colors ${
                  isActive 
                    ? "text-purple-600 bg-purple-50 dark:bg-purple-900/20" 
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* User Menu Items (Mobile) */}
          {user && (
            <>
              <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
              {userMenuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2 text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <item.icon className="w-4 h-4 text-purple-500" />
                  {item.name}
                </Link>
              ))}
            </>
          )}

          {/* Auth Buttons (Mobile) */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            {user ? (
              <button
                onClick={() => { handleLogOut(); setIsMenuOpen(false); }}
                className="w-full px-4 py-3 text-base font-semibold text-red-600 bg-red-50 dark:bg-red-900/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
              >
                Logout
              </button>
            ) : (
              <div className="space-y-2">
                <Link
                  to="/auth/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full px-4 py-3 text-base font-semibold text-center text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Log In
                </Link>
                <Link
                  to="/auth/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full px-4 py-3 text-base font-semibold text-center text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg hover:shadow-lg transition-all"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Theme Toggle (Mobile) */}
          <button
            onClick={handleThemeToggle}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;