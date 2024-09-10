#include <stdio.h>

int add(int a, int b)
{
        return a + b;
}

int subtract(int a, int b)
{
        return a - b;
}

int multiply(int a, int b)
{
        return a * b;
}

int divide(int a, int b)
{
        return a / b;
}

void performOperation(int (*operation)(int, int), int a, int b)
{
        printf("%d ",(*operation)(a,b));

}

int main()
{
        int a , b;
        char oper ;
        printf("Enter a : ");
        scanf("%d",&a);
        printf("Enter op : ");
        scanf(" %c",&oper);
        printf("Enter b : ");
        scanf("%d",&b);
        
        switch(oper)
        {
                case '+':
                        performOperation(add, a, b);
                        break;

                case '-':
                        performOperation(subtract, a, b);
                        break;
                
                case '*':
                        performOperation(multiply, a, b);
                        break;
                
                case '/':
                        performOperation(divide, a, b);
                        break;
        }
        return 0;
}



