Console.Write("Digite a quantidade de elementos: ");
int N = int.Parse(Console.ReadLine());

int[] vetor = new int[N];

for (int i = 0; i < N; i++)
{
    Console.Write($"Digite o elemento {i + 1}: ");
    vetor[i] = int.Parse(Console.ReadLine());
}

int maior = vetor[0];

for (int i = 1; i < N; i++)
{
    if (vetor[i] > maior)
        maior = vetor[i];
}

Console.WriteLine($"Maior elemento do vetor: {maior}");