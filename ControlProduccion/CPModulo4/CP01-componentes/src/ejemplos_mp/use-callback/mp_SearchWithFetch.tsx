import React, { useState, useCallback, useEffect } from "react";

interface OrdenProduccion {
  id: number;
  nombre: string;
  origen: string;
  destino: string;
  cantidad: number;
  tiempoEstimado: number;
}

const allOrdenes: OrdenProduccion[] = [
  { id: 1, nombre: "Orden Ensamble A1", origen: "Almacen Materia Prima", destino: "Linea Ensamble Principal", cantidad: 150, tiempoEstimado: 120 },
  { id: 2, nombre: "Orden Soldadura B2", origen: "Almacen Metales", destino: "Linea Soldadura Norte", cantidad: 80, tiempoEstimado: 90 },
  { id: 3, nombre: "Orden Pintura C3", origen: "Almacen Quimicos", destino: "Linea Pintura Sur", cantidad: 200, tiempoEstimado: 60 },
  { id: 4, nombre: "Orden Empaque D4", origen: "Almacen Material Empaque", destino: "Linea Empaque Este", cantidad: 300, tiempoEstimado: 45 },
  { id: 5, nombre: "Orden Control Calidad E5", origen: "Linea Ensamble Principal", destino: "Estacion Control Calidad", cantidad: 150, tiempoEstimado: 30 },
  { id: 6, nombre: "Orden Corte F6", origen: "Almacen Chapas", destino: "Linea Corte CNC", cantidad: 100, tiempoEstimado: 75 },
  { id: 7, nombre: "Orden Termica G7", origen: "Almacen Tratamientos", destino: "Linea Termica", cantidad: 120, tiempoEstimado: 100 },
  { id: 8, nombre: "Orden Embalaje H8", origen: "Linea Empaque Este", destino: "Almacen Producto Terminado", cantidad: 250, tiempoEstimado: 40 },
];

const mp_SearchWithFetch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<OrdenProduccion[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const searchOrdenes = useCallback(async (searchQuery: string) => {
    if (searchQuery.trim() === "") {
      setResults([]);
      setHasSearched(false);
      return;
    }

    setLoading(true);
    setHasSearched(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    const filtered = allOrdenes.filter(
      (orden) =>
        orden.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        orden.origen.toLowerCase().includes(searchQuery.toLowerCase()) ||
        orden.destino.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filtered);
    setLoading(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      searchOrdenes(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, searchOrdenes]);

  return (
    <div style={{ padding: "20px", border: "2px solid #333", borderRadius: "10px", maxWidth: "500px" }}>
      <h2>Buscador de Ordenes de Produccion</h2>

      <div style={{ position: "relative", marginBottom: "16px" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar orden, origen o destino..."
          style={{
            width: "100%",
            padding: "12px 16px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "2px solid #ddd",
            boxSizing: "border-box",
          }}
        />
        {loading && (
          <span style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", color: "#999" }}>
            Buscando...
          </span>
        )}
      </div>

      <div style={{ fontSize: "14px", color: "#666", marginBottom: "12px" }}>
        {hasSearched && !loading && `${results.length} resultado(s) encontrado(s)`}
      </div>

      <div>
        {results.map((orden) => (
          <div
            key={orden.id}
            style={{
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              marginBottom: "8px",
              backgroundColor: "#f8f9fa",
            }}
          >
            <h4 style={{ margin: "0 0 8px 0" }}>{orden.nombre}</h4>
            <p style={{ margin: "4px 0", fontSize: "14px" }}>
              Origen: {orden.origen} {'>'} Destino: {orden.destino}
            </p>
            <p style={{ margin: "4px 0", fontSize: "14px", color: "#666" }}>
              Cantidad: {orden.cantidad} unidades | Tiempo estimado: {orden.tiempoEstimado} min
            </p>
          </div>
        ))}
      </div>

      {hasSearched && !loading && results.length === 0 && (
        <div style={{ textAlign: "center", padding: "20px", color: "#999" }}>
          <p>No se encontraron ordenes para "{query}"</p>
        </div>
      )}
    </div>
  );
};

export default mp_SearchWithFetch;
