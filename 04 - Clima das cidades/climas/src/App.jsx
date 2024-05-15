import Busca from "./components/Busca";
import ClimaAtual from "./components/ClimaAtual";
import Previsão from "./components/Previsão";
import axios from "axios";
import { useState, useEffect } from "react";
import { ClimaContainer, Titulo } from "./AppStyles";

function App() {
  const [cidade, setCidade] = useState("");
  const [clima, setClima] = useState(null);
  const [previsão, setPrevisão] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY || "";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const resposta = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`
      );

      const respostaPrevisão = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      setCidade(resposta.data.name);
      setClima(resposta.data);
      setPrevisão(respostaPrevisão.data.list.slice(0, 5));
    });
  }, [apiKey]);

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
    <ClimaContainer>
      <Titulo>Condições Climáticas</Titulo>
      <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima} />
      {clima && <ClimaAtual clima={clima} />}
      {previsão.length > 0 && <Previsão previsões={previsão} />}
    </ClimaContainer>
  );
}

export default App;
