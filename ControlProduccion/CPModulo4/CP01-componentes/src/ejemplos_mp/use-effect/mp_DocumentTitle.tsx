import React, { useState, useEffect } from "react";

const mp_DocumentTitle: React.FC = () => {
  const [currentLine, setCurrentLine] = useState("Linea 1 - Ensamble");
  const lines = [
    "Linea 1 - Ensamble",
    "Linea 2 - Soldadura",
    "Linea 3 - Pintura",
    "Linea 4 - Control Calidad",
    "Linea 5 - Empaque",
  ];

  useEffect(() => {
    document.title = `Planta - ${currentLine} - Produccion`;
    return () => {
      document.title = "Sistema de Control de Produccion";
    };
  }, [currentLine]);

  return (
    <div style={{ padding: "20px", border: "2px solid #333", borderRadius: "10px", maxWidth: "500px" }}>
      <h2>Cambio de Titulo - Linea de Produccion Actual</h2>
      <p style={{ color: "#666" }}>El titulo del documento se actualiza con la linea de produccion seleccionada:</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "16px" }}>
        {lines.map((line) => (
          <button
            key={line}
            onClick={() => setCurrentLine(line)}
            style={{
              padding: "12px",
              backgroundColor: currentLine === line ? "#2980b9" : "#ecf0f1",
              color: currentLine === line ? "white" : "#333",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              textAlign: "left",
              fontSize: "16px",
            }}
          >
            {line}
          </button>
        ))}
      </div>

      <div style={{ marginTop: "16px", padding: "12px", backgroundColor: "#d5f5e3", borderRadius: "6px" }}>
        <strong>Titulo actual:</strong> Planta - {currentLine} - Produccion
      </div>
    </div>
  );
};

export default mp_DocumentTitle;
