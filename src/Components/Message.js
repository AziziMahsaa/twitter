function Message() {
  return (
    <div className="mb-0  box-border border-1 backdrop-blur-md p-4 w-[350px]  bg-colors-black flex rounded-2xl shadow-sm -mt-5 shadow-white fixed">
      <p className="text-[20px] font-bold tracking-normal hover:tracking-widest hover:text-colors-red-700">
        Messages
      </p>

      <img
        className="w-6 ml-auto h-5 mr-3"
        src="/images/newmessage.png"
        alt="img"
      ></img>
      <img className="w-6 h-5 " src="/images/uparrow.png" alt="img"></img>
    </div>
  );
}
export default Message;
