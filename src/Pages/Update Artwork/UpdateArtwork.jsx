import React, { useContext } from 'react';
import { AuthContext } from '../../Firebase/context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { useLoaderData } from 'react-router';

const UpdateArtwork = () => {
  const {user} = useContext(AuthContext)
  const data  = useLoaderData();
  const artwork = data.result;
 console.log(artwork)

 const handleUpdate = async (e) => {
     e.preventDefault();
  const  formData = {
     
 artist_name: e.target.name.value ,
 image: e.target.image.value,
 
 title: e.target.title.value,
 description:e.target.description.value,
 medium_tools:e.target.medium.value,
 category:e.target.category.value,
 artist_email:e.target.email.value ,
 visibility: e.target.visibility.value,
 price: e.target.price.value,


   } 
 
   fetch(`http://localhost:3000/myArtwork/${artwork._id}`,{
     method:'PUT',
     headers:{
       'Content-Type':'application/json',
     },
     body:JSON.stringify(formData)
   })
   .then(res => res.json())
   .then(data => {
     toast.success('Artwork Updated successfully')
     console.log('after post',data)
   })
   .catch(err => {
     console.log(err)
   })
    
   };

  return (
   <div className="min-h-screen flex flex-col items-center bg-base-100 p-6">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
      <div className="card w-full max-w-2xl shadow-lg bg-base-100">
        <div className="card-body">
          <h2 className="card-title mx-auto text-2xl font-bold mb-4">Add New Artwork</h2>

          <form onSubmit={handleUpdate} className="space-y-4">
             {/* Read-only Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label">User Name</label>
                <input
                  type="text"
                  name="name"
              value={user.
displayName
}
                  readOnly
                  className="input input-bordered w-full bg-base-200"
                />
              </div>
              <div>
                <label className="label">User Email</label>
                <input
                  type="email"
                  name="email"
               value={user.email}
                  readOnly
                  className="input input-bordered w-full bg-base-200"
                />
              </div>
            </div>
            {/* Image URL */}
            <div>
              <label className="label">Image URL</label>
              <input
                type="url"
                name="image"
               defaultValue={artwork.image}
              
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Title */}
            <div>
              <label className="label">Title</label>
              <input
                type="text"
                name="title"
               defaultValue={artwork.title}
              
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="label">Category</label>
              <select
                name="category"
               defaultValue={artwork.category}
             
                className="select select-bordered w-full"
              >
                <option>Landscape</option>
                <option>Urban</option>
                <option>Nature</option>
                <option>Digital Art</option>
                <option>Sculpture</option>
                <option>Abstract</option>
                <option>Realism</option>
                <option>Architecture</option>
                <option>Seascape</option>
                <option>Spiritual</option>
              </select>
            </div>

            {/* Medium/Tools */}
            <div>
              <label className="label">Medium / Tools</label>
              <input
                type="text"
                name="medium"
               defaultValue={artwork.medium_tools}
               
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="label">Description</label>
              <textarea
                name="description"
               defaultValue={artwork.description}
            
                className="textarea textarea-bordered w-full"
                required
              />
            </div>

            {/* Optional Fields */}
            <div >
              

              <div>
                <label className="label">Price (optional)</label>
                <input
                  type="number"
                  name="price"
               defaultValue={artwork.price}
          
                  className="input input-bordered w-full"
                  min="0"
                />
              </div>
            </div>

            {/* Visibility */}
            <div>
              <label className="label">Visibility</label>
              <select
                name="visibility"
               defaultValue={artwork.visibility}
             
                className="select select-bordered w-full"
              >
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>

           

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-full mt-4">
              Update Artwork
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateArtwork;