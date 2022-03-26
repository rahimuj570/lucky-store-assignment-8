import React from "react";

const SingleBook = () => {
  return (
    <div className=" shadow">
      <img
        className="p-2 w-98 h-98 object-cover"
        src="chrome://branding/content/about-logo.png"
        alt=""
      />
      <div className="p-1 bg-slate-100">
        <p className="font-semibold">Name: Books</p>
        <p className="font-semibold">Price: 20</p>
      </div>
      <button className="font-bold w-full btn bg-yellow-300 p-1">
        Add To Cart
      </button>
    </div>
  );
};

export default SingleBook;
