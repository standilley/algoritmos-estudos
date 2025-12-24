Console.Write("Digite a quantidade de valores: ");
int N = int.Parse(Console.ReadLine());

double soma = 0;

for (int i = 1; i <= N; i++)
{
    Console.Write($"Digite o valor {i}: ");
    double valor = double.Parse(Console.ReadLine());
    soma += valor;
}

double media = soma / N;
Console.WriteLine($"Média dos valores: {media:F2}");
