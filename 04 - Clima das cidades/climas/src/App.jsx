import Busca from "./components/Busca";
import ClimaAtual from "./components/ClimaAtual";
import Previsão from "./components/Previsão";
import { Título } from "./AppStyles";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState(null);
  const [previsão, setPrevisão] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY || "";

  const buscarClima = async () => {
    try {
      const respostaClima = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      const respostaPrevisão = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      setClima(respostaClima.data);
      setPrevisão(respostaPrevisão.data.list.slice(0, 5));
    } catch (error) {
      console.log("Erro ao buscar clima:", error);
    }
  };

  return (
    <>
      <Título>Condições Climáticas</Título>
      <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima} />
      {clima && <ClimaAtual clima={clima} />}
      {previsão.length > 0 && <Previsão previsões={previsão} />}
    </>
  );
}

export default App;
