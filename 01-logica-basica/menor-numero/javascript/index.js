function menorNumero(numeros) {
  if (!numeros || numeros.length === 0) {
    throw new Error("O array está vazio");
  }

  let menor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }

  return menor;
}

const valores = [3, 10, 5, 7, 20, 4];
const resultado = menorNumero(valores);
console.log(`menor número: ${resultado}`);
