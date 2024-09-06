// https://www.geeksforgeeks.org/problems/tower-of-hanoi-1587115621/1

#include<bits/stdc++.h>
using namespace std;
 
 long long toh(int n, int from, int to, int aux) {

        if( n == 1){
            cout << "move disk " << n << " from rod " << from << " to rod " << to << endl;
            return 1;
        }
        
        long long x = toh(n - 1, from, aux, to);
        cout << "move disk " << n << " from rod " << from << " to rod " << to << endl;
        long long y = toh(n - 1, aux, to, from);
        
        return y + x + 1;
    }


int main() {
    int n; 
    cout << "Enter the number of disks: ";
    cin >> n;

    cout << "The sequence of moves involved in the Tower of Hanoi are:" << endl;
    long long totalMoves = toh(n, 1, 3, 2);

    cout << "Total moves: " << totalMoves << endl;

    return 0;
}