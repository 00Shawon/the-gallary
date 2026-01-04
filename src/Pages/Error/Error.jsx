import React from 'react';
import errorImg from '../../assets/error.png'
import { useRouteError, Link } from 'react-router';

const Error = () => {
  const error = useRouteError();
  console.error(error);

  let title = "An error occurred";
  let message = "Something went wrong.";

  if (error?.status === 404) {
    title = "Page Not Found";
    message = "The page you are looking for does not exist.";
  } else if (error) {
     message = error.statusText || error.message;
  }


  return (
    <div className='min-h-screen pt-24 flex flex-col gap-5 justify-center items-center'>
      <img src={errorImg} alt="Error" />
     <h1 className='text-red-500 font-semibold text-3xl'>{title}</h1>
     <p className="text-gray-600 font-medium text-lg">{message}</p>
      <Link to="/" className="btn btn-primary mt-4">Go Home</Link>
    </div>
  );
};

export default Error;