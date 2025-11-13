import React from 'react';
import error from '../../assets/error.png'
const Error = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
      <img src={error} alt="" />
     <h1 className='text-red-500  font-semibold text-3xl'>Page is not found </h1>
    </div>
  );
};

export default Error;