const maquinas: Record<string, number> = {
  CNC_01: 8500,
  CNC_02: 6200,
  Torno_01: 11000,
};

for (const maquina in maquinas) {
  console.log(`${maquina} → horas de uso: ${maquinas[maquina]}`);
}

const configPlanta = {
  planta: "Planta Norte",
  capacidadDiaria: 5000,
  turnos: 3,
  maxOperarios: 120,
};

console.log("=== Configuración de Planta ===");
for (const clave in configPlanta) {
  const valor = configPlanta[clave as keyof typeof configPlanta];
  console.log(`${clave.padEnd(18)}: ${valor}`);
}

const eficienciasMaquinas: Record<string, number> = {
  CNC_01: 92,
  CNC_02: 78,
  Torno_01: 88,
  Torno_02: 65,
};
let aprobadas = 0;
for (const maquina in eficienciasMaquinas) {
    if (eficienciasMaquinas[maquina] >= 80) {
        aprobadas++;
        console.log(`${maquina}: ${eficienciasMaquinas[maquina]}% — Eficiencia aprobada`);
    }
    console.log(`Máquinas con eficiencia aprobada: ${aprobadas}`);
}
