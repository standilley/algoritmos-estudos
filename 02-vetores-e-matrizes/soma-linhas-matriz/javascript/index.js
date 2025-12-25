const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite a quantidade de linhas: ", (L) => {
  readline.question("Digite a quantidade de colunas: ", (C) => {
    L = parseInt(L);
    C = parseInt(C);

    let matriz = [];
    let i = 0;

    function lerLinha() {
      if (i < L) {
        let j = 0;
        let somaLinha = 0;
        matriz[i] = [];

        function lerColuna() {
          if (j < C) {
            readline.question(
              `Digite o valor da posição [${i + 1},${j + 1}]: `,
              (valor) => {
                let num = parseInt(valor);
                matriz[i][j] = num;
                somaLinha += num;
                j++;
                lerColuna();
              }
            );
          } else {
            console.log(`Soma da linha ${i + 1}: ${somaLinha}`);
            i++;
            lerLinha();
          }
        }

        lerColuna();
      } else {
        readline.close();
      }
    }

    lerLinha();
  });
});
