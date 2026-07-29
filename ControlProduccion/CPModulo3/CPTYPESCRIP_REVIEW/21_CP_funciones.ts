function calcularProduccion(piezas: number, horas: number): number {
  return piezas * horas;
}

function generarCodigoPieza(modelo: string, serie: number): string {
  return `PZ-${modelo}-${serie}`;
}

console.log(calcularProduccion(42, 8));
console.log(generarCodigoPieza("BRJN", 4400));
