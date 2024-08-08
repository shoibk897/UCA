#include <stdio.h>
#include <assert.h>
#include <stdlib.h>
#include <limits.h>
#include "stack.h"

struct Node
{
        int item;
        struct Node* next;
};

typedef struct Node Node;
Node* head = NULL;
int N = 0;


void push(int item)
{
        Node* oldHead = head;
        head = (Node *) malloc(sizeof(Node));
        head->item = item;
        head->next = oldHead;
        N++;
}
int pop()
{
        if(N==0) return INT_MIN;
        int item = head->item;
        Node* temp = head;
        head = head->next;
        N--;
        free(temp);
        return item;
}

int size()
{
        return N;
}

bool isEmpty()
{
        return N == 0;
}

int testStack()
{
        push(3);
        push(10);
        push(19);

        assert(size() == 3);
        assert(pop() ==19);
        assert(size() == 2);
        assert(pop() == 10);
        assert(size() == 1);
}

int main()
{
        testStack();
        return 0;
}