#include <bits/stdc++.h>
using namespace std;

#define size 4

bool isValid(int i, int j)
{
    return i >= 0 && i < size && j >= 0 && j < size;
}

bool isCherry(char arr[size][size], int i, int j)
{
    return isValid(i, j) && arr[i][j] == '1';
}

bool isPossible(char arr[size][size], int i, int j)
{
    return isValid(i, j) && arr[i][j] != '0';
}

// void solve(char arr[size][size], int &cherry, int i, int j)
// {
//     if (!isValid(i,j) || i == 2 || j == 3){
//         cout << "(" << i <<','<<j<<")" << endl;
//         return;
//     }
//     cout << "(" << i <<','<<j<<") ";
//     solve(arr,cherry,i + 1,j);
//     solve(arr,cherry,i,j + 1);
//     // if(arr[i][j] == '1') cherry++;
//     // checkLeft cherry
//     // if (isCherry(arr, i, j + 1))
//     // {
//     //     solve(arr, cherry, i, j + 1);
//     // }
//     // // checkRight cherry
//     // else if (isCherry(arr, i + 1, j))
//     // {
//     //     solve(arr, cherry, i + 1, j);
//     // }else{
//     //     // move either left or right
//     //     if(isPossible(arr,i,j+1)){
//     //         solve(arr, cherry, i, j + 1);
//     //     }else{
//     //         solve(arr, cherry, i + 1, j);
//     //     }
//     // }
// }

int solveMax(char arr[size][size], int i, int j)
{
    if (!isValid(i, j))
    {
        return 0;
    }
    if (i == size - 1 && j == size - 1)
    {
        return arr[i][j] - '0';
    }

    int d = solveMax(arr, i + 1, j);
    int l = solveMax(arr, i, j + 1);

    int val = arr[i][j] - '0';

    return val + min(d,l);
}

int main()
{
    char arr[size][size] = {
        {'1', '0', '1', '1'},
        {'1', '0', '0', '1'},
        {'1', '0', '0', '1'},
        {'0', '0', '1', '1'}};

    int cherry = solveMax(arr,0,0);
    // solve(arr, cherry, 0, 0);
    cout << cherry << endl;
    return 0;
}

// sudo code
/*
    # we check for down and left if cherry is present in either of them move towards them or any

    # repeat this process until we reach end
*/