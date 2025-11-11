import React from 'react';
import { IoStarSharp } from 'react-icons/io5';
import chef from '../../assets/jopopz-tallorin-Rny5u2JwahI-unsplash.jpg'
import Photographer from '../../assets/prince-akachi-4Yv84VgQkRM-unsplash.jpg'
import artist3 from '../../assets/afsana-tuli.jpg'

const TopArtist = () => {
  return (
    <div>
      
 <div className=' my-15'>
      <h2 className=' font-bold text-3xl py-3 gradient'>Top Artist</h2>
    <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
  
<div className="card bg-base-100   h-[650px] shadow-sm ">
  <figure className='relative'>
    <img className='object-cover '
      src={chef}
      alt="Chef" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     Digital Abstract Art
      <div className="rounded-4xl px-2 flex items-center border border-yellow text-[#ff9100]   absolute top-3 right-2"> 4.9  <IoStarSharp /></div>
    </h2>
    <p> Luna Vega is a contemporary digital artist known for blending vibrant colors with surreal landscapes. Her work explores the intersection of technology and emotion, earning her a dedicated following on social media. She often employs virtual reality tools to create immersive art experiences.</p>
    <div className="card-actions justify-end">
      <div className=" rounded-md bg-primary px-2.5 py-0.5 text-white">Luna Vega</div>
      <div className="badge badge-outline">American</div>
    </div>
  </div>
</div>
<div className="card bg-base-100   h-[650px] shadow-sm ">
  <figure className='relative'>
    <img className='object-cover '
      src={Photographer}
      alt="Photographer" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     Classical Sculpture and Modern Fusion
      <div className="rounded-4xl px-2 flex items-center border border-yellow text-[#ff9100]  absolute top-3 right-2"> 4.9  <IoStarSharp /></div>
    </h2>
    <p>Marco Silvano is a renowned sculptor who combines classical techniques with modern themes. His sculptures are celebrated for their intricate detail and emotional depth. He frequently exhibits in galleries across Europe and is considered a pioneer of contemporary sculpture.</p>
    <div className="card-actions justify-end items-center">
      <div className=" rounded-md bg-primary px-2.5 py-0.5 text-white">Marco Silvano</div>
      <div className="badge badge-outline">Italian</div>
    </div>
  </div>
</div>
<div className="card bg-base-100   h-[650px] shadow-sm ">
  <figure className='relative'>
    <img className='object-cover '
      src={artist3}
      alt="artist" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    Mixed Media and Installation Art
      <div className="rounded-4xl px-2 flex items-center border border-yellow text-[#ff9100]  absolute top-3 right-2"> 4.9  <IoStarSharp /></div>
    </h2>
    <p>Mei Lin Chen specializes in mixed media installations that comment on urban life and cultural identity. Her innovative use of materials and space creates thought-provoking environments. She has participated in numerous international art festivals and is recognized for her experimental approach.</p>
    <div className="card-actions justify-end">
      <div className=" rounded-md bg-primary px-2.5 py-0.5 text-white">Mei Lin Chen</div>
      <div className="badge badge-outline">Chinese-Australian</div>
    </div>
  </div>
</div>
    </div>
    </div>
    </div>
  );
};

export default TopArtist;