let materiaPrima = 1024;
let lote = 0;

while (materiaPrima > 0) {
  const cantidad = materiaPrima > 256 ? 256 : materiaPrima;
  lote++;
  materiaPrima -= cantidad;
  console.log(`Lote ${lote}: ${cantidad} kg (quedan ${materiaPrima})`);
}

let intentosArranque = 0;
let maquinaEncendida = false;

do {
  intentosArranque++;
  console.log(`Intento de arranque #${intentosArranque}...`);
  if (intentosArranque === 3) maquinaEncendida = true;
} while (!maquinaEncendida && intentosArranque < 5);

console.log(maquinaEncendida ? `Máquina encendida en ${intentosArranque} intentos` : "Fallo en arranque");
