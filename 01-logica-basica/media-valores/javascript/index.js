const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite a quantidade de valores: ", (N) => {
  N = parseInt(N);
  let soma = 0;
  let contador = 1;

  function lerValor() {
    if (contador <= N) {
      readline.question(
        `Digite o valor ${contador}: `,
        (valor) => {
          soma += parseFloat(valor);
          contador++;
          lerValor();
        }
      );
    } else {
      let media = soma / N;
      console.log(`Média dos valores: ${media.toFixed(2)}`);
      readline.close();
    }
  }

  lerValor();
});
