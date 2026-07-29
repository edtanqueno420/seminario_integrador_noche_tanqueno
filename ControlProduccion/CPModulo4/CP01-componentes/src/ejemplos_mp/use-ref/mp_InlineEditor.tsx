import React, { useRef, useState } from "react";

interface LineaProduccion {
  id: number;
  nombre: string;
}

const mp_InlineEditor: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [lineas, setLineas] = useState<LineaProduccion[]>([
    { id: 1, nombre: "Linea 1 - Ensamble" },
    { id: 2, nombre: "Linea 2 - Soldadura" },
    { id: 3, nombre: "Linea 3 - Pintura" },
    { id: 4, nombre: "Linea 4 - Control Calidad" },
    { id: 5, nombre: "Linea 5 - Empaque" },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  const startEditing = (linea: LineaProduccion) => {
    setEditingId(linea.id);
    setEditValue(linea.nombre);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    }, 0);
  };

  const saveEdit = () => {
    if (editingId !== null && editValue.trim()) {
      setLineas((prev) =>
        prev.map((l) => (l.id === editingId ? { ...l, nombre: editValue.trim() } : l))
      );
    }
    setEditingId(null);
    setEditValue("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      saveEdit();
    } else if (e.key === "Escape") {
      cancelEdit();
    }
  };

  return (
    <div style={{ padding: "20px", border: "2px solid #333", borderRadius: "10px", maxWidth: "500px" }}>
      <h2>Editor Inline de Nombres de Linea de Produccion</h2>
      <p style={{ color: "#666" }}>Haz clic en "Editar" para modificar el nombre de una linea de produccion</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {lineas.map((linea) => (
          <li
            key={linea.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px",
              marginBottom: "8px",
              backgroundColor: editingId === linea.id ? "#ebf5fb" : "#f8f9fa",
              borderRadius: "8px",
              border: `2px solid ${editingId === linea.id ? "#2980b9" : "#ddd"}`,
            }}
          >
            {editingId === linea.id ? (
              <div style={{ flex: 1, display: "flex", gap: "8px" }}>
                <input
                  ref={inputRef}
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  style={{
                    flex: 1,
                    padding: "8px",
                    borderRadius: "4px",
                    border: "2px solid #2980b9",
                    fontSize: "16px",
                  }}
                />
                <button
                  onClick={saveEdit}
                  style={{
                    padding: "8px 12px",
                    backgroundColor: "#27ae60",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Guardar
                </button>
                <button
                  onClick={cancelEdit}
                  style={{
                    padding: "8px 12px",
                    backgroundColor: "#e74c3c",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <div style={{ flex: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "16px" }}>{linea.nombre}</span>
                <button
                  onClick={() => startEditing(linea)}
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#f39c12",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Editar
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "16px", padding: "12px", backgroundColor: "#d5f5e3", borderRadius: "6px" }}>
        <strong>Atajos de teclado:</strong> Enter para guardar, Escape para cancelar
      </div>
    </div>
  );
};

export default mp_InlineEditor;
