const turno: number = 3;

switch (turno) {
  case 1:
    console.log("Turno Mañana");
    break;
  case 2:
    console.log("Turno Tarde");
    break;
  case 3:
    console.log("Turno Noche");
    break;
  case 4:
    console.log("Turno Especial");
    break;
  case 5:
    console.log("Turno Fin de Semana");
    break;
  case 6:
  case 7:
    console.log("Mantenimiento programado");
    break;
  default:
    console.log("Turno no válido");
}

type EstadoOrden = "pendiente" | "en_proceso" | "completada" | "cancelada";

function mensajeOrden(estado: EstadoOrden): string {
  switch (estado) {
    case "pendiente":
      return "La orden está esperando材料";
    case "en_proceso":
      return "La orden está en línea de producción";
    case "completada":
      return "La orden fue completada exitosamente";
    case "cancelada":
      return "La orden fue cancelada";
  }
}

console.log(mensajeOrden("en_proceso"));
console.log(mensajeOrden("completada"));
