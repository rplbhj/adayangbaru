import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center h-[50vh] ">
      <div className="pt-[80px]">
        <h1 className="text-7xl font-bold">404</h1>
        <h1 className="text-1xl text-slate-600">Page Not Found</h1>
        <Link to="/">
          <button className="py-2 px-4 rounded-full bg-gray-800 mt-3 text-white text-base ">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
