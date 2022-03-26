import React from "react";
import SelectedBook from "./SelectedBook";
const Cart = ({ cart }) => {
  return (
    <div>
      {cart.map((data) => (
        <SelectedBook key={data.id} data={data}></SelectedBook>
      ))}
    </div>
  );
};

export default Cart;
