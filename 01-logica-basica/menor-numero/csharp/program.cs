class Program
{
    static int MenorNumero(int[] numeros)
    {
        if (numeros.Length == 0)
        {
            throw new ArgumentException("O array está vazio");
        }

        int menor = numeros[0];

        for (int i = 1; i < numeros.Length; i++)
        {
            if (numeros[i] < menor)
            {
                menor = numeros[i];
            }
        }

        return menor;
    }

    static void Main(string[] args)
    {
        int[] valores = { 3, 10, 5, 7, 20, 4 };
        int resultado = MenorNumero(valores);
        Console.WriteLine($"Menor número: {resultado}");
    }
}

