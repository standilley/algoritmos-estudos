L = int(input("Digite a quantidade de linhas: "))
C = int(input("Digite a quantidade de colunas: "))

matriz = []

for i in range(L):
    soma_linha = 0
    linha = []
    for j in range(C):
        valor = int(input(f"Digite o valor da posição [{i + 1},{j + 1}]: "))
        linha.append(valor)
        soma_linha += valor
    matriz.append(linha)
    print(f"Soma da linha {i + 1}: {soma_linha}")
