function Header() {
  return (
    <div>
      <div className="p-3 bg-colors-black opacity-80 flex justify-between  w-[550px] fixed h-14   ">
        <div className="">
          <p className="text-lg text-white font-semibold inline ">Home</p>
        </div>
        <div className="">
          <img
            className=" h-5  inline   "
            src="/images/mainbaricons/star.png"
            alt="star"
          ></img>
        </div>
      </div>
    </div>
  );
}
export default Header;
