N = int(input("Digite a quantidade de elementos: "))

vetor = []

for i in range(N):
    valor = int(input(f"Digite o elemento {i + 1}: "))
    vetor.append(valor)

maior = vetor[0]

for valor in vetor:
    if valor > maior:
        maior = valor

print(f"Maior elemento do vetor: {maior}")
