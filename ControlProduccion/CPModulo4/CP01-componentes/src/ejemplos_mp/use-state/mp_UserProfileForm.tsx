import React, { useState } from "react";

interface OperarioProfile {
  nombre: string;
  apellido: string;
  especialidad: string;
  lineaAsignada: string;
  telefono: string;
}

const mp_UserProfileForm: React.FC = () => {
  const [profile, setProfile] = useState<OperarioProfile>({
    nombre: "",
    apellido: "",
    especialidad: "",
    lineaAsignada: "",
    telefono: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setProfile({ nombre: "", apellido: "", especialidad: "", lineaAsignada: "", telefono: "" });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div style={{ padding: "20px", border: "2px solid #27ae60", borderRadius: "10px", maxWidth: "500px" }}>
        <h2>Registro Exitoso</h2>
        <p><strong>Nombre:</strong> {profile.nombre} {profile.apellido}</p>
        <p><strong>Especialidad:</strong> {profile.especialidad}</p>
        <p><strong>Linea Asignada:</strong> {profile.lineaAsignada}</p>
        <p><strong>Telefono:</strong> {profile.telefono}</p>
        <button onClick={handleReset} style={{ marginTop: "12px", padding: "8px 16px" }}>
          Registrar otro operario
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: "20px", border: "2px solid #333", borderRadius: "10px", maxWidth: "500px" }}
    >
      <h2>Registro de Operario</h2>

      <div style={{ marginBottom: "12px" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={profile.nombre}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>Apellido:</label>
        <input
          type="text"
          name="apellido"
          value={profile.apellido}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>Especialidad:</label>
        <input
          type="text"
          name="especialidad"
          value={profile.especialidad}
          onChange={handleChange}
          required
          placeholder="Ej: Soldadura, Pintura, Ensamble"
          style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>Linea Asignada:</label>
        <select
          name="lineaAsignada"
          value={profile.lineaAsignada}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
        >
          <option value="">Seleccionar linea...</option>
          <option value="Linea 1 - Ensamble">Linea 1 - Ensamble</option>
          <option value="Linea 2 - Soldadura">Linea 2 - Soldadura</option>
          <option value="Linea 3 - Pintura">Linea 3 - Pintura</option>
          <option value="Linea 4 - Control Calidad">Linea 4 - Control Calidad</option>
          <option value="Linea 5 - Empaque">Linea 5 - Empaque</option>
        </select>
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>Telefono:</label>
        <input
          type="tel"
          name="telefono"
          value={profile.telefono}
          onChange={handleChange}
          required
          placeholder="Ej: 555-0123"
          style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
      </div>

      <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#2980b9", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
        Registrar Operario
      </button>
    </form>
  );
};

export default mp_UserProfileForm;
