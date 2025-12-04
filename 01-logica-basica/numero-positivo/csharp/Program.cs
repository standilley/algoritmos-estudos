int contador = 0;

for(int i = 1;  i <= 5; i++)
{
    Console.WriteLine($"Digite o {i}º numero: ");
    int numero = int.Parse( Console.ReadLine() );
    if( numero > 0 )
        contador = contador + 1;
}
Console.WriteLine($"A quantidade de numeros positivos: {contador}");