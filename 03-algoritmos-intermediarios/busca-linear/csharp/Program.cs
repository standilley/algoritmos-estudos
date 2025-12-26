Console.Write("Digite a quantidade de elementos: ");
int N = int.Parse(Console.ReadLine());

int[] vetor = new int[N];

for (int i = 0; i < N; i++)
{
    Console.Write($"Digite o elemento {i + 1}: ");
    vetor[i] = int.Parse(Console.ReadLine());
}

Console.Write("Digite o valor a ser buscado: ");
int chave = int.Parse(Console.ReadLine());

bool encontrado = false;

for (int i = 0; i < N; i++)
{
    if (vetor[i] == chave)
    {
        Console.WriteLine($"Valor encontrado na posição {i + 1}");
        encontrado = true;
        break;
    }
}

if (!encontrado)
    Console.WriteLine("Valor não encontrado");
