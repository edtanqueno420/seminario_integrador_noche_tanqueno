for (let i = 1; i <= 5; i++) {
  console.log(`Ciclo de producción ${i}`);
}

const estaciones: string[] = ["Corte", "Soldadura", "Pintura", "Ensamble"];

for (let i = 0; i < estaciones.length; i++) {
  console.log(`${i + 1}. ${estaciones[i]}`);
}

for (let i = estaciones.length - 1; i >= 0; i--) {
  console.log(estaciones[i]);
}

function tablaProduccion(horas: number): void {
  console.log(`\n--- Producción en ${horas} horas ---`);
  for (let i = 1; i <= horas; i++) {
    const piezasEstimadas: number = 42 * i;
    console.log(`  Hora ${i.toString().padStart(2)}: ${piezasEstimadas.toString().padStart(4)} piezas`);
  }
}

tablaProduccion(5);
