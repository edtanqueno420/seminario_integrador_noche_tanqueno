// Concepto puro
const puertos: Record<string, number> = {
  HTTP: 80,
  HTTPS: 443,
  SSH: 22,
};

for (const servicio in puertos) {
  console.log(`${servicio} → puerto ${puertos[servicio]}`);
}
// HTTP → puerto 80, HTTPS → puerto 443, SSH → puerto 22

const config = {
  host: "localhost",
  port: 8080,
  debug: true,
  maxConexiones: 100,
};

console.log("=== Configuración activa ===");
for (const clave in config) {
  const valor = config[clave as keyof typeof config];
  console.log(`${clave.padEnd(15)}: ${valor}`);
}

const notas: Record<string, number> = {
  mate: 85,
  fisica: 70,
  quimica: 95,
  historia:60
};
let acumulador = 0;
for (const nota in notas) {
    if (notas[nota] >= 70) {
        acumulador ++;
        console.log(`La nota de ${nota} es ${notas[nota]} y es aprobatoria`);
    }
    console.log(`La cantidad de materias aprobadas es :${acumulador}`);
  
}