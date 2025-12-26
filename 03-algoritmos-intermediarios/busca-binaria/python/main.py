N = int(input("Digite a quantidade de elementos (vetor ORDENADO): "))

vetor = []
for i in range(N):
    vetor.append(int(input(f"Digite o elemento {i + 1}: ")))

chave = int(input("Digite o valor a ser buscado: "))

inicio = 0
fim = N - 1
posicao = -1

while inicio <= fim:
    meio = (inicio + fim) // 2

    if vetor[meio] == chave:
        posicao = meio
        break
    elif chave < vetor[meio]:
        fim = meio - 1
    else:
        inicio = meio + 1

if posicao != -1:
    print(f"Encontrado na posição {posicao + 1}")
else:
    print("Não encontrado")
