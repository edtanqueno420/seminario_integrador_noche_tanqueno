const piezasEnCola: number[] = [64, 128, -1, 256, 1024, -1, 32];

console.log("=== Con continue: piezas defectuosas saltadas ===");
for (const pieza of piezasEnCola) {
  if (pieza < 0) {
    console.log("Pieza defectuosa — ignorada");
    continue;
  }
  console.log(`Procesando pieza de ${pieza} mm`);
}

console.log("=== Con break: deteniendo ante defecto crítico ===");
for (const pieza of piezasEnCola) {
  if (pieza < 0) {
    console.log("Defecto crítico detectado — deteniendo línea");
    break;
  }
  console.log(`Procesando pieza de ${pieza} mm`);
}
