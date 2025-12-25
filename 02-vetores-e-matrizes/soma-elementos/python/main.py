N = int(input("Digite a quantidade de elementos: "))

vetor = []
soma = 0

for i in range(N):
    valor = int(input(f"Digite o elemento {i + 1}: "))
    vetor.append(valor)
    soma += valor

print(f"Soma dos elementos: {soma}")