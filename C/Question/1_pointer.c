#include <stdio.h>

int main()
{
	int a = 10;
	int* b = &a;
	char* c = &a;

	printf("%d/n%d/n%d/n",a,*b,*c);

	return 0;
}
