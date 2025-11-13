// Loading.jsx
import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <ClipLoader color="#3b82f6" size={80} speedMultiplier={1.2} />
    </div>
  );
};

export default Loading;
