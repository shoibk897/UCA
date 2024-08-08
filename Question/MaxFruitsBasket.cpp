#include <bits/stdc++.h>
using namespace std;

bool check(std::vector<int>& s, int start, int end) 
{
    std::set<int> st(s.begin() + start, s.begin() + end);
    return st.size() <= 2;
}
void method1(vector<int> s){
    int len = s.size();
    int max_len = 0;
    int i = 0;
    int j = 2;

    while (j < len) {
        if (check(s, i, j + 1)) {
            max_len = std::max(j - i + 1, max_len);
            j++;
        } else {
            i++;
            if (i > j) {
                j = i + 2;
            }
        }
    }

    std::cout << max_len << std::endl;
}


void usingMap(vector<int> arr) {
    int n = arr.size();
    int maxi = 0;
    map<int,int> m;
    int i = 0;

    for(int j = 0 ; j < n ;j++ ){
        m[arr[j]]++;
        while( m.size() > 2 ){
            m[arr[i]]--;
            if(m[arr[i]] == 0){
                m.erase(arr[i]);
            }
            ++i;
        }

        maxi = max(maxi, j - i + 1);
    }

    cout << maxi;

}

int main() 
{
    int n;
    std::cin >> n;

    std::vector<int> s = {3,3,3,1,4};
    
    for(int i = 0 ; i < n ; i++){
	    std::cin >> s[i];
    }

    usingMap(s);



    
    return 0;
}
