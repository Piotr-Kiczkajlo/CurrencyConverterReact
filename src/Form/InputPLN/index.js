import "./index.css";

const InputPLN = ({ amout, setAmout }) => (
  <input
    value={amout}
    className="form__inputValue"
    type="number"
    min=".01"
    step=".01"
    required
    autoFocus
    onChange={({ target }) => setAmout(target.value)}
  />
);
export default InputPLN;
