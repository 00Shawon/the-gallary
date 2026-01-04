import { useLoaderData, useNavigate } from "react-router";
import { FaArrowLeft, FaPaintBrush, FaTag, FaUser, FaEnvelope, FaHeart, FaStar } from "react-icons/fa";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Firebase/context/AuthContext";
import { Fade } from "react-awesome-reveal";

const ArtworkDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const navigate = useNavigate();

  const artwork = data.result || {};
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
  } = artwork;

  const [likes, setLikes] = useState(artwork.likes || 0);
  const [isLiked, setIsLiked] = useState(false);

  // Handle Like Button
  const handleLike = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/artworks/${_id}/like`, {
        method: "PATCH",
      });
      const result = await res.json();

      if (result.success) {
        setLikes(result.likes);
        setIsLiked(true);
        toast.success("Thanks for the love!");
      } else {
        toast.error("Failed to like artwork");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  // Add to favorites
  const handleAddFavorite = () => {
    fetch(`${import.meta.env.VITE_API_URL}/favorites`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...artwork, downloaded_by: user.email }),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Added to your favorites collection!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Already in favorites or error occurred");
      });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-100">
      {/* Dynamic Background - Subtle Glows for Light Theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-100/50 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[35%] h-[35%] bg-pink-50/50 blur-[100px] rounded-full animate-pulse [animation-delay:2s]"></div>
      </div>

      {/* Navigation & Back Button */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-24 px-6 md:px-12">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-gray-500 hover:text-purple-600 transition-all duration-300"
        >
          <div className="p-2 rounded-full bg-gray-50 border border-gray-100 group-hover:bg-purple-50 group-hover:border-purple-100 group-hover:scale-110 transition-all">
            <FaArrowLeft className="text-sm" />
          </div>
          <span className="text-sm font-medium tracking-wide border-b border-transparent group-hover:border-purple-200 pb-0.5">
            Back to Collection
          </span>
        </button>
      </div>

      <main className="relative z-10 w-full max-w-7xl mx-auto py-12 px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image Showcase */}
          <div className="lg:col-span-7">
            <Fade triggerOnce direction="up">
              <div className="relative group">
                {/* Image Glow - More subtle for light theme */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 shadow-xl">
                  <img
                    src={image}
                    alt={title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Category Badge - Floating */}
                  <div className="absolute top-6 left-6">
                    <span className="px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 text-xs font-bold uppercase tracking-widest text-gray-800 shadow-sm">
                      {category}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          {/* Right Column: Information & Actions */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <Fade triggerOnce direction="right" cascade damping={0.1}>
              {/* Header Info */}
              <div>
                <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tight leading-none mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                  {title}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                  {description}
                </p>
              </div>

              {/* Artist Card */}
              <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-gray-100/50 hover:border-purple-100 transition-all">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <img
                      src={artist_photo}
                      alt={artist_name}
                      className="w-16 h-16 rounded-2xl object-cover ring-2 ring-purple-100"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-bold text-purple-500 tracking-widest mb-1 block">Created by Artist</span>
                    <h2 className="text-xl font-bold tracking-tight text-gray-900">{artist_name}</h2>
                    <p className="text-sm text-gray-500 font-medium">{artist_email}</p>
                  </div>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest block mb-2">Medium & Tools</span>
                  <div className="flex items-center gap-2">
                    <FaPaintBrush className="text-purple-500 text-sm" />
                    <span className="font-semibold text-sm text-gray-700">{medium_tools}</span>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest block mb-2">Dimensions</span>
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    {dimensions}
                  </div>
                </div>
              </div>

              {/* Purchase Card */}
              <div className="p-8 rounded-[2rem] bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100/50 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest block mb-1">Current Price</span>
                    <span className="text-4xl font-black text-gray-900">{price}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest block mb-1">Visibility</span>
                    <span className="px-3 py-1 rounded-full bg-white border border-purple-100 text-xs font-bold text-purple-600">
                      {visibility}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 px-8 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black text-lg shadow-lg hover:shadow-purple-200 hover:scale-[1.02] transform transition-all duration-300 active:scale-95">
                    Buy This Artwork
                  </button>
                  <div className="flex gap-2">
                    <button 
                      onClick={handleLike}
                      className={`group p-5 rounded-2xl border transition-all duration-300 ${
                        isLiked 
                        ? 'bg-red-500 border-red-500 text-white shadow-lg shadow-red-100' 
                        : 'bg-white border-gray-100 text-gray-400 hover:text-red-500 hover:border-red-100 hover:bg-red-50'
                      }`}
                    >
                      <FaHeart className={`text-xl ${isLiked ? 'scale-125' : 'group-hover:scale-125'} transition-transform duration-300`} />
                    </button>
                    <button 
                      onClick={handleAddFavorite}
                      className="group p-5 rounded-2xl bg-white border-gray-100 text-gray-400 hover:text-yellow-500 hover:border-yellow-100 hover:bg-yellow-50 transition-all duration-300"
                    >
                      <FaStar className="text-xl group-hover:scale-125 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center gap-2 text-xs text-gray-500 font-medium justify-center">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center">
                        <FaUser className="text-[8px] text-gray-400" />
                      </div>
                    ))}
                  </div>
                  <span>{likes} Art collectors liked this masterpiece</span>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </main>
    </div>
  );
};



export default ArtworkDetails;
