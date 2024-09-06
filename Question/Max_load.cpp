// There are n cities given along with respective population. You have to open m clinics in those cities such that maximum load on clinics are minimized. ex:  
// n = 3
// population = [100, 50, 200] 
// m = 4 
// if I open 2 clinic in first city, 1 in second and 1 in third then the load on clinics will be 100/2, 50/1 and 200/1
// Here the clinic in 3rd city has maximum load (200).
// A better option : open clinic in order [1,1,2] then max load on clinics would be 100. [100/1, 50/1,200/2]
// Constraints:
// n and m are large numbers. 
// m >= n


#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool canDistribute(const vector<int>& population, int n, int m, int maxLoad, vector<int>& distribution) {
    int clinicsNeeded = 0;
    distribution.assign(n, 0);

    for (int i = 0; i < n; ++i) {
        distribution[i] = (population[i] + maxLoad - 1) / maxLoad;  
        clinicsNeeded += distribution[i];
        if (clinicsNeeded > m) {
            return false;
        }
    }
    return true;
}


vector<int> minimizeMaxLoad(const vector<int>& population, int n, int m) {
    int low = 1;
    int high = *max_element(population.begin(), population.end());
    vector<int> bestDistribution(n);
    vector<int> currentDistribution(n);

    while (low <= high) {
        int mid = low + (high - low) / 2;
        
        if (canDistribute(population, n, m, mid, currentDistribution)) {
            bestDistribution = currentDistribution;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return bestDistribution;
}

int main() {
    int n;
    cin >> n;
    vector<int> population(n);
    for (int i = 0; i < n; ++i) {
        cin >> population[i];
    }
    int m;
    cin >> m;

    vector<int> distribution = minimizeMaxLoad(population, n, m);
    
    for (int i = 0; i < n; ++i) {
        cout << distribution[i] << " ";
    }
    cout << endl;

    return 0;
}
