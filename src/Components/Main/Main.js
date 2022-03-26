import React from "react";
import SingleBook from "../SingleBook/SingleBook";

const Main = () => {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-4">
        <SingleBook></SingleBook>
      </div>
      <div className="shadow col-span-2 bg-yellow-100">hhh</div>
    </div>
  );
};

export default Main;
