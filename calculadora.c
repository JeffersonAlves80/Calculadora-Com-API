#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[])
{
        if (argc != 4)
        {
                fprintf(stderr, "Uso: %s num1 operador num2\n", argv[0]);
                return 1;
        }

        double numero1 = atof(argv[1]);
        char *operacao = argv[2];
        double numero2 = atof(argv[3]);
        double resultado;

        if (strcmp(operacao, "+") == 0)
        {
                resultado = numero1 + numero2;
        }
        else if (strcmp(operacao, "-") == 0)
        {
                resultado = numero1 - numero2;
        }
        else if (strcmp(operacao, "*") == 0)
        {
                resultado = numero1 * numero2;
        }
        else if (strcmp(operacao, "/") == 0)
        {
                if (numero2 != 0)
                {
                        resultado = numero1 / numero2;
                }
                else
                {
                        fprintf(stderr, "Erro: Divisão por zero não é permitida.\n");
                        return 1;
                }
        }
        else
        {
                fprintf(stderr, "Erro: Operação inválida.\n");
                return 1;
        }

        printf("%f\n", resultado);
        return 0;
}
