import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import creative from "../../assets/wallpaper-8327848_1280.jpg";
import fitness from "../../assets/ultraviolet-make-up-portrait-girl-painted-fluorescent-powder-halloween-concept.jpg";
import culinary from "../../assets/carosal 1.jpg";
import music from "../../assets/carosal 3.jpg";
import tech from "../../assets//crosal 2.jpg";

const Header = () => {
  // Define image list for react-image-gallery
  const images = [
    {
      original: tech,
      thumbnail: tech,
      description: "Digital Dream",
      originalClass: "object-cover rounded-2xl h-[700px]",
    },
    {
      original: fitness,
      thumbnail: fitness,
      description: "Retro",
      originalClass: "object-cover rounded-2xl h-[700px]",
    },
    {
      original: culinary,
      thumbnail: culinary,
      description: "Forest Whisper",
      originalClass: "object-cover rounded-2xl h-[700px]",
    },
    {
      original: music,
      thumbnail: music,
      description: "Silence",
      originalClass: "object-cover rounded-2xl h-[700px]",
    },
    {
      original: creative,
      thumbnail: creative,
      description: "Blossom Sculpture",
      originalClass: "object-cover rounded-2xl h-[600px]",
    },
  ];

  return (
    <div className="max-w-full mx-auto mt-4 rounded-2xl bg-cover overflow-hidden shadow-lg">
      <ImageGallery
        items={images}
        showThumbnails={true}
        showPlayButton={false}
        showFullscreenButton={true}
        autoPlay={true}
        slideInterval={4000}
        showNav={true}
        showBullets={true}
        additionalClass="rounded-2xl"
      />
    </div>
  );
};

export default Header;
