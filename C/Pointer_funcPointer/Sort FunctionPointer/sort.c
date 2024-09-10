#include "sort.h"

void sortBubble(int arr[],int size, int (*compare)(int,int)){
    for(int i = 0 ; i < size ; i++) {
        for(int j = i + 1 ; j < size ; j++) {
            if((*compare)(arr[i],arr[j])){
                exchange(arr,i,j);
            }
        }
    }
}

void exchange(int arr[],int i, int j){
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
int compareAsc(int a,int b){
    return  a > b;
}
int compareDsc(int a,int b){
    return a < b;
}