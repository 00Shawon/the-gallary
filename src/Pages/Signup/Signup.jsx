import React, { use, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../../Firebase/context/AuthContext";
import { toast } from "react-toastify";


const Signup = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const {createUser,signInWithGoogle,setUser,updateUser} = use(AuthContext)

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    console.log(email, name, photo, password);
    
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
        toast.success("Login Successful!");
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
    <div className="">
      <div className="card bg-base-100 w-[400px] mx-auto shadow-2xl">
        <h1 className="text-2xl p-5 font-bold text-center pb-3">
          Signup to create account
        </h1>
        <form onSubmit={handleSignUp} className="card-body">
          <fieldset className="fieldset">
            {/* Name field  */}

            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder=" Your name"
              required
            />

            {/* Photo field  */}

            <label className="label">Photo Url</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo url"
              required
            />

            {/* email field  */}

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
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
              <span
                className="absolute top-3 right-12 cursor-pointer"
                onClick={handleShow}
              >
                {show ? (
                  <FiEyeOff size={18}></FiEyeOff>
                ) : (
                  <FiEye size={18}></FiEye>
                )}
              </span>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Signup
            </button>
            <p className="text-center"> Or</p>

            {/* Google */}
            <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </fieldset>
          {error && <p className="text-red-500">{error}</p>}
          <p className="text-center">
            Already have an account?{" "}
            <Link
              className="font-semibold text-primary hover:underline"
              to="/auth/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
