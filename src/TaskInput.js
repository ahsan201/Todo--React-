import enterIcon from "./asset/icons8-enter-50.png";

export default function TaskInput({
  textInputValue,
  handleOnchangeInput,
  onSubmit,
}) {
  return (
    <form className="inputBox container" onSubmit={onSubmit}>
      <div className="checkbox">
        <input type="checkbox" />
      </div>
      <div className="textInput">
        <input
          type="text"
          placeholder="Create a new todo"
          value={textInputValue}
          onChange={handleOnchangeInput}
        />
      </div>
      <div className="submitBTN">
        <img src={enterIcon} onClick={onSubmit} alt="enter icon" />
      </div>
    </form>
  );
}
