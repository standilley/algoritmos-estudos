class Program
{
    static int MaiorNumero(int[] numeros)
    {
        if (numeros.Length == 0)
        {
            throw new ArgumentException("O array está vazio");
        }

        int maior = numeros[0];

        for (int i = 1; i < numeros.Length; i++)
        {
            if (numeros[i] > maior)
            {
                maior = numeros[i];
            }
        }

        return maior;
    }

    static void Main(string[] args)
    {
        int[] valores = { 3, 10, 5, 7, 20, 4 };
        int resultado = MaiorNumero(valores);
        Console.WriteLine($"Maior número: {resultado}");
    }
}

