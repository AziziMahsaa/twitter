function Acts(props) {
  return (
    <div className="flex ml-14 -mb-5	">
      <a className=" space-x-2" href="...">
        <img
          className="h-4 inline"
          src="/images/tweetsicons/filledheart.png"
          alt="filled"
        ></img>
        <span className="text-[12px] font-semibold tracking-normal  text-colors-slate-400 text-opacity-60	">
          {props.names}
        </span>
      </a>
    </div>
  );
}
export default Acts;
