function maiorNumero(numeros) {
  if (!numeros || numeros.length === 0) {
    throw new Error("O array está vazio");
  }

  let maior = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }

  return maior;
}

const valores = [3, 10, 5, 7, 20, 4];
const resultado = maiorNumero(valores);
console.log(`Maior número: ${resultado}`);
