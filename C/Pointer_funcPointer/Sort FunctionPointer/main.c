#include <stdio.h>
#include "sort.h"

int main() {
    int arr[] = {2, 4, 1, 3, 5};
    int size = sizeof(arr) / sizeof(arr[0]);  // Use sizeof to determine size

    sortBubble(arr, size, compareAsc);

    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");  // Add newline for better readability
    return 0;
}
