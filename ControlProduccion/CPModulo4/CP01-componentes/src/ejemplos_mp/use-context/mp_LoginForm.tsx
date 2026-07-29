import React, { useState } from "react";
import { useAuth } from "./mp_AuthContext";

const mp_LoginForm: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"operario" | "supervisor" | "administrador">("operario");
  const [lineaAsignada, setLineaAsignada] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      login({
        id: Date.now(),
        nombre: username,
        role,
        lineaAsignada: role === "operario" ? lineaAsignada : undefined,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "24px",
        border: "2px solid #333",
        borderRadius: "10px",
        maxWidth: "400px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Iniciar Sesion - Control de Produccion</h2>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}>
          Usuario:
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Ingrese su nombre"
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}>
          Contrasena:
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingrese su contrasena"
          required
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}>
          Tipo de usuario:
        </label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as "operario" | "supervisor" | "administrador")}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="operario">Operario</option>
          <option value="supervisor">Supervisor</option>
          <option value="administrador">Administrador</option>
        </select>
      </div>

      {role === "operario" && (
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "4px", fontWeight: "bold" }}>
            Linea de Produccion:
          </label>
          <select
            value={lineaAsignada}
            onChange={(e) => setLineaAsignada(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="">Seleccionar linea...</option>
            <option value="Linea 1 - Ensamble">Linea 1 - Ensamble</option>
            <option value="Linea 2 - Soldadura">Linea 2 - Soldadura</option>
            <option value="Linea 3 - Pintura">Linea 3 - Pintura</option>
            <option value="Linea 4 - Control Calidad">Linea 4 - Control Calidad</option>
            <option value="Linea 5 - Empaque">Linea 5 - Empaque</option>
          </select>
        </div>
      )}

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: "#27ae60",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Ingresar al Sistema
      </button>
    </form>
  );
};

export default mp_LoginForm;
