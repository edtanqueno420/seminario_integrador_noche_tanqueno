const codigoPieza: string = "BRJN-4400-T";
const etiquetaPieza: string = `Pieza: ${codigoPieza}`;
const vacia: string = "";
const delimitador: string = '-';

console.log(codigoPieza);
console.log(etiquetaPieza);
console.log(`La cadena vacía tiene longitud: ${vacia.length}`);

console.log(codigoPieza.toUpperCase());
console.log(codigoPieza.toLowerCase());
console.log(codigoPieza.includes("4400"));
console.log(codigoPieza.split("-"));
