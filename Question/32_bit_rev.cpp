#include<bits/stdc++.h>
using namespace std;
 
int main(){
    int n;
    cin >> n;
    bool flag = false;
    if(n < 0){
        flag = true;
        n *= -1;
    }

    int temp = 0;
    while( n > 0 ){
        if(temp > (INT_MAX - n % 10) / 10) {
            cout << 0;
            return 0;
        }
        temp = temp * 10 + n % 10;
        n /= 10;
    }

    if(flag){
        temp *= -1;
    }
    cout << temp;
    return 0;
}
