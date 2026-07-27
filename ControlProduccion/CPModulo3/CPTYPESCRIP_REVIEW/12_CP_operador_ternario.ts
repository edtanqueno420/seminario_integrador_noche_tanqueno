const horasOperacion: number = 20;

let estadoMaquina: string;
if (horasOperacion >= 16) {
  estadoMaquina = "Operativa";
} else {
  estadoMaquina = "Detenida";
}

const estadoMaquina2: string = horasOperacion >= 16 ? "Operativa" : "Detenida";

console.log(estadoMaquina);
console.log(estadoMaquina2);

const eficiencia: number = 85.5;
const clasificacion = eficiencia >= 80 ? "Óptima" : "Requiere ajuste";
console.log(`Eficiencia: ${eficiencia}% — ${clasificacion}`);

const resultado1 =
  eficiencia >= 95 ? "Excelente" :
  eficiencia >= 80 ? "Buena"       :
  eficiencia >= 60 ? "Regular"      : "Crítica";

console.log(resultado1);
