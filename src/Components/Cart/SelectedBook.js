import React from "react";

const SelectedBook = () => {
  return (
    <div className="p-2 shadow flex items-center">
      <img
        className="mr-2 w-10 object-cover"
        src="chrome://branding/content/about-logo.png"
        alt=""
      />
      <h1 className="text-md">Books Name</h1>
    </div>
  );
};

export default SelectedBook;
