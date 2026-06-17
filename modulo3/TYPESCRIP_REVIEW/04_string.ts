// tipos-string.ts
const nombreAlumno:    string = "Ana García";
const saludo:    string = `Hola, ${nombre}`;
const vacia:     string = "";
const comillas:  string = 'También con comillas simples';

console.log(nombre);
console.log(saludo);
console.log(`La cadena vacía tiene longitud: ${vacia.length}`);

// Métodos de string funcionan igual que en JS
console.log(nombre.toUpperCase());      // ANA GARCÍA
console.log(nombreAlumno.toLowerCase());      // ana garcía
console.log(nombreAlumno.includes("García")); // true
console.log(nombreAlumno.split(", "));         // ["Ana", "García"]