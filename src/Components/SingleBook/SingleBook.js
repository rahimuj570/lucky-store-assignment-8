import React from "react";

const SingleBook = ({ data }) => {
  return (
    <div className=" shadow relative">
      <div className="mw-80 h-60 sm:h-80">
        <img className="w-full h-full object-cover" src={data.picture} alt="" />
      </div>
      <div className="bg-slate-100">
        <div className="p-1 pb-5">
          <p className="font-semibold">Name: {data.name}</p>
          <p className="font-semibold">Price: {data.price}</p>
        </div>
        <button></button>
        <button className="absolute bottom-0 font-bold w-full btn bg-yellow-300 p-1">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
