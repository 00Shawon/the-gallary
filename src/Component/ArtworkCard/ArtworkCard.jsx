import React from 'react';
import { FaHeart } from "react-icons/fa"; // heart icon
import { MdArrowForward } from "react-icons/md"; // arrow icon
import { Link } from 'react-router';

const ArtworkCard = ({artwork}) => {
  const {
    _id,
    title,
    category,
    artist_name,
    artist_photo,
    image,
    likes = 128, // fallback likes count
  } = artwork;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Artwork image */}
      <figure>
        <img src={image} alt={title} className="h-90 w-full object-cover" />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        {/* Title + Category */}
        <h2 className="card-title text-lg font-semibold text-gray-800">
          {title}
          <div className="badge badge-primary text-white font-medium">{category}</div>
        </h2>

        {/* Artist Section */}
        <div className="flex items-center mt-2">
          <img
            src={artist_photo}
            alt={artist_name}
            className="w-10 h-10 rounded-full object-cover border border-gray-200"
          />
          <p className="ml-3 text-gray-700 font-medium">{artist_name}</p>
        </div>

        {/* Likes + Button */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 text-gray-500">
            <FaHeart className="text-red-500" />
            <span>{likes}</span>
          </div>

          <Link to={`/artworkDetails/${_id}`} className="btn btn-sm btn-primary text-white flex items-center gap-1">
            View Details <MdArrowForward size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;