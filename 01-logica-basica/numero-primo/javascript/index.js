// // versão simples
// const prompt = require("prompt-sync")();

// let N = Number(prompt("Digite um número: "));
// let divisores = 0;

// for (let i = 1; i <= N; i++) {
//   if (N % i === 0) {
//     divisores++;
//   }
// }

// if (divisores === 2) {
//   console.log(`${N} é primo.`);
// } else {
//   console.log(`${N} NÃO é primo.`);
// }

// Versão OTIMIZADA (√N + só ímpares)
const prompt = require("prompt-sync")();

function ehPrimo(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const limite = Math.floor(Math.sqrt(n));

  for (let i = 3; i <= limite; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

let N = Number(prompt("Digite um número: "));

if (ehPrimo(N)) {
  console.log(`${N} é primo.`);
} else {
  console.log(`${N} NÃO é primo.`);
}
