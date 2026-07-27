import React, { useRef, useState } from "react";

interface PiezaEntry {
  nombre: string;
  codigo: string;
  destino: string;
}

const mp_AutoFocusForm: React.FC = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const codeInputRef = useRef<HTMLInputElement>(null);
  const destinationInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [piezas, setPiezas] = useState<PiezaEntry[]>([]);
  const [currentName, setCurrentName] = useState("");
  const [currentCode, setCurrentCode] = useState("");
  const [currentDestination, setCurrentDestination] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentName.trim() && currentCode.trim() && currentDestination.trim()) {
      setPiezas((prev) => [...prev, { nombre: currentName.trim(), codigo: currentCode.trim(), destino: currentDestination.trim() }]);
      setCurrentName("");
      setCurrentCode("");
      setCurrentDestination("");
      nameInputRef.current?.focus();
    }
  };

  const handleQuickAdd = () => {
    nameInputRef.current?.focus();
  };

  const removePieza = (index: number) => {
    setPiezas((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px", border: "2px solid #333", borderRadius: "10px", maxWidth: "500px" }}>
      <h2>Registro Rapido de Piezas</h2>
      <p style={{ color: "#666" }}>Los campos se enfocan automaticamente para un registro rapido</p>

      <form ref={formRef} onSubmit={handleSubmit} style={{ marginBottom: "16px" }}>
        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}>
            Nombre de la pieza:
          </label>
          <input
            ref={nameInputRef}
            type="text"
            value={currentName}
            onChange={(e) => setCurrentName(e.target.value)}
            placeholder="Nombre de la pieza"
            autoFocus
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "2px solid #2980b9",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}>
            Codigo:
          </label>
          <input
            ref={codeInputRef}
            type="text"
            value={currentCode}
            onChange={(e) => setCurrentCode(e.target.value)}
            placeholder="Codigo de la pieza"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}>
            Linea destino:
          </label>
          <input
            ref={destinationInputRef}
            type="text"
            value={currentDestination}
            onChange={(e) => setCurrentDestination(e.target.value)}
            placeholder="Linea de produccion destino"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          <button
            type="submit"
            style={{
              flex: 1,
              padding: "10px",
              backgroundColor: "#27ae60",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Registrar
          </button>
          <button
            type="button"
            onClick={handleQuickAdd}
            style={{
              padding: "10px 16px",
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Enfocar
          </button>
        </div>
      </form>

      <div>
        <h3>Piezas registradas ({piezas.length})</h3>
        {piezas.length === 0 ? (
          <p style={{ color: "#999", textAlign: "center" }}>No hay piezas registradas</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {piezas.map((p, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px 12px",
                  marginBottom: "4px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "4px",
                }}
              >
                <span>
                  {p.nombre} [{p.codigo}] {'>'} {p.destino}
                </span>
                <button
                  onClick={() => removePieza(index)}
                  style={{
                    padding: "4px 8px",
                    backgroundColor: "#e74c3c",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default mp_AutoFocusForm;
