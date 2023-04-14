function SideBar(props) {
  return (
    <div>
      <div className="h-24  ">
        <img
          className="  w-5 h-5 ml-auto  text-gray1 opacity-40 "
          src="/images/dot.png"
          alt="dot"
        ></img>
        <p className="text-[12px] text-gray1 opacity-40">{props.trendy}</p>
        <h3>{props.name}</h3>
        <span className="text-[12px] text-gray1 opacity-40">
          {props.numoftweets}
        </span>
      </div>
    </div>
  );
}
export default SideBar;
