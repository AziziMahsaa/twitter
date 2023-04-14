import ShowThread from "./ShowThread";
import Tweetsicon from "./Tweetsicon";

function MainContent(props) {
  return (
    <div className="border-b	border-b-gray-dark p-4 w-full ">
      <div className="w-full flex ">
        <a href="..">
          <img
            className="inline h-12 w-12 rounded-full"
            src={props.imgsrc}
            alt="avtar"
          ></img>
        </a>
        <a href="#." className="mx-2">
          <span className=" font-bold text-[15px] text-white">
            {props.username}
          </span>
          <span className="text-[15px] text-opacity-60 text-colors-slate-400 ">
            {props.userid}
          </span>
        </a>

        <span className="text-[14px]  text-colors-slate-400 text-opacity-60">
          {props.time}
        </span>
        <img
          className="  w-5 h-5  ml-auto  "
          src="/images/dot.png"
          alt="dot"
        ></img>
      </div>

      <div className=" text-right  tracking-normal	 ">
        <p className=" ">{props.tweets}</p>
        <span className="text-blue">{props.hashtag}</span>
      </div>
      <Tweetsicon
        like={props.like}
        retweet={props.retweet}
        comment={props.comment}
      />
      {props.showThread ? <ShowThread /> : null}
    </div>
  );
}

export default MainContent;
