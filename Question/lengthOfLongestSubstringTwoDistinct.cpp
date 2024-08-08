#include <bits/stdc++.h>


bool check(const std::string& s, int start, int end) 
{
    std::set<char> st(s.begin() + start, s.begin() + end);
    return st.size() == 2;
}

int main() 
{
    std::string s = "ccaabbb";
    int len = s.length();
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
                j = i;
            }
        }
    }

    std::cout << max_len << std::endl;
    return 0;
}

