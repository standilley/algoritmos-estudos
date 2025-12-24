const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite a quantidade de elementos: ", (N) => {
  N = parseInt(N);
  let vetor = [];
  let indice = 0;

  function lerElemento() {
    if (indice < N) {
      readline.question(
        `Digite o elemento ${indice + 1}: `,
        (valor) => {
          vetor.push(parseInt(valor));
          indice++;
          lerElemento();
        }
      );
    } else {
      let maior = vetor[0];

      for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) maior = vetor[i];
      }

      console.log(`Maior elemento do vetor: ${maior}`);
      readline.close();
    }
  }

  lerElemento();
});
