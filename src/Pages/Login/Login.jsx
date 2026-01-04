import React, { useContext, useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Firebase/context/AuthContext';
import { toast } from 'react-toastify';
import { Fade } from "react-awesome-reveal";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        toast.success("Login successful!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        toast.error("Invalid email or password");
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
      <Fade direction="up" triggerOnce className='w-full max-w-md'>
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          
          <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-2">
                  Welcome Back
                </h1>
                <p className="text-gray-500 font-sans">Sign in to your account</p>
              </div>

              <form onSubmit={handleSignin} className="space-y-5 font-sans">
                
                {/* Email */}
                <div className="form-control">
                  <label className="label text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    className="input input-bordered w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent rounded-lg transition-all"
                    placeholder="Enter your email"
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
                      placeholder="Enter your password"
                      required
                    />
                    <span
                      className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer text-gray-400 hover:text-purple-600 transition-colors"
                      onClick={handleShow}
                    >
                      {show ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                    </span>
                  </div>
                  <div className="text-right mt-1">
                     <a href="#" className="text-xs text-purple-600 hover:text-purple-700 hover:underline">Forgot password?</a>
                  </div>
                </div>

                {/* Submit */}
                <button className="btn-primary w-full py-3 rounded-lg font-bold mt-2">
                  Sign In
                </button>

              <div className="divider text-gray-400 text-sm">OR</div>

              {/* Google */}
              <button 
                type="button"
                onClick={handleGoogleSignIn} 
                className="btn w-full bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 font-medium rounded-lg flex items-center justify-center gap-2"
              >
                <FcGoogle size={22} />
                Continue with Google
              </button>
            </form>

            <p className="text-center mt-6 text-gray-600 text-sm">
              Don't have an account?{" "}
              <Link className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-80 transition-opacity" to="/auth/signup">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Login;