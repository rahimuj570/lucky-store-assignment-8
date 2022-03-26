import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

const SingleBook = ({ data, addToCart }) => {
  const { picture, name, price, id } = data;
  return (
    <div className=" shadow relative">
      <div className="mw-80 h-60 sm:h-80">
        <img className="w-full h-full object-cover" src={picture} alt={name} />
      </div>
      <div className="bg-slate-100">
        <div className="p-1 pb-5">
          <p className="font-semibold">Name: {name}</p>
          <p className="font-semibold">Price: {price}</p>
        </div>
        <button></button>
        <button
          onClick={() => addToCart(data)}
          className="flex justify-center items-center absolute bottom-0 font-bold w-full btn bg-yellow-300 p-1"
        >
          Add To Cart <BsFillCartPlusFill className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
