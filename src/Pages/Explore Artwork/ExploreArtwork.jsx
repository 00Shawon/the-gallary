import React from 'react';
import { useLoaderData } from 'react-router';
import ArtworkCard from '../../Component/ArtworkCard/ArtworkCard';

const ExploreArtwork = () => {
  const artworks = useLoaderData()
  console.log(artworks)
  return (
    <div className='max-w-11/12 mx-auto'>
      <h1>Explore Artwork</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          artworks.map(artwork => <ArtworkCard key={artwork._id} artwork={artwork}></ArtworkCard> )
        }
      </div>
    </div>
  );
};

export default ExploreArtwork;