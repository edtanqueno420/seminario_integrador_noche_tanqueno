function crearEtiquetaPieza(codigo: string, mayusculas?: boolean): string {
  if (mayusculas) {
    return `[${codigo.toUpperCase()}]`;
  }
  return `[${codigo}]`;
}

console.log(crearEtiquetaPieza("brjn-4400"));
console.log(crearEtiquetaPieza("brjn-4400", true));

function repetirLote(codigo: string, veces: number = 3): string {
  return codigo.repeat(veces);
}

console.log(repetirLote("L"));
console.log(repetirLote("L", 5));

type NivelLog = "info" | "warning" | "error";

function logProduccion(
  mensaje: string,
  nivel: NivelLog = "info",
  timestamp?: boolean
): string {
  const prefijos: Record<NivelLog, string> = {
    info:  "INFO ",
    warning:  "WARNING ",
    error: "ERROR",
  };

  const hora = timestamp ? ` [${new Date().toISOString()}]` : "";
  return `${prefijos[nivel]}${hora}: ${mensaje}`;
}

console.log(logProduccion("Línea de producción iniciada"));

console.log(logProduccion("Temperatura elevada en CNC-02", "warning"));

console.log(logProduccion("Falla en sensor de presión", "error", true));
