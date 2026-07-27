type EstadoMaquina = "operativa" | "requiere_mantenimiento" | "fuera_de_linea";

interface Equipo {
  nombre: string;
  estado: EstadoMaquina;
  horasUso: number;
}

const lineaProduccion: Equipo[] = [
  { nombre: "CNC-01", estado: "operativa",             horasUso: 8500 },
  { nombre: "CNC-02", estado: "requiere_mantenimiento", horasUso: 11200 },
  { nombre: "Torno-01", estado: "fuera_de_linea",       horasUso: 0 },
  { nombre: "Soldadora-01", estado: "operativa",        horasUso: 3200 },
];

console.log("=== Diagnóstico de Planta ===");
let fueraDeLinea = 0;

for (const equipo of lineaProduccion) {
  if (equipo.estado === "fuera_de_linea") fueraDeLinea++;

  let icono: string;
  switch (equipo.estado) {
    case "operativa":             icono = "🟢"; break;
    case "requiere_mantenimiento": icono = "🟡"; break;
    case "fuera_de_linea":       icono = "🔴"; break;
    default:                     icono = "⚪";
  }

  let diagnostico: string;
  if (equipo.estado === "operativa") {
    if (equipo.horasUso < 5000) {
      diagnostico = `${icono} ${equipo.nombre}: óptimo (${equipo.horasUso}hs)`;
    } else {
      diagnostico = `${icono} ${equipo.nombre}: requiere service pronto (${equipo.horasUso}hs)`;
    }
  } else {
    diagnostico = `${icono} ${equipo.nombre}: requiere atención (${equipo.estado})`;
  }

  console.log(diagnostico);
}

let alerta = fueraDeLinea;
while (alerta > 0) {
  console.log(`⚠ Quedan ${alerta} equipo(s) fuera de línea — notificando mantenimiento...`);
  alerta--;
}
console.log(`Resumen: ${fueraDeLinea}/${lineaProduccion.length} fuera de línea`);
