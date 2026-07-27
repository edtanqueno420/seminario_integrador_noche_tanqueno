const lotes: number[] = [100, 200, 300, 400];

lotes.forEach((l) => console.log(`Lote procesado: ${l * 10} piezas`));

const lotesProcesados: number[] = lotes.map((l) => l * 2);
console.log(lotesProcesados);

const codigosPieza: string[] = ["  BRJN-4400 ", "PISTON-2026-A", " CRANK-8800"];

const codigosLimpios: string[] = codigosPieza.map((c) => c.trim().toLowerCase());
console.log(codigosLimpios);

codigosLimpios.forEach((c, i) => console.log(`Pieza ${i + 1}: ${c}`));

const costosUnitarios: number[] = [100, 250, 80, 500];

const costosConMargen: number[] = costosUnitarios.map(
  (c) => Number((c * 1.15).toFixed(2))
);

console.log(costosConMargen);

costosConMargen.forEach((costo, i) => {
  console.log(`Pieza ${i + 1}: $${costo}`);
});
