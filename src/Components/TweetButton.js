import { useState } from "react";

function TweetButton() {
  let [feli, setFeli] = useState("");
  let [koli, setKoli] = useState(0);
  return (
    <div>
      {koli}
      <input
        class="h-20  w-full active:bg-gray1 bg-colors-black block  	"
        placeholder="add number"
        type="text"
        value={feli}
        name="number"
        onChange={(e) => setFeli(e.target.value)}
      />
      <button
        onClick={function () {
          setKoli(koli + +feli);
          setFeli("");
        }}
        disabled={feli === ""}
        className="bg-blue h-12 w-[200px] rounded-full  	text-white font-semibold    hover:duration-700"
      >
        Tweet
      </button>
    </div>
  );
}
export default TweetButton;
