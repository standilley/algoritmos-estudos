const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Digite 1 para Celsius → Fahrenheit");
console.log("Digite 2 para Fahrenheit → Celsius");

readline.question("", (opcao) => {
  if (opcao == 1) {
    readline.question(
      "Digite a temperatura em Celsius: ",
      (celsius) => {
        let fahrenheit = (parseFloat(celsius) * 9) / 5 + 32;
        console.log(
          `Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}`
        );
        readline.close();
      }
    );
  } else if (opcao == 2) {
    readline.question(
      "Digite a temperatura em Fahrenheit: ",
      (fahrenheit) => {
        let celsius = ((parseFloat(fahrenheit) - 32) * 5) / 9;
        console.log(
          `Temperatura em Celsius: ${celsius.toFixed(2)}`
        );
        readline.close();
      }
    );
  } else {
    console.log("Opção inválida");
    readline.close();
  }
});
