#include <bits/stdc++.h>
using namespace std;

int num(int n)
{
    return (n >> 31) | !(!n);
}

int main()
{
    int n;
    cin >> n;

    int ans = num(n);
    cout << ans;

    return 0;
}