const maquinaOperativa: boolean = true;
const enMantenimiento: boolean = false;

console.log(maquinaOperativa);
console.log(!maquinaOperativa);
console.log(maquinaOperativa && enMantenimiento);
console.log(maquinaOperativa || enMantenimiento);

const horasAcumuladas = 4500;
const requiereService: boolean = horasAcumuladas >= 4000;
console.log(`¿Requiere service? ${requiereService}`);
