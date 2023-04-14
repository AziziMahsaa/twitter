import { useState } from "react";
import Inputtest from "./Inputtest";
function Rendertweets(props) {
  if (props.tweet.length === 0) {
    return <p>No tweet </p>;
  }
  return props.tweet.map(function (test) {
    return <div>{test}</div>;
  });
}
function Usertweet() {
  const [ghabl, setGhabl] = useState([]);
  const [jadid, setJadid] = useState();
  return (
    <div className="mt-20">
      <Rendertweets tweet={ghabl} />
      <Inputtest value={jadid} setvalue={setJadid} />
      <button
        onClick={function () {
          setGhabl([jadid, ...ghabl]);
          setJadid("");
        }}
        disabled={jadid === ""}
      >
        Todo
      </button>
    </div>
  );
}
export default Usertweet;
