const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite o valor inicial: ", (inicio) => {
  readline.question("Digite o valor final: ", (fim) => {
    inicio = parseInt(inicio);
    fim = parseInt(fim);

    while (inicio <= fim) {
      console.log(inicio);
      inicio++;
    }

    readline.close();
  });
});
