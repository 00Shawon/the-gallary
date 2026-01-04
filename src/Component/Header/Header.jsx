import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Fade } from "react-awesome-reveal";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Assets
import creative from "../../assets/wallpaper-8327848_1280.jpg";
import fitness from "../../assets/ultraviolet-make-up-portrait-girl-painted-fluorescent-powder-halloween-concept.jpg";
import culinary from "../../assets/carosal 1.jpg";
import music from "../../assets/carosal 3.jpg";
import tech from "../../assets/crosal 2.jpg";
import forest from "../../assets/forest-whispers.jpg";
import { Link } from "react-router";

const Header = () => {
  const slides = [
    {
      image: creative,
      title: "Digital Dream",
      subtitle: "Innovating the Future of Art",
      description: "Explore the intersection of technology and creativity.",
    },
    {
      image: fitness,
      title: "Retro Vibes",
      subtitle: "Bold Colors, Bold Statements",
      description: "A journey back in time with a modern twist.",
    },
    {
      image: forest,
      title: "Forest Whisper",
      subtitle: "Nature's Untold Stories",
      description: "Immerse yourself in the serenity of the wild.",
    },
    {
      image: music,
      title: "Silence of Sound",
      subtitle: "Rhythms of the Soul",
      description: "Experience music like never before.",
    },
    {
      image: tech,
      title: "Blossom Sculpture",
      subtitle: "Fragile Beauty",
      description: "Art that breathes life into stone.",
    },
  ];

  return (
    <div className="w-full h-[85vh] overflow-hidden relative group">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50 bg-opacity-40"></div> {/* Overlay */}
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8 md:px-12">
              <Fade cascade damping={0.1} direction="up" triggerOnce={false}>
                 <h2 className="font-heading text-lg sm:text-xl md:text-3xl font-light tracking-[0.2em] uppercase text-gray-200 mb-4">
                  {slide.subtitle}
                </h2>
                <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
                  {slide.title}
                </h1>
                <p className="font-sans text-base sm:text-lg md:text-xl max-w-xs sm:max-w-2xl text-gray-100/90 mb-8 leading-relaxed drop-shadow-md">
                  {slide.description}
                </p>
                <Link to='/exploreArtwork' className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/40 text-white rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 font-semibold uppercase tracking-wider text-sm md:text-base shadow-lg hover:shadow-xl">
                  Explore Now
                </Link>
              </Fade>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
