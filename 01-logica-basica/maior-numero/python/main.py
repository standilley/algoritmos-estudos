def maior_numero(numeros):
    if not numeros:
        raise ValueError("A lista está vazia")

    maior = numeros[0]

    for i in range(1, len(numeros)):
        if numeros[i] > maior:
            maior = numeros[i]

    return maior


if __name__ == "__main__":
    valores = [3, 10, 5, 7, 20, 4]
    resultado = maior_numero(valores)
    print(f"Maior número: {resultado}")