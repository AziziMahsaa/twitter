import React, { useState } from "react";
import MynewTweet from "./MynewTweet";
function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="">
      <button
        className=" h-12 w-[220px] rounded-full  	text-white font-semibold bg-blue hover:bg-blue1  hover:duration-700 "
        onClick={toggleModal}
      >
        tweet
      </button>
      {modal && (
        <div
          onClick={toggleModal}
          className=" flex justify-center  fixed w-full h-full  top-0  z-50  bg-colors-black/60  	 "
        >
          <div className="    h-96 w-[500px] bg-colors-black rounded-xl mt-10 ">
            <img
              onClick={toggleModal}
              className="h-5 w-5 "
              src="./multi1.png"
              alt="multi"
            ></img>
            <MynewTweet borderStyles={" border-b-0	 "} />
          </div>
        </div>
      )}
    </div>
  );
}
export default Modal;
