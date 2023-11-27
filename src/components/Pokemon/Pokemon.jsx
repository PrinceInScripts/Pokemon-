import React from "react";
import { Link } from "react-router-dom";

function Pokemon({ name, id, url, type }) {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-gray-500 py-10 px-16 rounded-2xl bg-orange-200">
      <Link to={`/pokemon/${id}`}>
        <div className="flex flex-col gap-4 items-center justify-center ">
          <h1 className="text-3xl font-serif font-semibold">
            {name.toUpperCase()}
          </h1>
          <img src={url} alt={name} className="w-80" />
        </div>
      </Link>
    </div>
  );
}

export default Pokemon;
