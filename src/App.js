import React, { useState } from "react";
import "./App.css";
import RenderMenuBar from "./Components/MenuBar";
import ProfileId from "./Components/ProfileId";
import MynewTweet from "./Components/MynewTweet";

import tweetJson from "./tweets.json";
import Tweets from "./Components/Tweets";
import Trends from "./Components/Trends";
import trend from "./trend.json";
import Message from "./Components/Message";
import Header from "./Components/Header";
import Searchtweets from "./Components/Searchtweet";
import Modal from "./Components/Modal";
import { Link } from "react-router-dom";

function App() {
  const [tweets, setTweets] = useState(tweetJson);
  return (
    <div className="flex flex-row bg-colors-black text-colors-warmGray-200 h-fit ">
      <section className="menubar border-r	border-r-gray-dark fixed z-50 bg-colors-black w-3/12  ">
        <div className=" text-left ml-11 mr-11 flex flex-col  gap-3  ">
          <div className=" h-12 w-12 bg-colors-black hover:bg-colors-slate-900  rounded-full  p-2 m-2">
            <Link to="/mahzaa">
              <img
                className="w-7 "
                src="/images/twitterlogo.png"
                alt="logo"
              ></img>
            </Link>
          </div>
          <RenderMenuBar />
          <Modal />

          <ProfileId />
        </div>
      </section>
      <section className=" w-3/12 " />

      <section className="relative  w-5/12	 border-r	border-r-gray-dark ">
        <Header />
        <MynewTweet
          onNewTweet={(newtweet) => {
            setTweets([
              {
                imgsrc: "/images/mahsa.jpg",
                username: "ماهزا",
                userid: "@alan 31 salame",
                time: "now",
                tweets: newtweet,
                hashtag: "",
                showThread: false,
                like: "0",
                retweet: "0",
                comment: "0",
              },
              ...tweets,
            ]);
          }}
        />

        <Tweets tweets={tweets} />
      </section>
      <section className="relative  pl-8  w-4/12  ">
        <Searchtweets />
        <div className="bg-gray3 mt-20	flex flex-col	 w-80	  rounded-2xl p-3 ">
          <h2 className="text-5xl font-extrabold tracking-wide	">
            Trends for you
          </h2>

          <Trends trends={trend} />
        </div>

        <Message />
      </section>
    </div>
  );
}
export default App;
