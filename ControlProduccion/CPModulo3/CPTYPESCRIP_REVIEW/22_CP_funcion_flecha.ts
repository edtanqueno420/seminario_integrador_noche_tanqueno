function produccionHora(piezas: number): number {
  return piezas * 60;
}

const produccionHoraFlecha = (piezas: number): number => {
  return piezas * 60;
};

const produccionHoraCorto = (piezas: number): number => piezas * 60;

const timestampProduccion = (): string => new Date().toLocaleTimeString();

const duplicarLote = (lotes: number): number => lotes * 2;

console.log(produccionHora(42));
console.log(produccionHoraFlecha(42));
console.log(produccionHoraCorto(42));
console.log(duplicarLote(5));
console.log(timestampProduccion());

const limpiarCodigo = (codigo: string): string => codigo.trim();
const normalizarMayusculas = (codigo: string): string => codigo.toUpperCase();
const formatoPieza = (codigo: string): string =>
  codigo.charAt(0).toUpperCase() + codigo.slice(1);
const reemplazarEspacios = (codigo: string): string => codigo.replace(/\s+/g, "_");

function normalizarCodigoPieza(codigo: string): string {
  return reemplazarEspacios(formatoPieza(normalizarMayusculas(limpiarCodigo(codigo))));
}

const entradasCodigos = ["  brjn-4400  ", " piston-2026 ", "CRANK-8800  "];
entradasCodigos.forEach((e) => console.log(normalizarCodigoPieza(e)));
