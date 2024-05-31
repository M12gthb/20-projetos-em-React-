import React from "react";

function TableHeader({ onColumnClick }) {
  return (
    <thead>
      <th onClick={() => onColumnClick("nome")}>Nome</th>
      <th onClick={() => onColumnClick("idade")}>Idade</th>
      <th onClick={() => onColumnClick("cargo")}>Cargo</th>
    </thead>
  );
}

export default TableHeader;
