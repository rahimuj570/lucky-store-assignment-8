import React from "react";

const SelectedBook = ({ data }) => {
  return (
    <div className=" p-2 shadow flex items-center">
      <img className="mr-2 w-10 object-cover" src={data.picture} alt="" />
      <h1 style={{ background: "unset", border: "0" }} className="text-md">
        {data.name}
      </h1>
    </div>
  );
};

export default SelectedBook;
