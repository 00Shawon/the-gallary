import React, { useContext, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Firebase/context/AuthContext";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const {createUser, signInWithGoogle, setUser, updateUser} = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    
    // reset error
    setError('');

    // password validation
    const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(!regExp.test(password)){
      setError('Password must be at least 6 characters long, and include at least one uppercase letter and one lowercase letter');
      return;
    } 

    createUser(email, password)
      .then((res) => {
        const user = res.user;
         updateUser({displayName: name, photoURL: photo})
       .then(() =>{
       setUser({...user, displayName: name, photoURL: photo})
    }).catch(()=>{
      setUser(user);
    })
        toast.success("Account created successful!");
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.code);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      toast.success("Login Successful!");
      navigate('/')
    })
    .catch(error => {
      console.log(error.code)
    })
  } 

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50 flex items-center justify-center px-4">
      <Fade direction="up" triggerOnce className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          
          <div className="p-8">
            <div className="text-center mb-8">
               <h1 className="text-3xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-2">
                Join ArtistHub
              </h1>
              <p className="text-gray-500 font-sans">Create your free account today</p>
            </div>

            <form onSubmit={handleSignUp} className="space-y-4 font-sans">
              
              {/* Name */}
              <div className="form-control">
                <label className="label text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent rounded-lg transition-all"
                  placeholder="e.g. John Doe"
                  required
                />
              </div>

               {/* Photo */}
               <div className="form-control">
                <label className="label text-sm font-semibold text-gray-700 mb-1">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  className="input input-bordered w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent rounded-lg transition-all"
                  placeholder="https://example.com/photo.jpg"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent rounded-lg transition-all"
                  placeholder="name@example.com"
                  required
                />
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label text-sm font-semibold text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    className="input input-bordered w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent rounded-lg transition-all"
                    placeholder="Create a strong password"
                    required
                  />
                   <span
                    className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer text-gray-400 hover:text-purple-600 transition-colors"
                    onClick={handleShow}
                  >
                    {show ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                  </span>
                </div>
              </div>

               {error && <p className="text-red-500 text-sm">{error}</p>}

              <button type="submit" className="btn-primary w-full py-3 rounded-lg font-bold mt-4">
                Sign Up
              </button>

              <div className="divider text-gray-400 text-sm">OR</div>

              {/* Google */}
              <button 
                type="button"
                onClick={handleGoogleSignIn} 
                className="btn w-full bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 font-medium rounded-lg flex items-center justify-center gap-2"
              >
               <FcGoogle size={22} />
                Sign up with Google
              </button>
            
            </form>
             <p className="text-center mt-6 text-gray-600 text-sm">
             Already have an account?{" "}
            <Link
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-80 transition-opacity"
              to="/auth/login"
            >
              Log in
            </Link>
          </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Signup;
