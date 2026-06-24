// Concepto puro
function suma(a: number, b: number): number {
  return a + b;
}

function saludar(nombre: string): string {
  return `Hola, ${nombre}`;
}

// TypeScript verifica el argumento Y el retorno
console.log(suma(3, 4));        // 7
console.log(saludar("Sofía")); // Hola, Sofía

// Error de compilación — a propósito (descoméntalo para verlo):
// suma("3", 4);  // Argument of type 'string' is not assignable to 'number'