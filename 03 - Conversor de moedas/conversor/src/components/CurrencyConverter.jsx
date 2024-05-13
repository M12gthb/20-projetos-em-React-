import { useState, useEffect } from "react";
import "./CurrencyConverter.css";
import axios from "axios";

function CurrencyConverter() {
  const [rates, setRates] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [converterdAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://v6.exchangerate-api.com/v6/9c764227db3b150c92480a55/latest/USD"
      )
      .then((response) => {
        setRates(response.data.conversion_rates);
      })
      .catch((error) => {
        console.log("Ocorreu um erro", error);
      });
  }, []);

  useEffect(() => {
    if (rates) {
      const rateFrom = rates[fromCurrency] || 0;
      const rateTo = rates[toCurrency] || 0;
      setConvertedAmount(((amount / rateFrom) * rateTo).toFixed(2));
    }
  }, [amount, rates, fromCurrency, toCurrency]);

  if (!rates) {
    return <h1>Carregando...</h1>;
  }
  return (
    <div className="converter">
      <h2>Conversor de moedas</h2>
      <input
        type="number"
        placeholder="Digite o valor..."
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <span>Selecione as moedas</span>
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        {Object.keys(rates).map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>
      <span>Para</span>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        {Object.keys(rates).map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>
      <h3>
        {converterdAmount} {toCurrency}
      </h3>
      <p>
        {amount} {fromCurrency} valem {converterdAmount} {toCurrency}
      </p>
    </div>
  );
}

export default CurrencyConverter;
