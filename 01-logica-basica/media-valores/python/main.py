N = int(input("Digite a quantidade de valores: "))

soma = 0

for i in range(1, N + 1):
    valor = float(input(f"Digite o valor {i}: "))
    soma += valor

media = soma / N
print(f"Média dos valores: {media:.2f}")
