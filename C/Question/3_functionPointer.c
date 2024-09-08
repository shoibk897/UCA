#include <stdio.h> 

int add(int a, int b) {
	return a + b;
}

int sub(int a, int b) {
	return a - b;
}

int div(int a, int b) {
	return a/b;
}

int mul(int a, int b) {
	return a*b;
}

void performOperation(int (*operation)(int,int), int a, int b) {
	
	//printf("%d\n",(*operation)(a,b));
	printf("%d\n",operation(a,b));
}

int main() {
	//int (*func)(int,int) = &add;

	//int ans = (*func)(2,3);
	//printf("%d\n",ans);
	
	performOperation(add,2,3);
	performOperation(sub,2,3);
	performOperation(div,2,3);
	performOperation(mul,2,3);

	return 0;
}
