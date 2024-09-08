#include <stdio.h>

int compareAsc(int a, int b) {
	return a < b;
}

int compareDsc(int a, int b) {
	return a > b;
}

int swap(int arr[], int i, int j) {
	int temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

int sort(int arr[], int size, int(*compare)(int,int)) {
	for(int i = 0 ; i < size ;i++) {
		for(int j = 0 ; j < size; j++) {
			if(compare(arr[i],arr[j])) {
				swap(arr,i,j);
			}
		}
	}
}

void print(int arr[], int size) {
	for(int i = 0 ; i < size ; i++) {
		printf("%d ",arr[i]);
	}
	printf("\n");
}

int main() {
	int size = 5;
	int arr[] = {1,4,2,5,3};

	print(arr,size);

	sort(arr,size,compareAsc);

	print(arr,size);

	sort(arr,size,compareDsc);

	print(arr,size);

	return 0;
}












