import React, { useEffect, useState } from "react";
import SelectedBook from "../Cart/SelectedBook";
import SingleBook from "../SingleBook/SingleBook";

const Main = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    fetch("FakeData/fakeApi.json")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 bg-scale-100 gap-5 m-5">
          {book.map((data) => (
            <SingleBook key={data.id} data={data}></SingleBook>
          ))}
        </div>
      </div>
      <div className=" shadow col-span-2 bg-yellow-100">
        <h1 className="bg-yellow-200 text-center p-3 p-1 font-semibold text-xl">
          Selected Books
        </h1>
        <SelectedBook></SelectedBook>
      </div>
    </div>
  );
};

export default Main;
