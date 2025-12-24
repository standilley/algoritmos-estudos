n1 = float(input("Digite o primeiro número: "))
n2 = float(input("Digite o segundo número: "))

operacao = input("Escolha a operação (+, -, *, /): ")

if operacao == "+":
    resultado = n1 + n2
elif operacao == "-":
    resultado = n1 - n2
elif operacao == "*":
    resultado = n1 * n2
elif operacao == "/":
    if n2 == 0:
        print("Erro: divisão por zero")
        exit()
    resultado = n1 / n2
else:
    print("Operação inválida")
    exit()

print(f"Resultado: {resultado}")
