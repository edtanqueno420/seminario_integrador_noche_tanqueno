import React, { useState, useEffect } from "react";

function mp_useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default mp_useLocalStorage;

interface OperatorPreferences {
  lineaFavorita: string;
  turnoActual: "manana" | "tarde" | "noche";
  modoOscuro: boolean;
}

export const EjemploUso: React.FC = () => {
  const [preferencias, setPreferencias] = mp_useLocalStorage<OperatorPreferences>("operator-preferences", {
    lineaFavorita: "Linea 1 - Ensamble",
    turnoActual: "manana",
    modoOscuro: false,
  });

  const [contadorVisitas, setContadorVisitas] = mp_useLocalStorage<number>("operator-visits", 0);

  useEffect(() => {
    setContadorVisitas((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: "20px", border: "2px solid #333", borderRadius: "10px", maxWidth: "500px" }}>
      <h2>Hook Personalizado - useLocalStorage</h2>
      <p style={{ color: "#666" }}>Las preferencias del operario se guardan automaticamente en localStorage</p>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}>
          Linea favorita:
        </label>
        <select
          value={preferencias.lineaFavorita}
          onChange={(e) => setPreferencias((prev) => ({ ...prev, lineaFavorita: e.target.value }))}
          style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
        >
          <option value="Linea 1 - Ensamble">Linea 1 - Ensamble</option>
          <option value="Linea 2 - Soldadura">Linea 2 - Soldadura</option>
          <option value="Linea 3 - Pintura">Linea 3 - Pintura</option>
          <option value="Linea 4 - Control Calidad">Linea 4 - Control Calidad</option>
          <option value="Linea 5 - Empaque">Linea 5 - Empaque</option>
        </select>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}>
          Turno actual:
        </label>
        <div style={{ display: "flex", gap: "8px" }}>
          {(["manana", "tarde", "noche"] as const).map((turno) => (
            <button
              key={turno}
              onClick={() => setPreferencias((prev) => ({ ...prev, turnoActual: turno }))}
              style={{
                flex: 1,
                padding: "8px",
                backgroundColor: preferencias.turnoActual === turno ? "#2980b9" : "#ecf0f1",
                color: preferencias.turnoActual === turno ? "white" : "#333",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                textTransform: "capitalize",
              }}
            >
              {turno}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={preferencias.modoOscuro}
            onChange={(e) => setPreferencias((prev) => ({ ...prev, modoOscuro: e.target.checked }))}
          />
          <span>Modo oscuro</span>
        </label>
      </div>

      <div style={{ padding: "12px", backgroundColor: "#ebf5fb", borderRadius: "6px" }}>
        <p style={{ margin: 0 }}>
          <strong>Visitas a esta pagina:</strong> {contadorVisitas}
        </p>
      </div>
    </div>
  );
};
