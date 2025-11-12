
import { useLoaderData, useNavigate } from "react-router";
import {
  FaArrowLeft,
  FaPaintBrush,
  FaTag,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";
import { useState } from "react";

const ArtworkDetails = () => {
  const [like, setLike] = useState(0)
  const data = useLoaderData();
  const navigate = useNavigate();
 
const handleLike = ()  =>  {
  setLike(like  +1)
}

  const {
    _id,
    title,
    artist_name,
    artist_photo,
    artist_email,
    category,
    description,
    dimensions,
    image,
    medium_tools,
    price,
    visibility,
    createdAt,
  } = data.result || {};

console.log(data.result)

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center py-10 px-4">
      {/* Back button */}
      <div className="w-full max-w-6xl mb-6">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-ghost flex items-center gap-2"
        >
          <FaArrowLeft />
          Back
        </button>
      </div>

      {/* Artwork Card */}
      <div className="card lg:card-side bg-base-100 shadow-2xl max-w-6xl w-full overflow-hidden">
        {/* Image */}
        <figure className="lg:w-1/2 max-h-[650px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </figure>

        {/* Details */}
        <div className="card-body lg:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-primary">{title}</h1>

          <div className="flex items-center gap-3 mt-2">
            <img
              src={artist_photo}
              alt={artist_name}
              className="w-14 h-14 rounded-full border-2 border-primary object-cover"
            />
            <div>
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <FaUser className="text-primary" />
                {artist_name}
              </h2>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <FaEnvelope className="text-secondary" />
                {artist_email}
              </p>
            </div>
          </div>
  <div className="flex flex-wrap gap-4 mt-6">
            <button onClick={handleLike}
            
              className="btn btn-outline btn-primary flex items-center gap-2"
            >
              ❤️ Like {like}
            </button>

            <button className="btn btn-outline btn-secondary flex items-center gap-2">
              ⭐ Add to Favorites
            </button>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">{description}</p>

          <div className="divider"></div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <p className="flex items-center gap-2">
              <FaTag className="text-secondary" />
              <span className="font-semibold">Category:</span> {category}
            </p>
            <p className="flex items-center gap-2">
              <FaPaintBrush className="text-accent" />
              <span className="font-semibold">Medium:</span> {medium_tools}
            </p>
            <p>
              <span className="font-semibold">Dimensions:</span> {dimensions}
            </p>
            <p>
              <span className="font-semibold">Visibility:</span> {visibility}
            </p>
            <p>
              <span className="font-semibold">Created:</span>{" "}
              {new Date(JSON.parse(createdAt)?.$date || createdAt).toDateString()}
            </p>
          </div>

          <div className="mt-5 flex justify-between items-center">
            <h3 className="text-3xl font-bold text-success">{price}</h3>
            <button className="btn btn-primary btn-lg shadow-lg">
              Purchase Artwork
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-2 text-primary">
          About This Piece
        </h2>
        <p className="text-gray-600 leading-relaxed">
          This stunning artwork captures the serene harmony of nature through
          color, light, and reflection. The warm hues of sunset blend perfectly
          with the tranquil tones of twilight — a perfect addition to any
          collection. Each brushstroke reflects the artist’s deep connection to
          the stillness of the natural world.
        </p>
      </div>

      {/* Related Artworks Section */}
      <div className="max-w-6xl w-full mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-secondary">
          More by {artist_name}
        </h2>
        
          <p className="text-center text-gray-500">
            No other artworks found by this artist.
          </p>
        
      </div>
    </div>
  );
};

export default ArtworkDetails;
