import "./App.css";
import Busca from "./components/Busca";
import ClimaAtual from "./components/ClimaAtual";
import Previsão from "./components/Previsão";

function App() {
  return (
    <>
      <h1>Condições Climáticas</h1>
      <Busca />
      <ClimaAtual />
      <Previsão />
    </>
  );
}

export default App;
