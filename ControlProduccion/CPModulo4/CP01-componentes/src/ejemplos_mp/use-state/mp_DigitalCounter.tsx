import React, { useState } from "react";

const mp_DigitalCounter: React.FC = () => {
  const [produccionCount, setProduccionCount] = useState<number>(0);
  const capacidadLote = 50;

  const increment = () => {
    if (produccionCount < capacidadLote) {
      setProduccionCount((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (produccionCount > 0) {
      setProduccionCount((prev) => prev - 1);
    }
  };

  const reset = () => setProduccionCount(0);

  const getPercentage = () => (produccionCount / capacidadLote) * 100;

  const getColor = () => {
    const pct = getPercentage();
    if (pct < 50) return "#27ae60";
    if (pct < 80) return "#f39c12";
    return "#e74c3c";
  };

  return (
    <div style={{ padding: "20px", border: "2px solid #333", borderRadius: "10px", maxWidth: "400px" }}>
      <h2>Contador de Unidades de Produccion</h2>
      <div
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          color: getColor(),
          textAlign: "center",
          margin: "16px 0",
        }}
      >
        {produccionCount} / {capacidadLote}
      </div>

      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "#eee",
          borderRadius: "10px",
          overflow: "hidden",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            width: `${getPercentage()}%`,
            height: "100%",
            backgroundColor: getColor(),
            transition: "width 0.3s ease",
          }}
        />
      </div>

      <p style={{ textAlign: "center", color: getColor() }}>
        {getPercentage() >= 100 ? "Lote COMPLETO" : `Produccion: ${Math.round(getPercentage())}%`}
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={decrement} disabled={produccionCount === 0} style={{ padding: "10px 20px" }}>
          Restar unidad
        </button>
        <button onClick={reset} style={{ padding: "10px 20px" }}>
          Reiniciar
        </button>
        <button onClick={increment} disabled={produccionCount >= capacidadLote} style={{ padding: "10px 20px" }}>
          Sumar unidad
        </button>
      </div>
    </div>
  );
};

export default mp_DigitalCounter;
