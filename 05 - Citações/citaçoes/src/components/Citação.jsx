import { useState, useEffect } from "react";

function Citação({ texto, autor }) {
  const [tradução, setTradução] = useState("");
  const [block, setBlock] = useState(true);

  const traduzirCitação = async (idioma) => {
    try {
      setBlock(false);
      const resposta = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
          q: texto,
          source: "pt",
          target: idioma,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await resposta.json();
      setTradução(data.translatedText);
    } catch (error) {
      console.log("Não foi possivel realizar a tradução".error);
    } finally {
      setBlock(true);
    }
  };
  useEffect(() => {
    setTradução("");
  }, [texto]);
  return (
    <div>
      <blockquote className="blockquote">
        <p>{tradução ? tradução : texto}</p>
        <footer className="blockquote-footer">{autor}</footer>
      </blockquote>
      <button
        className="btn btn-primary m-1"
        onClick={() => traduzirCitação("en")}
        disabled={block == false ? true : false}
      >
        Traduzir para o inglês
      </button>
      <button
        className="btn btn-secondary m-1"
        onClick={() => traduzirCitação("es")}
        disabled={block == false ? true : false}
      >
        Traduzir para o espanhol
      </button>
    </div>
  );
}

export default Citação;
