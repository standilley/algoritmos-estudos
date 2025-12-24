Console.WriteLine("Conversão de Temperatura");
Console.WriteLine("1 - Celsius para Fahrenheit");
Console.WriteLine("2 - Fahrenheit para Celsius");
Console.Write("Escolha a opção: ");
int opcao = int.Parse(Console.ReadLine());

if (opcao == 1)
    {
        Console.Write("Digite a temperatura em Celsius: ");
        double celsius = double.Parse(Console.ReadLine());

        double fahrenheit = (celsius * 9.0 / 5.0) + 32;

        Console.WriteLine($"Resultado: {fahrenheit} °F"); 
    }
    else if (opcao == 2)
    {
        Console.Write("Digite a temperatura em Fahrenheit: ");
        double fahrenheit = double.Parse(Console.ReadLine());

        double celsius = (fahrenheit - 32) * 5.0 / 9.0;

        Console.WriteLine($"Resultado: {celsius} °C");
    }
    else
    {
        Console.WriteLine("Opção inválida!");
    }
