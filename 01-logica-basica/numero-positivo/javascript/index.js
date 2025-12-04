const prompt = require("prompt-sync")();

let contador = 0;

for (let i = 1; i <= 5; i++) {
  let x = Number(prompt(`Digite o ${i}º número: `));

  if (x > 0) {
    contador++;
  }
}

console.log(`\nQuantidade de números positivos: ${contador}`);
