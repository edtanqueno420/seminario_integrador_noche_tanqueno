// null-undefined.ts

// En JS esto no da error, en TS sí (modo estricto)
// let nombre: string = null;    // ❌ Error

// Para permitir null hay que declararlo explícitamente
let nombre1: string | null = null;   // ✅ puede ser string o null

let nombre2: string | null = null;   // ✅ puede ser string o null

nombre1 = "Ana";
console.log(nombre1);  // "Ana"
let nombre3: string | null = null;
nombre3 = null;
console.log(nombre3);  // null

// undefined — variable declarada pero sin valor
let ciudad1: string | undefined;
console.log(ciudad1);  // undefined

ciudad1 = "Madrid";
console.log(ciudad1);  // "Madrid"