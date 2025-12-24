Console.Write("Digite o peso (kg): ");
double peso = double.Parse(Console.ReadLine());

Console.Write("Digite a altura (m): ");
double altura = double.Parse(Console.ReadLine());

double imc = peso / (altura * altura);

Console.WriteLine($"IMC: {imc:F2}");

if (imc < 18.5)
    Console.WriteLine("Classificação: Abaixo do peso");
else if (imc < 25)
    Console.WriteLine("Classificação: Peso normal");
else if (imc < 30)
    Console.WriteLine("Classificação: Sobrepeso");
else
    Console.WriteLine("Classificação: Obesidade");