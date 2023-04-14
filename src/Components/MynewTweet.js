import React, { useState } from "react";
import Newtweetsicons from "./Newtweetsicons";
import Globe from "./Globe";
import TestCompnent from "./TestCompnent";

function MynewTweet(props) {
  const [tweet, setTweet] = useState("");
  const [globe, setGlobe] = useState(false);
  const [drop, setDrop] = useState(false);

  return (
    <div
      className={
        "h-46 p-4 border-b	border-b-gray-dark	pt-[47px]  " + props.borderStyles
      }
    >
      <div className="mt-4 mb-2 flex items-center gap-x-3 ">
        <img
          className="inline h-12 w-12 rounded-full shrink-0 "
          src="/images/mahsa.jpg"
          alt="profile"
        ></img>
        <div className="flex-1">
          {drop && <TestCompnent />}
          <label>
            <input
              onBlur={function () {
                setGlobe(false);
              }}
              onClick={function () {
                setGlobe(true);
                setDrop(true);
              }}
              class="w-full   bg-colors-black block focus:outline-none	"
              placeholder="What's happening?"
              type="text"
              value={tweet}
              name="tweet"
              onChange={(e) => setTweet(e.target.value)}
              autoComplete="off"
            />
          </label>
        </div>
      </div>
      {globe && <Globe />}

      <Newtweetsicons
        newtweets={function () {
          props.onNewTweet(tweet);
          setTweet("");
        }}
        tweet={tweet}
      />
    </div>
  );
}
export default MynewTweet;
