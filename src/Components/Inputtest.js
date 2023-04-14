function Inputtest(props) {
  return (
    <div>
      <input
        class="h-20  w-full active:bg-gray1 bg-colors-black block border-transparent focus:border-transparent focus:ring-0"
        placeholder="add number"
        type="text"
        value={props.value}
        name="input"
        onChange={(e) => props.setvalue(e.target.value)}
      ></input>
    </div>
  );
}
export default Inputtest;
