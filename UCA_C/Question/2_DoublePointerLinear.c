#include<stdio.h>

int main(){
    int arr[3][3]={{1,2,3},{4,5,6},{7,8,9}};
    for (int j = 0; j < 3; j++)
    {
       for (int i = 0; i < 3; i++)
       {
         printf("%d ",arr[j][i]);
       }
       printf("\n");
    }
    int *linear  = arr;
    for (int i = 0; i < 9; i++)
    {
        printf("%d ",*(linear+i));
    }    
    return 0;
};
