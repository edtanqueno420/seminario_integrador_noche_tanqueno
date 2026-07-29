import React, { useState, useCallback, useMemo } from "react";

interface LineaProduccion {
  id: number;
  nombre: string;
  capacidadPorHora: number;
  tiempoEstimado: number;
  activa: boolean;
}

const initialLineas: LineaProduccion[] = [
  { id: 1, nombre: "Linea Ensamble Principal", capacidadPorHora: 45, tiempoEstimado: 35, activa: true },
  { id: 2, nombre: "Linea Soldadura Norte", capacidadPorHora: 30, tiempoEstimado: 25, activa: true },
  { id: 3, nombre: "Linea Pintura Sur", capacidadPorHora: 55, tiempoEstimado: 45, activa: false },
  { id: 4, nombre: "Linea Empaque Este", capacidadPorHora: 80, tiempoEstimado: 15, activa: true },
  { id: 5, nombre: "Linea Control Calidad", capacidadPorHora: 60, tiempoEstimado: 20, activa: true },
  { id: 6, nombre: "Linea Corte CNC", capacidadPorHora: 25, tiempoEstimado: 50, activa: false },
  { id: 7, nombre: "Linea Termica", capacidadPorHora: 40, tiempoEstimado: 30, activa: true },
  { id: 8, nombre: "Linea Embalaje Final", capacidadPorHora: 70, tiempoEstimado: 12, activa: true },
];

interface LineaItemProps {
  linea: LineaProduccion;
  onSelect: (id: number) => void;
}

const LineaItem: React.FC<LineaItemProps> = React.memo(({ linea, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(linea.id)}
      style={{
        padding: "12px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        cursor: "pointer",
        backgroundColor: linea.activa ? "#d5f5e3" : "#fadbd8",
        marginBottom: "8px",
      }}
    >
      <h4 style={{ margin: "0 0 8px 0" }}>{linea.nombre}</h4>
      <p style={{ margin: "4px 0", fontSize: "14px" }}>
        Cap: {linea.capacidadPorHora} u/h | Tiempo: {linea.tiempoEstimado} min/lote | {linea.activa ? "Activa" : "Inactiva"}
      </p>
    </div>
  );
});

LineaItem.displayName = "LineaItem";

const mp_MemoizedList: React.FC = () => {
  const [lineas] = useState<LineaProduccion[]>(initialLineas);
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleSelect = useCallback((id: number) => {
    setSelectedId(id);
  }, []);

  const filteredLineas = useMemo(() => {
    return lineas.filter((linea) => {
      if (filter === "active") return linea.activa;
      if (filter === "inactive") return !linea.activa;
      return true;
    });
  }, [lineas, filter]);

  return (
    <div style={{ padding: "20px", border: "2px solid #333", borderRadius: "10px", maxWidth: "500px" }}>
      <h2>Lista Memoizada de Lineas de Produccion</h2>

      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        {(["all", "active", "inactive"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: "8px 16px",
              backgroundColor: filter === f ? "#2980b9" : "#ecf0f1",
              color: filter === f ? "white" : "#333",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {f === "all" ? "Todas" : f === "active" ? "Activas" : "Inactivas"}
          </button>
        ))}
      </div>

      <div>
        {filteredLineas.map((linea) => (
          <LineaItem key={linea.id} linea={linea} onSelect={handleSelect} />
        ))}
      </div>

      {selectedId && (
        <div style={{ marginTop: "16px", padding: "12px", backgroundColor: "#ebf5fb", borderRadius: "6px" }}>
          <strong>Linea seleccionada:</strong> {lineas.find((l) => l.id === selectedId)?.nombre}
        </div>
      )}
    </div>
  );
};

export default mp_MemoizedList;
