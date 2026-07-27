function procesarDatoProduccion(valor: unknown): string {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }

  if (typeof valor === "number") {
    return valor.toFixed(2);
  }

  if (typeof valor === "boolean") {
    return valor ? "Activa" : "Inactiva";
  }

  return "Tipo de dato no reconocido";
}

console.log(procesarDatoProduccion("maquina-01"));
console.log(procesarDatoProduccion(3.14159));
console.log(procesarDatoProduccion(true));
console.log(procesarDatoProduccion(null));
