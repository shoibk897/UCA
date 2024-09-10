#ifndef SORT_H
#define SORT_H

#include <stdio.h>

void sortBubble(int arr[], int size, int (*compare)(int, int));
void exchange(int arr[], int i, int j);
int compareAsc(int a, int b);
int compareDsc(int a, int b);

#endif  // SORT_H
