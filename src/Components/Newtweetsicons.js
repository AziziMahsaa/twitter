function Newtweetsicons(props) {
  return (
    <div className=" flex ml-20  h-9	mt-5 ">
      <div className=" flex space-x-4  h-5 ">
        <img className="" src="/images/mainbaricons/pic.png" alt="pic"></img>
        <img src="/images/mainbaricons/gif.png" alt="gif"></img>
        <img className=" " src="/images/mainbaricons/audit.png" alt="aud"></img>
        <img src="/images/mainbaricons/face.png" alt="face"></img>
        <img src="/images/mainbaricons/textleft.png" alt="text"></img>

        <img src="/images/mainbaricons/location.png" alt="loc"></img>
      </div>
      <button
        onClick={function () {
          props.newtweets();
        }}
        disabled={props.tweet === ""}
        className=" h-9  w-[180px] rounded-full ml-[280px] bg-blue disabled:bg-blue1 disabled:opacity-60	text-white font-semibold tracking-normal 
          "
      >
        Tweet
      </button>
    </div>
  );
}

export default Newtweetsicons;
