function Tweetsicon(props) {
  return (
    <div className=" space-x-20 	flex  ml-20 mt-1  ">
      <div>
        <img
          className="inline mr-2 h-5"
          src="/images/tweetsicons/speech.png"
          alt="h"
        ></img>
        <span className="text-[12px]   text-gray1 opacity-40 ">
          {props.comment}
        </span>
      </div>
      <div>
        <img
          className="inline mr-2 h-5"
          src="/images/tweetsicons/retweet.png"
          alt="h"
        ></img>
        <span className="text-[12px]   text-gray1 opacity-40 ">
          {props.retweet}
        </span>
      </div>
      <div>
        <img
          className="mr-2 inline h-5"
          src="/images/tweetsicons/favorite.png"
          alt="h"
        ></img>
        <span className="text-[12px]  text-gray1 opacity-40 ">
          {props.like}
        </span>
      </div>

      <img
        className="inline h-4"
        src="/images/tweetsicons/share.png"
        alt="h"
      ></img>
    </div>
  );
}

export default Tweetsicon;
