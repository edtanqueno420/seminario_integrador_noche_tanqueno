// ternario.ts

const edada: number = 20;

// Forma larga
let acceso: string;
if (edada >= 18) {
  acceso = "Permitido";
} else {
  acceso = "Denegado";
}

// Forma corta con ternario
const acceso2: string = edada >= 18 ? "Permitido" : "Denegado";

console.log(acceso);   // Permitido
console.log(acceso2);  // Permitido

// Muy útil dentro de template literals
const nota: number = 7.5;
const calificacion = nota >= 5 ? "Aprobado" : "Suspenso";
console.log(`Nota: ${nota} — ${calificacion}`);

// No anidar ternarios — difícil de leer
// ✅ Mejor usar if/else para tres o más casos
const resultado1 =
  nota >= 9 ? "Sobresaliente" :
  nota >= 7 ? "Notable"       :
  nota >= 5 ? "Aprobado"      : "Suspenso";

console.log(resultado1);  // Notable