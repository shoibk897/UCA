#include <bits/stdc++.h>
using namespace std;

class Solution {
    void _generateParenthesis(int l, int r, string s, vector<string> &ans){
        if(l == 0 && r == 0){
            ans.push_back(s);
        }
        if(l > r || l < 0 || r < 0) {
            return;
        }
        s.push_back('(');
        _generateParenthesis(l - 1,r,s,ans);
        s.pop_back();
        s.push_back(')');
        _generateParenthesis(l,r - 1,s,ans);
        s.pop_back();
    }
public:
    vector<string> generateParenthesis(int n) {
        vector<string> ans;
        string s;
        _generateParenthesis(n,n,s,ans);
        return ans;
    }
};

