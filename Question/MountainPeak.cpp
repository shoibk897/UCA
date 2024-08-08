#include <iostream>
#include <vector>

using namespace std;

int peak(vector<int> arr){
	int i = 0;
	int j = arr.size() - 1;
	while(i < j){
		int mid = (i + j) / 2;
		if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
			return mid;
		}else if(arr[mid] < arr[mid + 1]){
			i = mid + 1;
		}else{
			j = mid - 1;
		}
	}
    	return -1;
}

int main() {
	vector<int> arr = {0,1,10,0};
	int ans = peak(arr);
	cout << ans << endl;
}
