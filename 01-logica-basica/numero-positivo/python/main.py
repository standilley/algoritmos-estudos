contador = 0

for i in range(1, 6):
    x = float(input(f"Digite o {i}º número: "))
    
    if x > 0:
        contador += 1

print(f"\nQuantidade de números positivos: {contador}")