Console.Write("Digite a quantidade de elementos (vetor ORDENADO): ");
int N = int.Parse(Console.ReadLine());

int[] vetor = new int[N];

for (int i = 0; i < N; i++)
{
     Console.Write($"Digite o elemento {i + 1}: ");
    vetor[i] = int.Parse(Console.ReadLine());
}

Console.Write("Digite o valor a ser buscado: ");
int chave = int.Parse(Console.ReadLine());

int inicio = 0;
int fim = N - 1;
int posicao = -1;

while (inicio <= fim)
{
    int meio = (inicio + fim) / 2;

    if (vetor[meio] == chave)
    {
        posicao = meio;
        break;
    }
    else if (chave < vetor[meio])
    {
        fim = meio - 1;
    }
    else
    {
        inicio = meio + 1;
    }
}

if (posicao != -1)
    Console.WriteLine($"Encontrado na posição {posicao + 1}");
else
    Console.WriteLine("Não encontrado");