const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question(
  'Digite a quantidade de elementos (vetor ORDENADO): ',
  (N) => {
    N = parseInt(N)
    let vetor = []
    let idx = 0

    function lerElemento() {
      if (idx < N) {
        readline.question(`Digite o elemento ${idx + 1}: `, (val) => {
          vetor.push(parseInt(val))
          idx++
          lerElemento()
        })
      } else {
        readline.question('Digite o valor a ser buscado: ', (chave) => {
          chave = parseInt(chave)

          let inicio = 0
          let fim = vetor.length - 1
          let posicao = -1

          while (inicio <= fim) {
            let meio = Math.floor((inicio + fim) / 2)

            if (vetor[meio] === chave) {
              posicao = meio
              break
            } else if (chave < vetor[meio]) {
              fim = meio - 1
            } else {
              inicio = meio + 1
            }
          }

          if (posicao !== -1)
            console.log(`Encontrado na posição ${posicao + 1}`)
          else console.log('Não encontrado')

          readline.close()
        })
      }
    }

    lerElemento()
  }
)
