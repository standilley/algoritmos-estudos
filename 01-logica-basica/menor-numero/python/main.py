def menor_numero(numeros):
    if not numeros:
        raise ValueError("A lista está vazia")

    menor = numeros[0]

    for i in range(1, len(numeros)):
        if numeros[i] < menor:
            menor = numeros[i]

    return menor


if __name__ == "__main__":
    valores = [3, 10, 5, 7, 20, 4]
    resultado = menor_numero(valores)
    print(f"Menor número: {resultado}")