import Citação from "./components/Citação";
import citacoes from "./data.js";
import { useState } from "react";

function App() {
  const [indice, setIndice] = useState(0);

  const proximaCitacao = () => {
    setIndice((indiceAtual) => (indiceAtual + 1) % citacoes.length);
  };
  return (
    <div className="container mt-5">
      <Citação texto={citacoes[indice].texto} autor={citacoes[indice].autor} />
      <button className="btn btn-success mt-2" onClick={proximaCitacao}>
        Próxima citação
      </button>
    </div>
  );
}

export default App;
