Console.Write("Digite a quantidade de linhas: ");
int L = int.Parse(Console.ReadLine());

Console.Write("Digite a quantidade de colunas: ");
int C = int.Parse(Console.ReadLine());

int[,] matriz = new int[L, C];

// Leitura da matriz
for (int i = 0; i < L; i++)
{
    for (int j = 0; j < C; j++)
    {
        Console.Write($"Digite o valor da posição [{i + 1},{j + 1}]: ");
        matriz[i, j] = int.Parse(Console.ReadLine());
    }
}

// Soma das colunas
for (int j = 0; j < C; j++)
{
    int somaColuna = 0;

    for (int i = 0; i < L; i++)
    {
        somaColuna += matriz[i, j];
    }

    Console.WriteLine($"Soma da coluna {j + 1}: {somaColuna}");
}