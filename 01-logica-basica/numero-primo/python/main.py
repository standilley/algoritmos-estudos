# versão simples 
N = int(input("Digite um número: "))

divisores = 0

for i in range(1, N + 1):
    if N % i == 0:
        divisores += 1

if divisores == 2:
    print(f"{N} é primo.")
else:
    print(f"{N} NÃO é primo.")

# Versão OTIMIZADA (√N + só ímpares)

import math

def eh_primo(n):
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False

    limite = int(math.sqrt(n))

    for i in range(3, limite + 1, 2):
        if n % i == 0:
            return False

    return True

N = int(input("Digite um número: "))

if eh_primo(N):
    print(f"{N} é primo.")
else:
    print(f"{N} NÃO é primo.")
