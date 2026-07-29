import React from "react";

interface UserGreetingProps {
  name: string;
  role: "operario" | "supervisor" | "administrador";
}

const mp_UserGreeting: React.FC<UserGreetingProps> = ({ name, role }) => {
  const getRoleLabel = (r: string) => {
    switch (r) {
      case "operario":
        return "Operario";
      case "supervisor":
        return "Supervisor";
      case "administrador":
        return "Administrador";
      default:
        return r;
    }
  };

  return (
    <div style={{ padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Bienvenido al Sistema de Control de Produccion</h2>
      <p>
        Hola, <strong>{name}</strong>. Tu rol es: <em>{getRoleLabel(role)}</em>.
      </p>
    </div>
  );
};

export default mp_UserGreeting;
