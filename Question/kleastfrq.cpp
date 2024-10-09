// Given an random array find smallest K elements : ex: [3,2,6,7,2,1,9]   k = 3 : return [1,2,2] in any order

#include <bits/stdc++.h>
using namespace std;

vector<int> leastKFrequent(vector<int> &nums, int k)
{

    priority_queue<int,vector<int>,greater<int>> pq;
    
    for(int i : nums){
        pq.push(i);
    }
    
    vector<int> ans;
    while(!pq.empty() && k--){
        ans.push_back(pq.top());
        pq.pop();
    }

    return ans;
    
}



int quickSelect(vector<int> & num,int L,int R,int K){
    int p = L;
    int i = L + 1;
    for( ; i < R ; i++){
        if(num[i] < num[L]){
            swap(num[i],num[++p]);
        }
    }
    swap(num[L],num[p]);
    if(p == K) return p;
    else if ( p > K) return quickSelect(num,L,p - 1,K);
    else  return quickSelect(num,p + 1,R , K);
}


int main()
{
    vector<int> arr = {3,2,6,7,2,1,9};
    int k = 3;
    // vector<int> ans = leastKFrequent(arr,k);
    // cout << "Smallest K elements : ";
    // for(int i : ans){
    //     cout << i << " ";
    // }

    int p = quickSelect(arr,0,arr.size() - 1, k);
    for(int i = 0 ; i < p ; i++){
        cout << arr[i] << " ";
    }

    return 0;
}