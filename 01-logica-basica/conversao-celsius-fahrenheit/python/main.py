print("Digite 1 para Celsius → Fahrenheit")
print("Digite 2 para Fahrenheit → Celsius")
opcao = int(input())

if opcao == 1:
    celsius = float(input("Digite a temperatura em Celsius: "))
    fahrenheit = (celsius * 9 / 5) + 32
    print(f"Temperatura em Fahrenheit: {fahrenheit:.2f}")
elif opcao == 2:
    fahrenheit = float(input("Digite a temperatura em Fahrenheit: "))
    celsius = (fahrenheit - 32) * 5 / 9
    print(f"Temperatura em Celsius: {celsius:.2f}")
else:
    print("Opção inválida")
