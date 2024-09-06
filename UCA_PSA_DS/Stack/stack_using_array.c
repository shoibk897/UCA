#include <stdio.h>
#include <assert.h>
#include <stdlib.h>
#include <limits.h>
#include "stack.h"

int *array = NULL;
int N = 0;
int max_size = 1;

void resize_arr(int new_size)
{
        int * new_array = (int *) malloc(new_size*sizeof(int));
        for(int i = 0; i<N; i++)
        {
                new_array[i] = array[i];
        }
        int * temp = array;
        array = new_array;
        free(temp);
}
void push(int item)
{
        if(N==0){
                resize_arr(max_size);
        }
        else if(N== max_size)
        {
                resize_arr(max_size*2);
                max_size *= 2;
        }

        array[N++]=item;


}

int pop()
{
        if(isEmpty()) return INT_MIN;
        int item = array[--N];
        if(N==max_size/4)
        {
                resize_arr(max_size/2);
                max_size /= 2;
        }
        return item;
}
int size()
{
        return N;
}

bool isEmpty()
{
        return N==0;
}


int testStack()
{
        push(3);
        push(10);
        push(19);

        assert(size() == 3);
        assert(pop() ==19);
        assert(size() == 2);
        assert(pop()==10);
        assert(size() == 1);
}
int main()
{
        testStack();
}
