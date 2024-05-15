import { useState, useEffect } from "react";
import TimeClockZone from "./components/TimeClockZone";

function App() {
  const fusosHorarios = [
    "UTC",
    "GMT",
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Berlin",
    "Asia/Tokyo",
  ];

  const fusoHorarioLocal = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [fusoHorarioSelecionado, setFusoHorarioSelecionado] = useState([
    fusoHorarioLocal,
  ]);
  const adicionarFusoHorario = (e) => {
    const novoFuso = e.target.value;
    if (!fusoHorarioSelecionado.includes(novoFuso)) {
      setFusoHorarioSelecionado([...fusoHorarioSelecionado, novoFuso]);
    }
  };
  return (
    <>
      <h1>Relógio Mundial</h1>
      <select onChange={(e) => adicionarFusoHorario(e)}>
        <option value="" disabled select>
          Selecione um fuso horário
        </option>
        {fusosHorarios.map((fuso) => (
          <option key={fuso} value={fuso}>
            {fuso}
          </option>
        ))}
      </select>
      <div className="timezone-container">
        {fusoHorarioSelecionado.map((fuso) => (
          <TimeClockZone key={fuso} timeZone={fuso} />
        ))}
      </div>
    </>
  );
}

export default App;
