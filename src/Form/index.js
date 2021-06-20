import { useState } from "react";
import "./style.css";
import InputPLN from "./InputPLN";
import currencies from "../currencies";
import Result from "./Result";

const Form = () => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amout, setAmout] = useState("");
  const [result, setResult] = useState("");
  const [manualRate, setManualRate] = useState();

  const calculateResult = (amout, currency) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      finalyAmout: +amout / rate,
      currency,
    });
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amout, currency);
  };
  const onFormReset = () => {
    setAmout("");
    setResult("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit} onReset={onFormReset}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Przelicznik walut</legend>
        <label className="form__text">Wprowadź kwotę w PLN:</label>
        <span className="form__text">
          <InputPLN amout={amout} setAmout={setAmout} />
        </span>
        <label className="form__text">Wybierz walutę:</label>
        <select
          className="form__valueOption"
          value={currency}
          onChange={({ target }) => setCurrency(target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency.short} value={currency.short}>
              {currency.name}
            </option>
          ))}
        </select>
        <label className="form__text"> Aktualne kursy:</label>
        <p>
          USD{" "}
          <input
            className="form__field"
            type="number"
            min="0.1"
            value={manualRate}
            step="0.01"
            onChange={() => setManualRate(currency.rate)}
          />
        </p>
        <p>
          GBP{" "}
          <input
            className="form__field"
            type="number"
            min="0.1"
            value="5.27"
            step="0.01"
          />
        </p>
        <p>
          EUR{" "}
          <input
            className="form__field"
            type="number"
            min="0.1"
            value="4.55"
            step="0.01"
          />
        </p>
        <span className="form__text">Otrzymujesz:</span>
        <Result result={result} />
        <button className="form__exchangeButton">Przelicz</button>
        <button className="form__resetButton" type="reset">
          Wyczyść
        </button>
      </fieldset>
    </form>
  );
};
export default Form;
