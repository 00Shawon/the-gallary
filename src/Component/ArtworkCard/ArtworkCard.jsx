import React from 'react';
import { FaHeart } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import { Link } from 'react-router';

const ArtworkCard = ({ artwork }) => {
  const {
    _id,
    title,
    category,
    artist_name,
    price,
    artist_photo,
    image,
    likes = 0,
  } = artwork;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col h-full min-h-[440px]">
      {/* Image Container */}
      <div className="relative h-60 flex-shrink-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-gray-800 shadow-sm uppercase border border-white/50">
          {category}
        </div>

        {/* Floating Like Badge (User preference integration or just visual) */}
        <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
           <FaHeart className="text-pink-500" /> {likes}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-grow relative">
        {/* Title */}
        <h2 className="text-xl font-heading font-bold text-gray-900 leading-tight mb-3 line-clamp-1 group-hover:text-purple-600 transition-colors">
          {title}
        </h2>

        {/* Artist Info */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={artist_photo}
            alt={artist_name}
            className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm ring-1 ring-gray-100"
          />
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Created solely by</span>
            <span className="text-sm font-semibold text-gray-700 truncate max-w-[150px]">{artist_name}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-50 my-auto"></div>

        {/* Footer: Price & Action */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-col">
             <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Price</span>
             <span className="text-xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
               ${price}
             </span>
          </div>

          <Link
            to={`/artworkDetails/${_id}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 group-hover:bg-purple-50 text-gray-600 group-hover:text-purple-600 text-xs font-bold uppercase tracking-wide transition-all duration-300"
          >
            View
            <MdArrowForward className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;