#include <stdio.h>
#include <stdlib.h>

void* my_calloc(int n, int size) {
    int num_of_bytes = n * size;
    void *ptr = malloc(num_of_bytes);

    char *byte_ptr = (char*)ptr;
    for (int i = 0; i < num_of_bytes; i++) {
        byte_ptr[i] = 0;
    }
    
    return ptr;
}

int main() {
    int n;
    printf("Enter the number of integers: ");
    scanf("%d", &n);

    int *ptr = my_calloc(n, sizeof(int));
    if (ptr == NULL) {
        printf("Memory allocation failed\n");
        return 1;
    }

    int check = 1;
    for (int i = 0; i < n; i++) {
        if (*(ptr + i) != 0) {
            check = 0;
            break;
        }
    }

    if (check) {
        printf("ptr success\n");
    } else {
        printf("ptr failed\n");
    }

    free(ptr);

    return 0;
}
