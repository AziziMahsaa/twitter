function ProfileId() {
  return (
    <div>
      <div className="w-60 h-16 p-2 rounded-full  bg-colors-black hover:bg-colors-slate-900 flex flex-row gap-2 mt-10 ">
        <img
          className="h-12 w-12 rounded-full"
          src="/images/mahsa.jpg  "
          alt="profilephoto"
        ></img>
        <div className="flex flex-col  ">
          <span className="tracking-tight font-normal w-fit">ماهزا</span>

          <span className=" text-colors-slate-500 text-[14px] w-fit 	">
            @alan31salame
          </span>
        </div>
        <img
          className="w-5 h-5 m-auto mr-1 "
          src="/images/dot.png"
          alt="dot"
        ></img>
      </div>
    </div>
  );
}
export default ProfileId;
