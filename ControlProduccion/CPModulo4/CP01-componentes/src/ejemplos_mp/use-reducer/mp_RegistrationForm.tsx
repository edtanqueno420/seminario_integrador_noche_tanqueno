import React, { useReducer } from "react";

interface FormState {
  step: number;
  datos: {
    nombre: string;
    apellido: string;
    numeroOperario: string;
    certificacion: string;
    lineaAsignada: string;
    telefono: string;
  };
}

type FormAction =
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "UPDATE_FIELD"; field: string; value: string }
  | { type: "RESET" };

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: Math.min(state.step + 1, 3) };
    case "PREV_STEP":
      return { ...state, step: Math.max(state.step - 1, 1) };
    case "UPDATE_FIELD":
      return {
        ...state,
        datos: { ...state.datos, [action.field]: action.value },
      };
    case "RESET":
      return {
        step: 1,
        datos: {
          nombre: "",
          apellido: "",
          numeroOperario: "",
          certificacion: "",
          lineaAsignada: "",
          telefono: "",
        },
      };
    default:
      return state;
  }
};

const mp_RegistrationForm: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, {
    step: 1,
    datos: {
      nombre: "",
      apellido: "",
      numeroOperario: "",
      certificacion: "",
      lineaAsignada: "",
      telefono: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    dispatch({ type: "UPDATE_FIELD", field: e.target.name, value: e.target.value });
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box" as const,
  };

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return (
          <div>
            <h3>Paso 1: Datos Personales</h3>
            <div style={{ marginBottom: "12px" }}>
              <label style={{ display: "block", marginBottom: "4px" }}>Nombre:</label>
              <input type="text" name="nombre" value={state.datos.nombre} onChange={handleChange} style={inputStyle} />
            </div>
            <div style={{ marginBottom: "12px" }}>
              <label style={{ display: "block", marginBottom: "4px" }}>Apellido:</label>
              <input type="text" name="apellido" value={state.datos.apellido} onChange={handleChange} style={inputStyle} />
            </div>
            <div style={{ marginBottom: "12px" }}>
              <label style={{ display: "block", marginBottom: "4px" }}>Telefono:</label>
              <input type="tel" name="telefono" value={state.datos.telefono} onChange={handleChange} style={inputStyle} />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>Paso 2: Habilidades y Certificaciones</h3>
            <div style={{ marginBottom: "12px" }}>
              <label style={{ display: "block", marginBottom: "4px" }}>Numero de Operario:</label>
              <input type="text" name="numeroOperario" value={state.datos.numeroOperario} onChange={handleChange} placeholder="OP-2024-XXX" style={inputStyle} />
            </div>
            <div style={{ marginBottom: "12px" }}>
              <label style={{ display: "block", marginBottom: "4px" }}>Certificacion:</label>
              <select name="certificacion" value={state.datos.certificacion} onChange={handleChange} style={inputStyle}>
                <option value="">Seleccionar...</option>
                <option value="basica">Basica</option>
                <option value="intermedia">Intermedia</option>
                <option value="avanzada">Avanzada</option>
                <option value="especialista">Especialista</option>
              </select>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3>Paso 3: Asignacion de Linea de Produccion</h3>
            <div style={{ marginBottom: "12px" }}>
              <label style={{ display: "block", marginBottom: "4px" }}>Linea Asignada:</label>
              <select name="lineaAsignada" value={state.datos.lineaAsignada} onChange={handleChange} style={inputStyle}>
                <option value="">Seleccionar linea...</option>
                <option value="Linea 1 - Ensamble">Linea 1 - Ensamble</option>
                <option value="Linea 2 - Soldadura">Linea 2 - Soldadura</option>
                <option value="Linea 3 - Pintura">Linea 3 - Pintura</option>
                <option value="Linea 4 - Control Calidad">Linea 4 - Control Calidad</option>
                <option value="Linea 5 - Empaque">Linea 5 - Empaque</option>
              </select>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h3>Registro Completado</h3>
            <p><strong>Nombre:</strong> {state.datos.nombre} {state.datos.apellido}</p>
            <p><strong>Numero de Operario:</strong> {state.datos.numeroOperario}</p>
            <p><strong>Certificacion:</strong> {state.datos.certificacion}</p>
            <p><strong>Linea Asignada:</strong> {state.datos.lineaAsignada}</p>
            <p><strong>Telefono:</strong> {state.datos.telefono}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: "20px", border: "2px solid #333", borderRadius: "10px", maxWidth: "500px" }}>
      <h2>Registro de Operario - Formulario Multi-Paso</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "20px" }}>
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: state.step >= s ? "#2980b9" : "#ecf0f1",
              color: state.step >= s ? "white" : "#333",
              fontWeight: "bold",
            }}
          >
            {s}
          </div>
        ))}
      </div>

      <div style={{ minHeight: "200px", marginBottom: "20px" }}>{renderStep()}</div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={() => dispatch({ type: "PREV_STEP" })}
          disabled={state.step === 1}
          style={{
            padding: "10px 20px",
            opacity: state.step === 1 ? 0.5 : 1,
            cursor: state.step === 1 ? "not-allowed" : "pointer",
          }}
        >
          Anterior
        </button>
        {state.step < 4 ? (
          <button
            onClick={() => dispatch({ type: "NEXT_STEP" })}
            style={{ padding: "10px 20px", backgroundColor: "#27ae60", color: "white", border: "none", borderRadius: "4px" }}
          >
            Siguiente
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "RESET" })}
            style={{ padding: "10px 20px", backgroundColor: "#f39c12", color: "white", border: "none", borderRadius: "4px" }}
          >
            Nuevo Registro
          </button>
        )}
      </div>
    </div>
  );
};

export default mp_RegistrationForm;
