#include <stdio.h>
#include "mmam.h" // max, min, abs, mod
#include "dmas.h" // div, mul, add, sub
int main() {
	
	int a,b;
	scanf("%d %d",&a,&b);

	printf("Add : %d\n",add(a,b));
	printf("Sub : %d\n",sub(a,b));
	printf("Mul : %d\n",mul(a,b));
	printf("Div : %d\n",div(a,b));

	printf("Max : %d\n",max(a,b));
	printf("Min : %d\n",min(a,b));
	// printf("Abs : %d\n",abs(a));
	printf("Mod : %d\n",mod(a,b));

	return 0;
}


