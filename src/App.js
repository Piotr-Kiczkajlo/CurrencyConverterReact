import { useState } from "react";
import currencies from "./currencies";
import Form from "./Form";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (amout, currency) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      finalyAmout: +amout / rate,
      currency,
    });
  };
  return <Form result={result} calculateResult={calculateResult} />;
}
export default App;
