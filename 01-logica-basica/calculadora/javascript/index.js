const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite o primeiro número: ", (n1) => {
  readline.question("Digite o segundo número: ", (n2) => {
    readline.question(
      "Escolha a operação (+, -, *, /): ",
      (operacao) => {
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);
        let resultado;

        switch (operacao) {
          case "+":
            resultado = n1 + n2;
            break;
          case "-":
            resultado = n1 - n2;
            break;
          case "*":
            resultado = n1 * n2;
            break;
          case "/":
            if (n2 === 0) {
              console.log("Erro: divisão por zero");
              readline.close();
              return;
            }
            resultado = n1 / n2;
            break;
          default:
            console.log("Operação inválida");
            readline.close();
            return;
        }

        console.log(`Resultado: ${resultado}`);
        readline.close();
      }
    );
  });
});
