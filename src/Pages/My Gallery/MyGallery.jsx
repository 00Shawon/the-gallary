import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Firebase/context/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
import { FaTrash, FaEdit, FaTag } from "react-icons/fa";

const MyGallery = () => {
  const { user } = useContext(AuthContext);
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`${import.meta.env.VITE_API_URL}/myArtwork?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setArtworks(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching artworks:", err);
          setLoading(false);
        });
    }
  }, [user]);

  if (!user) {
    return (
       <div className="flex justify-center items-center min-h-screen pt-24">
           <span className="loading loading-spinner loading-lg text-purple-600"></span>
       </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen pt-24">
        <span className="loading loading-spinner loading-lg text-purple-600"></span>
      </div>
    );
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/myArtwork/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(res => res.json())
          .then(data => {
            setArtworks((prev) => prev.filter((art) => art._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Your artwork has been deleted.",
              icon: "success"
            });
          })
          .catch(err => {
            console.log(err)
          });
      }
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-[1400px] w-11/12 mx-auto">
        
        <Fade direction="down" triggerOnce>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4">
                My Gallery
              </h2>
              <p className="text-gray-500">Manage your personal collection and contributions.</p>
            </div>
        </Fade>

        {artworks.length === 0 ? (
            <Fade triggerOnce>
              <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-300 mb-2">You haven't added any art yet</h3>
                <p className="text-gray-400">Share your creativity with the world!</p>
                <Link to="/addArtwork" className="btn btn-primary mt-6">Add New Artwork</Link>
              </div>
            </Fade>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <Fade cascade damping={0.1} triggerOnce>
                {artworks.map((art) => {
                  const { _id, image, title, category, price, artist_photo, artist_name } = art;
                  console.log("Artwork Data:", art); // Debugging
                  return (
                    <div key={_id} className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden h-full border border-gray-100 flex flex-col group">
                      {/* Image Container */}
                      <div className="relative h-64 flex-shrink-0 overflow-hidden">
                        <img 
                          src={image} 
                          alt={title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-sm flex items-center gap-1">
                          <FaTag className="text-purple-500" /> {category}
                        </div>
                      </div>

                      <div className="card-body p-6 flex flex-col flex-grow">
                        <h3 className="card-title text-xl font-bold text-gray-800 mb-1 line-clamp-1 group-hover:text-purple-600 transition-colors">
                           {title}
                        </h3>
                        
                        <div className="flex items-center gap-2 mt-2 mb-4">
                           <img src={artist_photo} alt={artist_name} className="w-8 h-8 rounded-full border border-gray-200 object-cover" />
                           <span className="text-sm text-gray-500 font-medium">{artist_name}</span>
                        </div>
                        
                        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                           <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
                             ${price}
                           </span>
                           
                           <div className="flex gap-2">
                              <Link 
                                to={`/updateArtwork/${_id}`} 
                                className="btn btn-sm btn-circle btn-ghost text-blue-500 hover:bg-blue-50 tooltip tooltip-left"
                                data-tip="Edit"
                              >
                                <FaEdit />
                              </Link>

                              <button 
                                onClick={() => handleDelete(_id)} 
                                className="btn btn-sm btn-circle btn-ghost text-red-500 hover:bg-red-50 tooltip tooltip-left"
                                data-tip="Delete"
                              >
                                <FaTrash />
                              </button>
                           </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Fade>
            </div>
        )}
      </div>
    </div>
  );
};

export default MyGallery;
