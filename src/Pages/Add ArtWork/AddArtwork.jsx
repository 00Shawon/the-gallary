import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Firebase/context/AuthContext";
import { Fade } from "react-awesome-reveal";

const AddArtwork = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleSubmit = async (e) => {
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
      price: Number(e.target.price.value),
      likes: 0,
      createdAt: new Date(),
    };

    fetch(`${import.meta.env.VITE_API_URL}/publicArtwork`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Artwork Added successfully");
        console.log("after post", data);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to add artwork");
      });
  };

  return (
   <div className="min-h-screen bg-gray-100 pt-24 pb-16 px-4 flex items-center justify-center">
  <ToastContainer position="top-center" autoClose={2000} hideProgressBar />

  <Fade direction="up" triggerOnce className="w-full max-w-3xl">
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
      <div className="p-8 sm:p-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Add New Masterpiece
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Share your creativity with clarity and elegance
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Artist Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Artist Name
              </label>
              <input
                type="text"
                name="name"
                value={user?.displayName || ""}
                readOnly
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Artist Email
              </label>
              <input
                type="email"
                name="email"
                value={user?.email || ""}
                readOnly
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Title & Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Artwork Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Sunset Dreams"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                type="url"
                name="image"
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                required
              />
            </div>
          </div>

          {/* Category & Medium */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                name="category"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Medium / Tools
              </label>
              <input
                type="text"
                name="medium"
                placeholder="Oil on Canvas, Photoshop"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              placeholder="Tell the story behind this artwork..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none resize-none"
              required
            />
          </div>

          {/* Price & Visibility */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (Optional)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                <input
                  type="number"
                  name="price"
                  min="0"
                  placeholder="0.00"
                  className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Visibility
              </label>
              <select
                name="visibility"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
              >
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Publish Artwork
          </button>

        </form>
      </div>
    </div>
  </Fade>
</div>

  );
};

export default AddArtwork;

