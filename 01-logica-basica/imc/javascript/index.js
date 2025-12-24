const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite o peso (kg): ", (peso) => {
  readline.question("Digite a altura (m): ", (altura) => {
    let imc = peso / (altura * altura);

    console.log(`IMC: ${imc.toFixed(2)}`);

    if (imc < 18.5) console.log("Classificação: Abaixo do peso");
    else if (imc < 25) console.log("Classificação: Peso normal");
    else if (imc < 30) console.log("Classificação: Sobrepeso");
    else console.log("Classificação: Obesidade");

    readline.close();
  });
});
