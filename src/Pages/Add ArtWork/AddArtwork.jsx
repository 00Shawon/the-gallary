
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Firebase/context/AuthContext";
import { data } from "react-router";

const AddArtwork = () => {
 const {user} = useContext(AuthContext)
 console.log(user)

 

  const handleSubmit = async (e) => {
    e.preventDefault();
 const  formData = {
    
artist_name: e.target.name.value ,
image: e.target.image.value,
artist_photo:e.target.image.value,
title: e.target.title.value,
description:e.target.description.value,
medium_tools:e.target.medium.value,
category:e.target.category.value,
artist_email:e.target.image.value ,
visibility: e.target.visibility.value,
price: e.target.price.value,
likes: 0,
 createdAt: new Date()
  } 

  fetch('http://localhost:3000/publicArtwork',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(data => {
    toast.success('Artwork Added successfully')
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

          <form onSubmit={handleSubmit} className="space-y-4">
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
              
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="label">Category</label>
              <select
                name="category"
             
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
               
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="label">Description</label>
              <textarea
                name="description"
            
                className="textarea textarea-bordered w-full"
                required
              />
            </div>

            {/* Optional Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label">Dimensions (optional)</label>
                <input
                  type="text"
                  name="dimensions"
            
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">Price (optional)</label>
                <input
                  type="number"
                  name="price"
          
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
             
                className="select select-bordered w-full"
              >
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>

           

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-full mt-4">
              Add Artwork
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArtwork;

