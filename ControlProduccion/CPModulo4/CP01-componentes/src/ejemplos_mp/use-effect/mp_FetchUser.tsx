import React, { useState, useEffect } from "react";

interface OrdenProduccion {
  id: number;
  nombre: string;
  origen: string;
  destino: string;
  cantidad: number;
  tiempoEstimado: number;
}

const mp_FetchUser: React.FC = () => {
  const [ordenes, setOrdenes] = useState<OrdenProduccion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedOrden, setSelectedOrden] = useState<OrdenProduccion | null>(null);

  useEffect(() => {
    const fetchOrdenes = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const mockData: OrdenProduccion[] = [
          { id: 1, nombre: "Orden-001 Lote A Componentes", origen: "Almacen Materia Prima", destino: "Linea 1 - Ensamble", cantidad: 500, tiempoEstimado: 35 },
          { id: 2, nombre: "Orden-002 Lote B Ensamble", origen: "Zona de Recepcion", destino: "Linea 2 - Soldadura", cantidad: 300, tiempoEstimado: 25 },
          { id: 3, nombre: "Orden-003 Lote C Subconjuntos", origen: "Inventario Central", destino: "Linea 3 - Pintura", cantidad: 450, tiempoEstimado: 45 },
          { id: 4, nombre: "Orden-004 Lote D Acabados", origen: "Deposito Norte", destino: "Linea 4 - Control Calidad", cantidad: 200, tiempoEstimado: 30 },
          { id: 5, nombre: "Orden-005 Lote E Empaque", origen: "Almacen General", destino: "Linea 5 - Empaque", cantidad: 600, tiempoEstimado: 20 },
        ];

        setOrdenes(mockData);
        setError(null);
      } catch (err) {
        setError("Error al cargar las ordenes de produccion");
      } finally {
        setLoading(false);
      }
    };

    fetchOrdenes();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Cargando ordenes de produccion...</h2>
        <p>Obteniendo informacion del sistema de produccion</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "20px", color: "red", textAlign: "center" }}>
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", border: "2px solid #333", borderRadius: "10px", maxWidth: "600px" }}>
      <h2>Ordenes de Produccion</h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "16px" }}>
        {ordenes.map((orden) => (
          <div
            key={orden.id}
            onClick={() => setSelectedOrden(orden)}
            style={{
              padding: "16px",
              border: `2px solid ${selectedOrden?.id === orden.id ? "#2980b9" : "#ddd"}`,
              borderRadius: "8px",
              cursor: "pointer",
              backgroundColor: selectedOrden?.id === orden.id ? "#ebf5fb" : "white",
              transition: "all 0.2s",
            }}
          >
            <h3 style={{ margin: "0 0 8px 0" }}>{orden.nombre}</h3>
            <p style={{ margin: "4px 0", fontSize: "14px" }}>
              <strong>Origen:</strong> {orden.origen}
            </p>
            <p style={{ margin: "4px 0", fontSize: "14px" }}>
              <strong>Destino:</strong> {orden.destino}
            </p>
          </div>
        ))}
      </div>

      {selectedOrden && (
        <div style={{ marginTop: "16px", padding: "16px", backgroundColor: "#d5f5e3", borderRadius: "8px" }}>
          <h3>Detalles de {selectedOrden.nombre}</h3>
          <p><strong>Cantidad:</strong> {selectedOrden.cantidad} unidades</p>
          <p><strong>Tiempo estimado:</strong> {selectedOrden.tiempoEstimado} minutos</p>
          <p><strong>Ruta:</strong> {selectedOrden.origen} {'>'} {selectedOrden.destino}</p>
        </div>
      )}
    </div>
  );
};

export default mp_FetchUser;
