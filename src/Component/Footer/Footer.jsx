import React from 'react';
import { Link } from 'react-router';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 font-sans">
      <div className="max-w-[1400px] w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="space-y-6">
          <Link to="/" className="text-3xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            ArtistHub
          </Link>
          <p className="text-gray-400 leading-relaxed">
            Connecting artists and art lovers worldwide. Discover unique masterpieces and share your creativity with a passionate community.
          </p>
          <div className="flex gap-4">
             {/* Social Icons with hover effects */}
             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300">
                <FaFacebook size={18} />
             </a>
             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300">
                <FaTwitter size={18} />
             </a>
             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300">
                <FaInstagram size={18} />
             </a>
             <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                <FaLinkedin size={18} />
             </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-heading font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link to="/" className="hover:text-purple-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Home</Link></li>
            <li><Link to="/exploreArtwork" className="hover:text-purple-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Explore Artwork</Link></li>
            <li><Link to="/addArtwork" className="hover:text-purple-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Add Artwork</Link></li>
            <li><Link to="/myGallery" className="hover:text-purple-400 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> My Gallery</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white text-lg font-heading font-bold mb-6">Support</h3>
           <ul className="space-y-4">
            <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
           <h3 className="text-white text-lg font-heading font-bold mb-6">Stay in the loop</h3>
           <p className="text-gray-400 mb-6">Subscribe to our newsletter for the latest art trends and updates.</p>
           <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-gray-800 text-white px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 placeholder-gray-500"
              />
              <button className="absolute right-2 top-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white p-2 rounded-md hover:opacity-90 transition-opacity">
                 <FaArrowRight />
              </button>
           </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1400px] w-11/12 mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
         <p className="text-gray-500 text-sm">© {new Date().getFullYear()} ArtistHub. All rights reserved.</p>
         <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <FaHeart className="text-red-500" /> by Shawon Socials Ltd.
         </p>
      </div>
    </footer>
  );
};

export default Footer;