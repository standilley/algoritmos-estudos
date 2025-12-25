L = int(input("Digite a quantidade de linhas: "))
C = int(input("Digite a quantidade de colunas: "))

matriz = []

# Leitura da matriz
for i in range(L):
    linha = []
    for j in range(C):
        valor = int(input(f"Digite o valor da posição [{i + 1},{j + 1}]: "))
        linha.append(valor)
    matriz.append(linha)

# Soma das colunas
for j in range(C):
    soma_coluna = 0
    for i in range(L):
        soma_coluna += matriz[i][j]
    print(f"Soma da coluna {j + 1}: {soma_coluna}")
