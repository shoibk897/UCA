#include <bits/stdc++.h>
using namespace std;

int EvenFibonaciSum(int a, int b, int n)
{
    if (a >= n)
        return 0;

    int sum = 0;
    if (a % 2 == 0)
        sum += a;

    return sum + EvenFibonaciSum(b, a + b, n);
}

int main()
{
    int ans = EvenFibonaciSum(0,1,100);
    cout << ans;
    return 0;
}