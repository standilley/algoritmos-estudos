Console.Write("Digite o primeiro número: ");
double n1 = double.Parse(Console.ReadLine());

Console.Write("Digite o segundo número: ");
double n2 = double.Parse(Console.ReadLine());

Console.WriteLine("Escolha a operação (+, -, *, /): ");
string operacao = Console.ReadLine();

double resultado;

switch (operacao)
{
    case "+":
        resultado = n1 + n2;
        break;
    case "-":
        resultado = n1 - n2;
        break;
    case "*":
        resultado = n1 * n2;
        break;
    case "/":
        if (n2 == 0)
        {
            Console.WriteLine("Erro: divisão por zero");
            return;
        }
        resultado = n1 / n2;
        break;
    default:
        Console.WriteLine("Operação inválida");
        return;
}

        Console.WriteLine($"Resultado: {resultado}");
