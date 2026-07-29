function inspeccionarPieza(dato: string | number | boolean): string {
  if (typeof dato === "string") {
    return `Código de pieza: ${dato.toUpperCase()}`;
  }

  if (typeof dato === "number") {
    return `Medida al cuadrado: ${dato ** 2}`;
  }

  return dato ? "Pieza aprobada" : "Pieza rechazada";
}

console.log(inspeccionarPieza("brjn-4400"));
console.log(inspeccionarPieza(5));
console.log(inspeccionarPieza(true));

function verificarOperario(nombre: string | null): string {
  if (nombre === null) {
    return "Sin asignar";
  }
  return nombre.trim().toUpperCase();
}

console.log(verificarOperario("  Juan Pérez  "));
console.log(verificarOperario(null));
