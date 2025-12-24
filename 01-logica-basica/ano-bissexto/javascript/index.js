const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite um ano: ", (ano) => {
  ano = parseInt(ano);

  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0)
    console.log("Ano bissexto");
  else console.log("Ano não bissexto");

  readline.close();
});
