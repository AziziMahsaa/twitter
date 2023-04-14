function Searchtweets() {
  return (
    <div className="fixed w-[700px] bg-colors-black h-14 z-20 ">
      <div className="mt-2  ">
        <label className=" h-16  w-full  mt-2 ">
          <span class="absolute inset-y-0  flex items-center ">
            <img
              className="h-5 ml-4 "
              src="/images/search.png"
              alt="search"
            ></img>
          </span>
          <input
            class=" placeholder:text-slate-400 block  bg-gray3  w-80	 h-11 rounded-full py-2 pl-14    sm:text-sm tracking-wide	"
            placeholder="Search Twitter "
            type="text"
            name="search"
          />
        </label>
      </div>
    </div>
  );
}
export default Searchtweets;
