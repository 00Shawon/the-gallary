import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Firebase/context/AuthContext';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyFabourite = () => {
    const { user } = useContext(AuthContext);
    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      if (user?.email) {
        fetch(`http://localhost:3000/myFavorites?email=${user.email}`)
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
      return <p className="p-6 text-center">Loading user info...</p>;
    }
  
    if (loading) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      );
    }
  
    if (artworks.length === 0) {
      return (
        <p className="text-center mt-10 text-gray-500">
          You have no artworks yet, {user.displayName}.
        </p>
      );
    }

    const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
     fetch(`http://localhost:3000/favorites/${id}`,{
         method:'DELETE',
         headers:{
           'Content-Type':'application/json',
         },
       
       })
       .then(res => res.json())
       .then(data => {
           setArtworks((prev) => prev.filter((art) => art._id !== id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
         console.log(data)
    
       })
       .catch(err => {
         console.log(err)
       })
    
      
      }
    });
      }
  return (
   <div className="p-6 max-w-6xl mx-auto h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">My Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artworks.map((art) => {
          const {
            _id,
            image,
            title,
            category,
            price,
            artist_photo,
            artist_name,
          } = art;

          return (
            <div key={_id} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden">
              <figure>
                <img src={image} alt={title} className="h-56 w-full object-cover" />
              </figure>
              <div className="card-body">
                           
                <div className="flex justify-between">
                   <div>
 <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-600 text-sm">{category}</p>
                <p className="text-gray-700 text-sm font-semibold">Price: ${price}</p>

                </div>
                <div className="flex items-end">
                 <button onClick={()=> handleDelete(_id)}  className="btn btn-outline mr-2 text-secondary  hover:bg-secondary hover:text-white">Delete</button>
                 <Link to={`/updateArtwork/${_id}`} className="btn btn-outline text-primary  hover:bg-primary hover:text-white">Edit</Link>
                </div>
                </div>
               
                    <div className="flex items-center mt-2">
                  <img
                    src={artist_photo}
                    alt={artist_name}
                    className="w-8 h-8 rounded-full object-cover mr-2"
                  />
                  <span className="text-gray-600 text-sm">{artist_name}</span>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyFabourite;
