import "./index.css";

const ValueOption = () => (
  <select className="form__valueOption">
    <option value="$" defaultValue>
      USD
    </option>
    <option value="£">GBP</option>
    <option value="€">EUR</option>
  </select>
);

export default ValueOption;
