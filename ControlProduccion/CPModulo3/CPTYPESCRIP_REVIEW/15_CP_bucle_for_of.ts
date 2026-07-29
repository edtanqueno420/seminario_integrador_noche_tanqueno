const operarios: string[] = ["Carlos", "María", "Pedro", "Lucía"];
const horasTrabajadas: number[] = [8, 7.5, 8, 6.5];

for (const operario of operarios) {
  console.log(`Operario en línea: ${operario}!`);
}

let horasTotales: number = 0;
for (const horas of horasTrabajadas) {
  horasTotales += horas;
}
console.log(`Horas totales del turno: ${horasTotales}hs`);

for (const [indice, operario] of operarios.entries()) {
  console.log(`${indice + 1}. ${operario}`);
}

const temperaturas: number[] = [65, 72, 78, 85, 68, 80];
let tempMaxima = 0;

for (const temp of temperaturas) {
  if (temp > tempMaxima) {
    tempMaxima = temp;
  }
  console.log(`Temperatura máxima registrada: ${tempMaxima}`);
}
