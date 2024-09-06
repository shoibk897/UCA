#include "queue.h"

struct node
{
    int data;
    struct node* next;
};

typedef struct node node;

int N = 0;
node * head = NULL;
node* tail = NULL;

bool isEmpty(){
    return N == 0;
}

void enQueue(int item){
    node* newNode = (node*) malloc(sizeof(node));
 
    newNode->data = item;
    newNode->next = NULL;

    if (isEmpty()) {
        head = newNode;
        tail = newNode;
    } else {
        tail->next = newNode;
        tail = newNode;
    }

    N++;
}

int deQueue(){
    if(isEmpty()) return -1;
    
    int n = head->data;
   
    node* temp = head;
    head = head->next;
    
    free(temp);
    N--;

    return n;
}

int size(){
    return N;
}

void print(){
    node* temp = head;
    if(!temp){
        printf("Empty\n");
        return;
    }
    while (temp) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

void testQueue() {
    enQueue(3);
    enQueue(10);
    enQueue(20);

    assert(isEmpty() == false);
    assert(size() == 3);
    assert(deQueue() == 3);
    assert(size() == 2);
    assert(deQueue() == 10);
    assert(size() == 1);
    assert(deQueue() == 20);
    assert(size() == 0);
    assert(isEmpty());
}

int main() {

    testQueue();
    printf("All tests passed!!\n");
    return 0;

}


