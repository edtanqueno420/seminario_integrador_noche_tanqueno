import React from "react";

interface WelcomeBannerProps {
  title?: string;
  subtitle?: string;
}

const mp_WelcomeBanner: React.FC<WelcomeBannerProps> = ({
  title = "Control de Produccion",
  subtitle = "Panel principal",
}) => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1e3a5f, #2980b9)",
        color: "white",
        padding: "24px",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <h1>Bienvenido a {title}</h1>
      <p style={{ fontSize: "18px", margin: "8px 0" }}>
        {subtitle}
      </p>
    </div>
  );
};

export default mp_WelcomeBanner;
