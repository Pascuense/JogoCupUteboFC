"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FaseDropdown({ selectedFase, setSelectedFase }) {
  const fases = [
    { value: "grupoA", label: "Grupo A" },
    { value: "grupoB", label: "Grupo B" },
    { value: "grupoC", label: "Grupo C" },
    { value: "grupoD", label: "Grupo D" },
    { value: "grupoE", label: "Grupo E" },
    { value: "grupoF", label: "Grupo F" },
    { value: "octavos", label: "Octavos" },
    { value: "cuartos", label: "Cuartos" },
    { value: "semis", label: "Semifinal" },
    { value: "final", label: "Final" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown-container">
      <button className="dropdown-toggle" onClick={() => setOpen(!open)}>
        {fases.find((f) => f.value === selectedFase)?.label || "Selecciona fase"}
        <FiChevronDown className={`chevron ${open ? "open" : ""}`} />
      </button>

      {open && (
        <ul className="dropdown-menu">
          {fases.map((fase) => (
            <li
              key={fase.value}
              className={`dropdown-item ${
                fase.value === selectedFase ? "active" : ""
              }`}
              onClick={() => {
                setSelectedFase(fase.value as typeof selectedFase);
                setOpen(false);
              }}
            >
              {fase.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
