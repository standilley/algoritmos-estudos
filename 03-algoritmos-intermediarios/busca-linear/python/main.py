N = int(input("Digite a quantidade de elementos: "))

vetor = []

for i in range(N):
    vetor.append(int(input(f"Digite o elemento {i + 1}: ")))

chave = int(input("Digite o valor a ser buscado: "))

encontrado = False

for i in range(N):
    if vetor[i] == chave:
        print(f"Valor encontrado na posição {i + 1}")
        encontrado = True
        break

if not encontrado:
    print("Valor não encontrado")

