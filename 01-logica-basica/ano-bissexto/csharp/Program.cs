Console.Write("Digite um ano: ");
int ano = int.Parse(Console.ReadLine());

if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0))
    Console.WriteLine("Ano bissexto");
else
    Console.WriteLine("Ano não bissexto");