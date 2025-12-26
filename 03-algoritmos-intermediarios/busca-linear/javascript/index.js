const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question('Digite a quantidade de elementos: ', (N) => {
  N = parseInt(N)
  let vetor = []
  let indice = 0

  function lerElemento() {
    if (indice < N) {
      readline.question(`Digite o elemento ${indice + 1}: `, (valor) => {
        vetor.push(parseInt(valor))
        indice++
        lerElemento()
      })
    } else {
      readline.question('Digite o valor a ser buscado: ', (chave) => {
        chave = parseInt(chave)
        let encontrado = false

        for (let i = 0; i < vetor.length; i++) {
          if (vetor[i] === chave) {
            console.log(`Valor encontrado na posição ${i + 1}`)
            encontrado = true
            break
          }
        }

        if (!encontrado) console.log('Valor não encontrado')

        readline.close()
      })
    }
  }

  lerElemento()
})
