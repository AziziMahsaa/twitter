import { Fragment } from "react";
import Tweetsicon from "./Components/Tweetsicon";

function TestTweet(props) {
  return (
    <Fragment>
      <div className="m-auto mt-20">
        <a href="..">
          <img
            className="inline h-12 w-12 rounded-full"
            src="./images/mahsa.jpg"
            alt="avtar"
          ></img>
        </a>
        <a href="#." className="mx-2">
          <span className=" font-bold text-[15px] text-white">MeoW</span>
          <span className="text-[15px] text-opacity-60 text-colors-slate-400 ">
            Mah
          </span>
        </a>

        <span className="text-[14px]  text-colors-slate-400 text-opacity-60">
          12:22
        </span>
        <img
          className="  w-5 h-5  ml-auto  "
          src="/images/dot.png"
          alt="dot"
        ></img>
      </div>

      <div className=" text-right  tracking-normal	 ">
        <p className=" ">
          Children must be children. Should be playing and enjoying the life to
          the most, and certainly must not know about politics! The Islamic
          Republic regime killed over 68 children only over the past 2 months.
        </p>
        <span className="text-blue">#mahsa-amini</span>
      </div>
      <Tweetsicon />
    </Fragment>
  );
}
export default TestTweet;
