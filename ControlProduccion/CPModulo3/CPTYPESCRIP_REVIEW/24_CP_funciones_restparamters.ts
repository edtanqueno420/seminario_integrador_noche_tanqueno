function sumarPiezas(...cantidades: number[]): number {
  return cantidades.reduce((acc, n) => acc + n, 0);
}

console.log(sumarPiezas(100, 200, 300));
console.log(sumarPiezas(50, 150, 250, 350));
console.log(sumarPiezas());

function construirRutaProduccion(base: string, ...segmentos: string[]): string {
  return [base, ...segmentos].join("/");
}

console.log(construirRutaProduccion("planta/norte", "linea-01", "cnc", "lote-4400"));

function registrarEventoPlanta(tipo: string, ...detalles: string[]): void {
  const timestamp = new Date().toLocaleTimeString();
  const cuerpo = detalles.length > 0 ? ` | ${detalles.join(" · ")}` : "";
  console.log(`[${timestamp}] ${tipo.toUpperCase()}${cuerpo}`);
}

registrarEventoPlanta("inicio");

registrarEventoPlanta("arranque", "máquina: CNC-01", "turno: noche");

registrarEventoPlanta("alarma", "línea: 02", "código: E-503", "parada: sí");
