import React, { use } from 'react';
import HomeArtwork from '../../Component/ArtworkCard/HomeArtwork';
import Header from '../../Component/Header/Header';
import TopArtist from '../../Component/TopArtist/TopArtist';
import Community from '../../Component/Community/Community';
import { Fade, Slide } from 'react-awesome-reveal';

const promise = fetch(`${import.meta.env.VITE_API_URL}/homeArtwork`).then(res => res.json());

const Home = () => {
  const artworks = use(promise);
  console.log(artworks);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Search/Meta Sync: Navbar is fixed, Header is full width Hero */}
      <Header />

      {/* Container to center content */}
      <div className="w-11/12 max-w-[1400px] mx-auto pb-20 relative z-10">
        
        {/* Featured Art Section */}
        <section className="my-20">
          <div className="text-center mb-12">
             <Fade direction="up" triggerOnce>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4 tracking-tight">
                Featured Masterpieces
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Discover the most captivating artworks curated just for you. Dive into a world of color, emotion, and creativity.
              </p>
            </Fade>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <Fade cascade damping={0.1} triggerOnce>
              {artworks.map(artwork => (
                <HomeArtwork key={artwork._id} artwork={artwork} />
              ))}
            </Fade>
          </div>
        </section>

        {/* Top Artists Section */}
        <section className="my-24">
          <TopArtist />
        </section>

        {/* Community Section */}
        <section className="my-24">
          <Community />
        </section>
      </div>
    </div>
  );
};

export default Home;