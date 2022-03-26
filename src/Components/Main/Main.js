import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import SingleBook from "../SingleBook/SingleBook";

const Main = () => {
  const [book, setBook] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("FakeData/fakeApi.json")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);
  //   console.log(book);
  const addToCart = (data) => {
    let newCart = [...cart, data];
    setCart(newCart);
  };
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-3 sm:col-span-4">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 bg-scale-100 gap-5 m-5">
          {book.map((data) => (
            <SingleBook
              key={data.id}
              data={data}
              addToCart={addToCart}
            ></SingleBook>
          ))}
        </div>
      </div>
      <div className=" shadow col-span-3 sm:col-span-2 bg-yellow-100">
        <h1 className="bg-yellow-200 text-center p-3 p-1 font-semibold text-xl">
          Selected Books
        </h1>
        <Cart cart={cart} setCart={setCart}></Cart>
      </div>
    </div>
  );
};

export default Main;
