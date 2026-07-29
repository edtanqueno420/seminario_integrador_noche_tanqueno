function registrarLog(mensaje: string): void {
  console.log(mensaje);
}

function lanzarParada(mensaje: string): never {
  throw new Error(mensaje);
}

function cicloInfinito(): never {
  while (true) {
  }
}

function calcularEficiencia(piezasBuena: number, piezasTotal: number) {
  return (piezasBuena / piezasTotal) * 100;
}

function dividirProduccion(total: number, operarios: number): number {
  if (operarios === 0) lanzarParada("División por cero: sin operarios asignados");
  return total / operarios;
}

type CodigoAlarma = 200 | 400 | 401 | 403 | 404 | 500;

function manejarAlarma(codigo: CodigoAlarma, datos?: string): void {
  if (codigo === 200) {
    console.log(`Operación exitosa: ${datos ?? "sin datos"}`);
    return;
  }
  procesarFalla(codigo);
}

function procesarFalla(codigo: CodigoAlarma): never {
  const mensajes: Partial<Record<CodigoAlarma, string>> = {
    400: "Parámetro inválido",
    401: "Sin permisos de operación",
    403: "Acceso denegado",
    404: "Equipo no encontrado",
    500: "Falla interna del sistema",
  };
  throw new Error(`ALARMA ${codigo}: ${mensajes[codigo] ?? "falla desconocida"}`);
}

manejarAlarma(200, "lote procesado correctamente");
