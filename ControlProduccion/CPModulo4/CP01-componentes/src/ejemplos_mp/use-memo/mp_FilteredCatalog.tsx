import React, { useState, useMemo } from "react";

interface Equipo {
  id: number;
  modelo: string;
  fabricante: string;
  capacidad: number;
  tipo: "Soldadora" | "Prensa" | "Horno" | "Empacadora" | "Pintora";
  anio: number;
  activo: boolean;
}

const equiposData: Equipo[] = [
  { id: 1, modelo: "SolderMax 3000", fabricante: "Lincoln Electric", capacidad: 120, tipo: "Soldadora", anio: 2020, activo: true },
  { id: 2, modelo: "PressForce X1", fabricante: "Schuler", capacidad: 85, tipo: "Prensa", anio: 2019, activo: true },
  { id: 3, modelo: "FurnacePro H7", fabricante: "Ipsen", capacidad: 60, tipo: "Horno", anio: 2021, activo: true },
  { id: 4, modelo: "PackMaster 200", fabricante: "Bosch Packaging", capacidad: 200, tipo: "Empacadora", anio: 2022, activo: true },
  { id: 5, modelo: "PaintJet Ultra", fabricante: "Graco", capacidad: 95, tipo: "Pintora", anio: 2018, activo: false },
  { id: 6, modelo: "SolderMax 5000", fabricante: "Lincoln Electric", capacidad: 180, tipo: "Soldadora", anio: 2023, activo: true },
  { id: 7, modelo: "PressForce X2", fabricante: "Schuler", capacidad: 110, tipo: "Prensa", anio: 2020, activo: true },
  { id: 8, modelo: "FurnacePro H9", fabricante: "Ipsen", capacidad: 75, tipo: "Horno", anio: 2021, activo: false },
  { id: 9, modelo: "PackMaster 400", fabricante: "Bosch Packaging", capacidad: 300, tipo: "Empacadora", anio: 2024, activo: true },
  { id: 10, modelo: "PaintJet Pro", fabricante: "Graco", capacidad: 130, tipo: "Pintora", anio: 2022, activo: true },
];

const mp_FilteredCatalog: React.FC = () => {
  const [tipoFilter, setTipoFilter] = useState<string>("todos");
  const [fabricanteFilter, setFabricanteFilter] = useState<string>("todos");
  const [showActiveOnly, setShowActiveOnly] = useState(false);

  const filteredEquipos = useMemo(() => {
    return equiposData.filter((equipo) => {
      const matchesTipo = tipoFilter === "todos" || equipo.tipo === tipoFilter;
      const matchesFabricante = fabricanteFilter === "todos" || equipo.fabricante === fabricanteFilter;
      const matchesActive = !showActiveOnly || equipo.activo;
      return matchesTipo && matchesFabricante && matchesActive;
    });
  }, [tipoFilter, fabricanteFilter, showActiveOnly]);

  const stats = useMemo(() => {
    const total = filteredEquipos.length;
    const activos = filteredEquipos.filter((e) => e.activo).length;
    const capacidadTotal = filteredEquipos.reduce((sum, e) => sum + e.capacidad, 0);
    const promedioCapacidad = total > 0 ? Math.round(capacidadTotal / total) : 0;
    return { total, activos, capacidadTotal, promedioCapacidad };
  }, [filteredEquipos]);

  const fabricantes = useMemo(() => [...new Set(equiposData.map((e) => e.fabricante))], []);

  return (
    <div style={{ padding: "20px", border: "2px solid #333", borderRadius: "10px", maxWidth: "700px" }}>
      <h2>Catalogo Filtrado de Equipos</h2>

      <div style={{ display: "flex", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
        <select
          value={tipoFilter}
          onChange={(e) => setTipoFilter(e.target.value)}
          style={{ padding: "8px", borderRadius: "4px" }}
        >
          <option value="todos">Todos los tipos</option>
          <option value="Soldadora">Soldadora</option>
          <option value="Prensa">Prensa</option>
          <option value="Horno">Horno</option>
          <option value="Empacadora">Empacadora</option>
          <option value="Pintora">Pintora</option>
        </select>

        <select
          value={fabricanteFilter}
          onChange={(e) => setFabricanteFilter(e.target.value)}
          style={{ padding: "8px", borderRadius: "4px" }}
        >
          <option value="todos">Todos los fabricantes</option>
          {fabricantes.map((fabricante) => (
            <option key={fabricante} value={fabricante}>
              {fabricante}
            </option>
          ))}
        </select>

        <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <input
            type="checkbox"
            checked={showActiveOnly}
            onChange={(e) => setShowActiveOnly(e.target.checked)}
          />
          Solo activos
        </label>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "12px", marginBottom: "16px" }}>
        <div style={{ textAlign: "center", padding: "12px", backgroundColor: "#ebf5fb", borderRadius: "8px" }}>
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "#2980b9" }}>{stats.total}</div>
          <div style={{ fontSize: "12px", color: "#666" }}>Total</div>
        </div>
        <div style={{ textAlign: "center", padding: "12px", backgroundColor: "#d5f5e3", borderRadius: "8px" }}>
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "#27ae60" }}>{stats.activos}</div>
          <div style={{ fontSize: "12px", color: "#666" }}>Activos</div>
        </div>
        <div style={{ textAlign: "center", padding: "12px", backgroundColor: "#fdebd0", borderRadius: "8px" }}>
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "#f39c12" }}>{stats.capacidadTotal}</div>
          <div style={{ fontSize: "12px", color: "#666" }}>Cap. Total</div>
        </div>
        <div style={{ textAlign: "center", padding: "12px", backgroundColor: "#fadbd8", borderRadius: "8px" }}>
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "#e74c3c" }}>{stats.promedioCapacidad}</div>
          <div style={{ fontSize: "12px", color: "#666" }}>Promedio</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        {filteredEquipos.map((equipo) => (
          <div
            key={equipo.id}
            style={{
              padding: "12px",
              border: `2px solid ${equipo.activo ? "#27ae60" : "#e74c3c"}`,
              borderRadius: "8px",
              backgroundColor: equipo.activo ? "#f0fff4" : "#fff5f5",
            }}
          >
            <h4 style={{ margin: "0 0 8px 0" }}>{equipo.modelo}</h4>
            <p style={{ margin: "2px 0", fontSize: "13px" }}>Fabricante: {equipo.fabricante}</p>
            <p style={{ margin: "2px 0", fontSize: "13px" }}>Capacidad: {equipo.capacidad} u/h</p>
            <p style={{ margin: "2px 0", fontSize: "13px" }}>Tipo: {equipo.tipo}</p>
            <p style={{ margin: "2px 0", fontSize: "13px" }}>Ano: {equipo.anio}</p>
            <span
              style={{
                fontSize: "12px",
                padding: "2px 8px",
                borderRadius: "12px",
                backgroundColor: equipo.activo ? "#27ae60" : "#e74c3c",
                color: "white",
              }}
            >
              {equipo.activo ? "Activo" : "Inactivo"}
            </span>
          </div>
        ))}
      </div>

      {filteredEquipos.length === 0 && (
        <p style={{ textAlign: "center", color: "#999", padding: "20px" }}>
          No se encontraron equipos con los filtros seleccionados
        </p>
      )}
    </div>
  );
};

export default mp_FilteredCatalog;
