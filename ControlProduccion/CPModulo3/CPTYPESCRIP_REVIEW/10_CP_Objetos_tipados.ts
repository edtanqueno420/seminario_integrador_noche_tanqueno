const ordenProduccion: { codigo: string; cantidad: number; activa: boolean } = {
  codigo: "OP-2026-001",
  cantidad: 1500,
  activa: true
};

console.log(ordenProduccion.codigo);
console.log(ordenProduccion.cantidad);

const maquina: { modelo: string; horasVida: number; horasService?: number } = {
  modelo:  "CNC-FANUC-3000",
  horasVida: 12000
};

console.log(maquina.horasService);
