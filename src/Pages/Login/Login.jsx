import React, { use, useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Firebase/context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
  
        const navigate = useNavigate();
  const location = useLocation();



  const handleSignin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("login successful!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

    const handleGoogleSignIn = () => {
  signInWithGoogle()
  .then(result => {
    console.log(result)
     toast.success("Login Successful!");
          navigate('/')
  })
  .then(error => {
    console.log(error.code )
  })
    } 
   const handleShow = () => {
    
    setShow(!show);
  };
  return (
     <div>
          <div className="hero bg-base-200 ">
            <div className="hero-content flex-col ">
            
              <div className="card bg-base-100 w-full p-5 shadow-2xl">
                  <div className="text-center ">
                <h1 className="text-2xl font-bold">Login to your account</h1>
              </div>
                <form onSubmit={handleSignin} className="card-body w-[400px]">
                  <fieldset className="fieldset">
                    {/* email field  */}
    
                    <label className="label">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      className="input"
                      placeholder="Email"
                    />
    
                    {/* Password field  */}
    
                    <label className="label">Password</label>
                    <div className="relative">
                      <input
                        type={show ? "text" : "password"}
                        name="password"
                        className="input"
                        placeholder="Password"
                        required
                      />
                      <span className="absolute top-3 right-12" onClick={handleShow}>
                        {show ? (
                          <FiEyeOff size={18}></FiEyeOff>
                        ) : (
                          <FiEye size={18}></FiEye>
                        )}
                      </span>
                    </div>
                    <div>
                      <span  className="link link-hover">
                        Forgot password?
                      </span>
                    </div>
                    <button className="btn btn-neutral mt-4">Login</button>
    
                  <p className='text-center'> Or</p>
                   
                {/* Google */}
          <button onClick={handleGoogleSignIn}  className="btn bg-white text-black border-[#e5e5e5]">
         <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
         Login with Google
         </button>
                  </fieldset>
                  <p className="text-center">
                    Don't have an account? <Link className="font-semibold text-primary hover:underline" to="/auth/signup">Signup</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Login;