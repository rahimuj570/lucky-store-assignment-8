import React from "react";
import { BsQuestionOctagon } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className="mt-10 pb-20 bg-pink-100">
        <h1 className="py-1 bg-pink-200 font-bold text-center text-2xl">
          {" "}
          Common F.A.Q.
        </h1>
        <div className="px-1">
          <div className=" shadow p-5">
            <h3 className="font-bold flex items-center text-xl">
              <BsQuestionOctagon className="font-bold mr-2" /> How React Work?
            </h3>
            <p className="pl-5">
              React is one of the most popular JavaScript Library which is used
              to Develop The Frontend of a website. <br />
              Generally it work by virtual DOM. <br /> Virtual DOM is not a
              programing language. It's only a programing concept. <br />
              Virtual DOM can store the UI of the website. <br />
              When there will be some change in the UI, the Virtual DOM is not
              remake or re-render the whole DOM. <br /> It compares the change
              with real DOM, then only update that indicated change.
            </p>
          </div>
          <div className="mt-5 shadow p-5">
            <h3 className="font-bold flex items-center text-xl">
              <BsQuestionOctagon className="font-bold mr-2" /> How UseState
              Work?
            </h3>
            <p className="pl-5">
              UseState is one of the most usable hook of React JS. <br />
              Generally, UseSate is a built-in function of React. <br />
              The Hook is generally used to store the data. <br />
              This hook return only two things. <br />
              First one is a variable and second one is a function. <br />
              Using the function, we can change the state/data which is stored
              by usestate. <br />
              And the variable return the data. And the data/state is only
              readable. <br />
              You can't directly change the variable's data.
            </p>
          </div>
        </div>
      </div>
      <p className="bg-slate-200 py-2 font-semibold text-sm text-center">
        Lucky Store Book Festive &copy;rahimuj570
      </p>
    </>
  );
};

export default Footer;
