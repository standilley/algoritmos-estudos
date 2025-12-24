N = int(input("Digite a quantidade de elementos: "))

vetor = []

for i in range(N):
    valor = int(input(f"Digite o elemento {i + 1}: "))
    vetor.append(valor)

menor = vetor[0]

for valor in vetor:
    if valor < menor:
        menor = valor

print(f"Menor elemento do vetor: {menor}")
