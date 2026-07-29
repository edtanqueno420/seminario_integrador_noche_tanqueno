type TransformadorPieza = (x: number) => number;
type PredicadoProduccion = (x: number) => boolean;

function aplicarTransformacion(n: number, fn: TransformadorPieza): number {
  return fn(n);
}

function multiplicadorProduccion(factor: number): TransformadorPieza {
  return (x) => x * factor;
}

const triplicarLote = multiplicadorProduccion(3);
const cuadradoPieza: TransformadorPieza = (x) => x * x;

console.log(aplicarTransformacion(5, triplicarLote));
console.log(aplicarTransformacion(5, cuadradoPieza));
console.log(aplicarTransformacion(5, (x) => x + 10));

function filtrarPiezas(nums: number[], condicion: PredicadoProduccion): number[] {
  return nums.filter(condicion);
}

const cantidades = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(filtrarPiezas(cantidades, (n) => n % 2 === 0));
console.log(filtrarPiezas(cantidades, (n) => n > 50));

type OrdenProduccion = { id: number; cantidad: number; cliente: string };
type ProcesadorOrden = (orden: OrdenProduccion) => OrdenProduccion;

const aplicarImpuesto: ProcesadorOrden = (o) => ({
  ...o,
  cantidad: Number((o.cantidad * 1.19).toFixed(2)),
});

const aplicarDescuentoMayoreo = (descuento: number): ProcesadorOrden =>
  (o) => ({ ...o, cantidad: Number((o.cantidad * (1 - descuento)).toFixed(2)) });

function procesarOrden(orden: OrdenProduccion, pasos: ProcesadorOrden[]): OrdenProduccion {
  return pasos.reduce((o, fn) => fn(o), orden);
}

const orden: OrdenProduccion = { id: 101, cantidad: 100, cliente: "Automotriz XYZ" };

const resultado = procesarOrden(orden, [
  aplicarDescuentoMayoreo(0.10),
  aplicarImpuesto,
]);

console.log(resultado);
