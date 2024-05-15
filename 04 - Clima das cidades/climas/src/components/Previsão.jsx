import React from "react";
import { PrevisaoContainer } from "./PrevisãoStyles";

function Previsão({ previsões }) {
  return (
    <PrevisaoContainer>
      <h4>Previsão para as próximas horas</h4>
      <ul>
        {previsões.map((previsao) => (
          <li key={previsao.dt}>
            <img
              src={`http://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`}
              alt={previsao.weather[0].description}
            />
            {previsao.main.temp} ºC - {previsao.weather[0].description}
          </li>
        ))}
      </ul>
    </PrevisaoContainer>
  );
}

export default Previsão;
