import React from "react";
import { useAuth } from "./mp_AuthContext";

const mp_UserBadge: React.FC = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return (
      <div
        style={{
          padding: "12px 16px",
          backgroundColor: "#f0f0f0",
          borderRadius: "20px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span>No autenticado</span>
      </div>
    );
  }

  const getRoleLabel = (role: string) => {
    switch (role) {
      case "operario":
        return "Operario";
      case "administrador":
        return "Administrador";
      case "supervisor":
        return "Supervisor";
      default:
        return "Desconocido";
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "operario":
        return "#27ae60";
      case "administrador":
        return "#9b59b6";
      case "supervisor":
        return "#3498db";
      default:
        return "#95a5a6";
    }
  };

  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "white",
        border: "2px solid #eee",
        borderRadius: "12px",
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          backgroundColor: getRoleBadgeColor(user.role),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {getRoleLabel(user.role).charAt(0)}
      </div>

      <div>
        <h3 style={{ margin: 0, fontSize: "16px" }}>{user.nombre}</h3>
        <span
          style={{
            fontSize: "12px",
            padding: "2px 8px",
            borderRadius: "12px",
            backgroundColor: getRoleBadgeColor(user.role),
            color: "white",
          }}
        >
          {getRoleLabel(user.role)}
        </span>
        {user.lineaAsignada && (
          <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: "#666" }}>
            Linea: {user.lineaAsignada}
          </p>
        )}
      </div>
    </div>
  );
};

export default mp_UserBadge;
