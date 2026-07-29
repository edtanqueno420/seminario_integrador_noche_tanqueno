// Concepto puro
const numeros: number[] = [1, 2, 3, 4];

// forEach: para "hacer algo" con cada elemento
numeros.forEach((n) => console.log(n * 10));  // 10, 20, 30, 40

// map: para CREAR una lista transformada
const dobles: number[] = numeros.map((n) => n * 2);
console.log(dobles);  // [2, 4, 6, 8]

const emails: string[] = ["  ANA@MAIL.COM ", "Luis@Mail.com", " PEPE@MAIL.COM"];

const limpios: string[] = emails.map((e) => e.trim().toLowerCase());
console.log(limpios);  // ["ana@mail.com", "luis@mail.com", "pepe@mail.com"]

// forEach para reportar, map para transformar
limpios.forEach((e, i) => console.log(`Usuario ${i + 1}: ${e}`));

const precios1: number[] = [100, 250, 80, 500];

const preciosConIVA: number[] = precios1.map(
  (n) => Number((n * 1.19).toFixed(2))
);

console.log(preciosConIVA); // [119, 297.5, 95.2, 595]

preciosConIVA.forEach((precio, i) => {
  console.log(`Producto ${i + 1}: $${precio}`);
});