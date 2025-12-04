Console.Write("Digite um número: ");
int numero = int.Parse(Console.ReadLine());

int fatorial = 1;

for (int i = 1; i <= numero; i++)
{
    fatorial = fatorial * i;
}

Console.WriteLine($"Fatorial de {numero} = {fatorial}");