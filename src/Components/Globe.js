function Globe() {
  return (
    <div className="h-10 w-full  bg-colors-black hover:bg-colors-slate-900 hover:duration-400  flex items-center border-b  border-b-gray-dark ">
      <a className="inline-flex " href="#.">
        <img className="h-4 w-4 mr-2 ml-12" src="/g.png" alt="glob"></img>
        <p className="text-blue text-sm font-bold ">Everyone can replay</p>
      </a>
    </div>
  );
}
export default Globe;
