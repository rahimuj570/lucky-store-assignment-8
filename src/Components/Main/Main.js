import React from "react";
import SelectedBook from "../Cart/SelectedBook";
import SingleBook from "../SingleBook/SingleBook";

const Main = () => {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-4">
        <SingleBook></SingleBook>
      </div>
      <div className="shadow col-span-2 bg-yellow-100">
        <h1 className="bg-yellow-200 text-center p-3 p-1 font-semibold text-xl">
          Selected Books
        </h1>
        <SelectedBook></SelectedBook>
      </div>
    </div>
  );
};

export default Main;
