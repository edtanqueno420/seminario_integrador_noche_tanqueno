// tipos-string.ts
const nombreAnimal:string = "Tyrone";
const raza:string = "Rodwailer";
const dueño :string = "Tjota";
const color:string = "Cafe";

console.log(nombreAnimal);
console.log(raza);
console.log(dueño);
console.log(color);

// Métodos de string funcionan igual que en JS
console.log(nombreAnimal.toUpperCase());      // ANA GARCÍA
console.log(nombreAnimal.toLowerCase());      // ana garcía
console.log(nombreAnimal.includes("García"));// true
console.log(nombreAnimal.split(","));    // ["Ana", "García"]   