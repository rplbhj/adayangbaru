import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      ERROR Silahkan kembali ke{" "}
      <Link to="/">
        <button className=" bg-orange-600 text-white">Awal</button>
      </Link>
    </div>
  );
};

export default Error;
