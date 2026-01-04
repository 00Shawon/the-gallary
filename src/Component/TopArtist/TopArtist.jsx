import React from 'react';
import { IoStarSharp } from 'react-icons/io5';
import chef from '../../assets/jopopz-tallorin-Rny5u2JwahI-unsplash.jpg'
import Photographer from '../../assets/prince-akachi-4Yv84VgQkRM-unsplash.jpg'
import artist3 from '../../assets/afsana-tuli.jpg'

const TopArtist = () => {
  const artists = [
    {
      id: 1,
      name: "Luna Vega",
      role: "Digital Abstract Art",
      description: "Luna Vega is a contemporary digital artist known for blending vibrant colors with surreal landscapes. Her work explores the intersection of technology and emotion.",
      image: chef,
      rating: 4.9,
      country: "American"
    },
    {
      id: 2,
      name: "Marco Silvano",
      role: "Classical Sculpture",
      description: "Marco Silvano is a renowned sculptor who combines classical techniques with modern themes. His sculptures are celebrated for their intricate detail.",
      image: Photographer,
      rating: 4.9,
      country: "Italian"
    },
    {
      id: 3,
      name: "Mei Lin Chen",
      role: "Mixed Media Art",
      description: "Mei Lin Chen specializes in mixed media installations that comment on urban life and cultural identity. Her innovative use of materials creates thought-provoking environments.",
      image: artist3,
      rating: 4.9,
      country: "Chinese-Australian"
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4 tracking-tight">
          Top Artists
        </h2>
        <p className="text-gray-500 font-sans text-lg max-w-2xl mx-auto">
          Meet the visionary creators shaping the future of art with their unique styles and masterful techniques.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artists.map((artist) => (
          <div key={artist.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col h-full">
            {/* Image */}
            <div className="relative h-80 overflow-hidden">
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              
              {/* Rating Badge - Fixed Position */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <span className="font-bold text-gray-800 text-sm">{artist.rating}</span>
                <IoStarSharp className="text-yellow-400 text-sm" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="mb-4">
                <div className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-2">{artist.country}</div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                  {artist.role}
                </h3>
              </div>
              
              <p className="text-gray-600 font-sans leading-relaxed mb-6 flex-grow">
                {artist.description}
              </p>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-1 bg-gradient-to-b from-purple-600 to-pink-500 rounded-full"></div>
                  <div>
                    <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Artist</span>
                    <span className="font-bold text-gray-900 text-lg">{artist.name}</span>
                  </div>
                </div>
                <button className="btn btn-circle btn-ghost text-gray-400 group-hover:text-purple-600 group-hover:bg-purple-50 transition-all">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopArtist;