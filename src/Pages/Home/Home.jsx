import React, { use } from 'react';
import HomeArtwork from '../../Component/ArtworkCard/HomeArtwork';
import Header from '../../Component/Header/Header';
import TopArtist from '../../Component/TopArtist/TopArtist';
import Community from '../../Component/Community/Community';
import { Fade } from 'react-awesome-reveal';


const promise=  fetch('http://localhost:3000/homeArtwork').then(res =>res.json());
 
const Home = () => {
const artworks = use(promise)
console.log(artworks)
  return (
  <div className='max-w-11/12 mx-auto my-10'>
   
    <Header></Header> 
    <h2 className=' font-bold text-3xl pt-20 gradient'>Featured Art</h2>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>

<Fade cascade>
      {
      artworks.map(artwork =>  <HomeArtwork key={artwork._id} artwork={artwork}></HomeArtwork>)
    }
</Fade>
   </div>
   <TopArtist className=''></TopArtist>
   <Community></Community>
  </div>
  
  );
};

export default Home;