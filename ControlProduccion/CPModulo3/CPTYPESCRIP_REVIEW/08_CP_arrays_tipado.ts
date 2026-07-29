const piezas: string[] = ["PISTON", "BIELA", "CRANKSHAFT"];
const cantidades: number[] = [500, 1200, 300];
const estados: boolean[] = [true, false, true];

console.log(piezas);
console.log(piezas[0]);
console.log(piezas.length);

piezas.push("VALVULA");
console.log(piezas);

const piezasMayus = piezas.map(p => p.toUpperCase());
console.log(piezasMayus);

const cantidadesMayores = cantidades.filter(c => c >= 500);
console.log(cantidadesMayores);
