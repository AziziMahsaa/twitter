function ShowThread(props) {
  return (
    <div
      className=" mt-1 space-x-3      bg-colors-black hover:bg-colors-slate-900 hover:duration-700 h-10 w-full
    -mb-4
}"
    >
      <div className="p-1 ">
        <img
          className="inline h-8 w-8 rounded-full "
          src="/images/cat2.webp"
          alt="."
        ></img>
        <span className="text-blue text-sm ml-2">Show this thread</span>
      </div>
    </div>
  );
}
export default ShowThread;
