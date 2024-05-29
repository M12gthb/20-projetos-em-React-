import { useState } from "react";
import { Container, Typography } from "@mui/material";

function TaxReport({ taxData }) {
  return (
    <Container>
      <Typography>Relatório de impostos</Typography>
      <Typography>Nome: {taxData.name}</Typography>
      <Typography>Idade: {taxData.age} anos</Typography>
      <Typography>
        Renda:{" "}
        {parseFloat(taxData.income).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </Typography>
      <Typography>
        Imposto a pagar:{" "}
        {parseFloat(taxData.tax).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </Typography>
    </Container>
  );
}

export default TaxReport;
