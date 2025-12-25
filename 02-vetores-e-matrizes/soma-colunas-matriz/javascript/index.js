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
        matriz[i] = [];

        function lerColuna() {
          if (j < C) {
            readline.question(
              `Digite o valor da posição [${i + 1},${j + 1}]: `,
              (valor) => {
                matriz[i][j] = parseInt(valor);
                j++;
                lerColuna();
              }
            );
          } else {
            i++;
            lerLinha();
          }
        }

        lerColuna();
      } else {
        // Soma das colunas
        for (let j = 0; j < C; j++) {
          let somaColuna = 0;
          for (let i = 0; i < L; i++) {
            somaColuna += matriz[i][j];
          }
          console.log(`Soma da coluna ${j + 1}: ${somaColuna}`);
        }
        readline.close();
      }
    }

    lerLinha();
  });
});
