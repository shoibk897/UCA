// Reverse a given integer. If resulting number goes out of Integer range return 0
//             ex:                123 = 321
//                -123 = -321
//                 1534236469 = 0
//                 -2147483648 = 0 

#include<bits/stdc++.h>
using namespace std;

int reverse_num(int n){
    long reversed = 0;
    while(n != 0){
        int digit = n % 10;
        n /= 10;
        if((reversed > INT_MAX / 10) || (reversed == INT_MAX / 10 && digit > 7)) return 0;
        if((reversed < INT_MIN / 10) || (reversed == INT_MIN / 10 && digit < -8)) return 0;
        reversed = reversed * 10 + digit;
    }
    return (int)reversed;
}
 
int main(){
    int num;
    cin >> num;

     int result = reverse_num(num);
     cout << result;
    
    return 0;
}