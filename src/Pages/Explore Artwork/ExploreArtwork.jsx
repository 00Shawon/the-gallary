import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ArtworkCard from '../../Component/ArtworkCard/ArtworkCard';
import Loading from '../Loading/Loading';
import { Fade } from 'react-awesome-reveal';

const ExploreArtwork = () => {
  const data = useLoaderData()
  const [artworks, setArtworks] = useState(data)
  const [loading, setLoading] = useState(false)
  console.log(artworks)

const handleSearch = (e)=> {
e.preventDefault()
const searchText = e.target.search.value;
setLoading(true)
console.log(searchText)

fetch(`http://localhost:3000/search?search=${searchText}`)
.then(res=> res.json())
.then(data=>{
  console.log(data)
setArtworks(data)
setLoading(false)
})

if(loading){
  <Loading></Loading>
}

}
  return (
    <div className='max-w-11/12 mx-auto'>
      <div className='flex flex-col md:flex-row md:justify-between mt-10'>
        <h1 className='card-title mx-auto text-2xl font-bold  mb-4'>Explore Artwork</h1>
        <form onSubmit={handleSearch}>
             <label className="input ">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" name='search' required placeholder="Search" />
  <button className='btn btn-outline text-primary'>Search</button>
</label>
        </form>
   
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <Fade cascade>
          {
          artworks.map(artwork => <ArtworkCard key={artwork._id} artwork={artwork}></ArtworkCard> )
        } 
        </Fade>
       
      </div>
    </div>
  );
};

export default ExploreArtwork;