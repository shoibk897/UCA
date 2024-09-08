#include<bits/stdc++.h>
using namespace std;

class PriorityQueue{
    vector<int> pq;
    int n;
        void swim(int k){
        while( k > 1 && this->pq[k] > this->pq[k/2]){
            this->exchange(k,k/2);
            k = k/2;
        }
    }

    void sink(int k) {
        while(2*k <= n) {
            int j = 2*k;
            if(j < n && (this->pq[j] < this->pq[j + 1])) j++;
            if(this->pq[k] > this->pq[j]) break;
            exchange(k,j);
            k = j;
        }
    }

    void exchange(int i, int j){
        int temp = this->pq[i];
        this->pq[i] = this->pq[j];
        this->pq[j] = temp;
    }

public:
    PriorityQueue(int capacity) : pq(capacity + 1,-1), n(0) {}

    void insert(int x) {
        this->pq[++n] = x;
        swim(n);

    }

    int delMax() {
        int maxElement = this->pq[1];
        this->exchange(1,n--);
        sink(1);
        this->pq[n + 1] = -1;
        return maxElement;
    }

    bool isEmpty() {
        return this->n == 0;
    }

    int size(){
        return n;
    }

    void printPQ(){
        for(int i = 1 ; i <= n ; i++){
            if(pq[i] == -1)break;
            cout << pq[i] << " ";
        }
        cout << endl;
    }

};
 
int main(){

    PriorityQueue pq(10);
    
    pq.insert(5);
    pq.insert(11);
    pq.insert(7);

    assert(pq.delMax() == 11);
    assert(pq.size() == 2);

    pq.insert(15);
    pq.insert(11);
    pq.insert(19);

    assert(pq.delMax() == 19);

    cout << "All assertions passed!" << endl;
    return 0;

    
    return 0;
}