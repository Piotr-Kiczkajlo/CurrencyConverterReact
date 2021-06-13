import "./style.css";

const Form = () => (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legend">Przelicznik walut</legend>
      <label className="form__text">Wprowadź kwotę w PLN:</label>
      <span className="form__text">
        <input
          className="form__inputValue"
          type="number"
          min="1"
          step="any"
          required
        />
      </span>
      <label className="form__text">Wybierz walutę:</label>
      <select className="form__valueOption">
        <option value="$" selected>
          {" "}
          USD
        </option>
        <option value="£"> GBP</option>
        <option value="€"> EUR</option>
      </select>
      <label className="form__text"> Aktualne kursy:</label>
      <p>
        USD{" "}
        <input
          className="form__field"
          type="number"
          min="0.1"
          value="3.77"
          step="0.01"
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
      <strong className="result">0</strong>
      <button className="form__exchangeButton">Przelicz</button>
      <button className="form__resetButton" type="reset">
        Wyczyść
      </button>
    </fieldset>
  </form>
);
export default Form;
