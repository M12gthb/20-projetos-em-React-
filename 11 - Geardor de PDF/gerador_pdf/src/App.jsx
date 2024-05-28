import { useState } from "react";
import "./App.css";
import GeneratePdf from "./components/generatePdf";

function App() {
  return (
    <div className="App">
      <h1>Gerador de PDF</h1>
      <GeneratePdf />
    </div>
  );
}

export default App;
