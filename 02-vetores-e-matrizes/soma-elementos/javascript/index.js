const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite a quantidade de elementos: ", (N) => {
  N = parseInt(N);
  let vetor = [];
  let soma = 0;
  let indice = 0;

  function lerElemento() {
    if (indice < N) {
      readline.question(
        `Digite o elemento ${indice + 1}: `,
        (valor) => {
          let numero = parseInt(valor);
          vetor.push(numero);
          soma += numero;
          indice++;
          lerElemento();
        }
      );
    } else {
      console.log(`Soma dos elementos: ${soma}`);
      readline.close();
    }
  }

  lerElemento();
});
