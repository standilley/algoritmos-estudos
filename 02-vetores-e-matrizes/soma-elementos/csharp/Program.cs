Console.Write("Digite a quantidade de elementos: ");
int N = int.Parse(Console.ReadLine());

int[] vetor = new int[N];
int soma = 0;

for (int i = 0; i < N; i++)
{
    Console.Write($"Digite o elemento {i + 1}: ");
    vetor[i] = int.Parse(Console.ReadLine());
    soma += vetor[i];
}

Console.WriteLine($"Soma dos elementos: {soma}");