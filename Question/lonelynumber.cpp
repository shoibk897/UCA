// Lonely number problem - this time 2 numbers are lonely. Return those 2 number: ex [3,2,1,3,4,3] : returns [1,2] or [2,1] 

#include<bits/stdc++.h>
using namespace std;
 
vector<int> lonelynumber(vector<int> &nums) {
    
}

int main(){
    
    vector<int> arr = {3,2,1,3,4,3};
    vector <int> ans = lonelynumber(arr);

    cout << "Lonely number are : ";
    for(int i : ans){
        cout << i << " ";
    }
    return 0;
}