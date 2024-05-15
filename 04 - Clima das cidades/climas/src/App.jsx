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

  return (
    <>
      <Título>Condições Climáticas</Título>
      <Busca />
      <ClimaAtual />
      <Previsão />
    </>
  );
}

export default App;
