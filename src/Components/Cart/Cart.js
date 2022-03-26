import React, { useState } from "react";
import SelectedBook from "./SelectedBook";
import { GiCardRandom } from "react-icons/gi";
import { MdRepeatOn } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = ({ cart, setCart }) => {
  const [chooseCss, setChooseCss] = useState(0);
  let chooseOneCss = "{ background: #FED7AA; border: 2px solid red; }";
  const randomChoose = () => {
    let random = Math.floor(Math.random() * cart.length) + 1;
    setChooseCss(random);
    toast("🦄 Lets Enjoy The BooK 😎");
  };
  let DisBlockNone;
  if (cart.length) {
    DisBlockNone = { display: "flex" };
  } else {
    DisBlockNone = { display: "none" };
  }

  return (
    <div>
      <style>
        .chooseOne :nth-child({chooseCss}){chooseOneCss}
      </style>
      <ToastContainer />
      <div className="chooseOne">
        {cart.map((data, index) => (
          <SelectedBook key={index} data={data}></SelectedBook>
        ))}
      </div>
      <button
        onClick={randomChoose}
        style={DisBlockNone}
        className="transition hover:text-white text-xl hover:bg-green-400 flex items-center justify-center w-full font-semibold my-2 btn bg-green-300 py-1 px-2"
      >
        Choose One <GiCardRandom className="ml-1 text-2xl " />
      </button>
      <button
        onClick={() => setCart([])}
        style={DisBlockNone}
        className="transition hover:text-white text-xl hover:bg-red-400 flex items-center justify-center w-full font-semibold my-2 btn bg-red-300 py-1 px-2"
      >
        Choose Again <MdRepeatOn className="ml-1 text-2xl " />
      </button>
    </div>
  );
};

export default Cart;
