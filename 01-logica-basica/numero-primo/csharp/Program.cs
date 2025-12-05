//// versão simples 

//Console.WriteLine("Digite um numero: ");
//int numero = int.Parse(Console.ReadLine());

//int divisores = 0;
//for (int i = 1; i <= numero; i++)
//{
//    if(numero % i ==0)
//        divisores++;
//}

//if (divisores == 2)
//    Console.WriteLine($"O número {numero} é primo, DIVISORES: {divisores}");
//else
//{
//    Console.WriteLine($"O número {numero} NÃO é primo, DIVISORES: {divisores}");
//}


// Versão OTIMIZADA (√N + só ímpares) 
    static bool EhPrimo(int n)
    {
        // Números menores que 2 não são primos
        if (n < 2)
            return false;

        // 2 é o único primo par
        if (n == 2)
            return true;

        // Qualquer outro número par maior que 2 não é primo
        if (n % 2 == 0)
            return false;

        // Verificamos apenas até a raiz quadrada de n
        int limite = (int)Math.Sqrt(n);

        // E só testamos ímpares: 3, 5, 7, 9, ...
        for (int i = 3; i <= limite; i += 2)
        {
            if (n % i == 0)
                return false;
        }

        return true;
    }

    Console.Write("Digite um número: ");
        int numero = int.Parse(Console.ReadLine());

        if (EhPrimo(numero))
            Console.WriteLine($"O número {numero} é primo.");
        else
            Console.WriteLine($"O número {numero} NÃO é primo.");



