import React, { useEffect, useState } from "react";

const Header = () => {
  const [productLength, setProductLength] = useState([]);
  useEffect(() => {
    fetch("FakeData/fakeApi.json")
      .then((res) => res.json())
      .then((data) => setProductLength(data));
  }, []);
  return (
    <div className="py-5 bg-yellow-200 text-center">
      <h1 className=" font-bold  text-4xl">Lucky Store</h1>
      <h3 className="text-2xl my-4">Total Book:{productLength.length}</h3>
    </div>
  );
};

export default Header;
