import React, { useContext } from 'react';
import { AuthContext } from '../../Firebase/context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { useLoaderData, useNavigate } from 'react-router';
import { Fade } from "react-awesome-reveal";

const UpdateArtwork = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const artwork = data.result;
  const navigate = useNavigate();

  console.log(artwork);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = {
      artist_name: e.target.name.value,
      image: e.target.image.value,
      title: e.target.title.value,
      description: e.target.description.value,
      medium_tools: e.target.medium.value,
      category: e.target.category.value,
      artist_email: e.target.email.value,
      visibility: e.target.visibility.value,
      price: e.target.price.value,
    };

    fetch(`${import.meta.env.VITE_API_URL}/myArtwork/${artwork._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Artwork Updated successfully');
        console.log('after post', data);
        // Redirect to details page
        navigate(`/artworkDetails/${artwork._id}`);
      })
      .catch(err => {
        console.log(err);
        toast.error("Failed to update artwork");
      });

  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />

      <Fade direction="up" triggerOnce className="w-full max-w-3xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">

          <div className="p-8 sm:p-10">
            {/* Header Text */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-2">
                Update Masterpiece
              </h2>
              <p className="text-gray-500">
                Refine your artwork details before sharing with the world.
              </p>
            </div>

            <form onSubmit={handleUpdate} className="space-y-6">
              
              {/* User Info (Read-only) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label text-sm font-semibold text-gray-700 mb-1">Artist Name</label>
                  <input
                    type="text"
                    name="name"
                    value={user?.displayName || ""}
                    readOnly
                    className="input input-bordered w-full bg-gray-100 text-gray-500 cursor-not-allowed rounded-lg focus:outline-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label text-sm font-semibold text-gray-700 mb-1">Artist Email</label>
                  <input
                    type="email"
                    name="email"
                    value={user?.email || ""}
                    readOnly
                    className="input input-bordered w-full bg-gray-100 text-gray-500 cursor-not-allowed rounded-lg focus:outline-none"
                  />
                </div>
              </div>

              {/* Title & Image */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label text-sm font-semibold text-gray-700 mb-1">Artwork Title</label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={artwork.title}
                    className="input input-bordered w-full focus:ring-2 focus:ring-purple-500 focus:border-transparent rounded-lg transition-all"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label text-sm font-semibold text-gray-700 mb-1">Image URL</label>
                  <input
                    type="url"
                    name="image"
                    defaultValue={artwork.image}
                    className="input input-bordered w-full focus:ring-2 focus:ring-purple-500 focus:border-transparent rounded-lg transition-all"
                    required
                  />
                </div>
              </div>

              {/* Category & Medium */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label text-sm font-semibold text-gray-700 mb-1">Category</label>
                  <select
                    name="category"
                    defaultValue={artwork.category}
                    className="select select-bordered w-full focus:ring-2 focus:ring-purple-500 focus:border-transparent rounded-lg transition-all"
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
                <div className="form-control">
                  <label className="label text-sm font-semibold text-gray-700 mb-1">Medium / Tools</label>
                  <input
                    type="text"
                    name="medium"
                    defaultValue={artwork.medium_tools}
                    className="input input-bordered w-full focus:ring-2 focus:ring-purple-500 focus:border-transparent rounded-lg transition-all"
                    required
                  />
                </div>
              </div>

              {/* Description */}
              <div className="form-control">
                <label className="label text-sm font-semibold text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  defaultValue={artwork.description}
                  className="textarea textarea-bordered w-full h-32 focus:ring-2 focus:ring-purple-500 focus:border-transparent rounded-lg transition-all resize-none"
                  required
                />
              </div>

              {/* Price & Visibility */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label text-sm font-semibold text-gray-700 mb-1">Price (Optional)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      name="price"
                      defaultValue={artwork.price}
                      className="input input-bordered w-full pl-8 focus:ring-2 focus:ring-purple-500 focus:border-transparent rounded-lg transition-all"
                      min="0"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label text-sm font-semibold text-gray-700 mb-1">Visibility</label>
                  <select
                    name="visibility"
                    defaultValue={artwork.visibility}
                    className="select select-bordered w-full focus:ring-2 focus:ring-purple-500 focus:border-transparent rounded-lg transition-all"
                  >
                    <option>Public</option>
                    <option>Private</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="btn w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 border-none"
                >
                  Update Artwork
                </button>
              </div>

            </form>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default UpdateArtwork;