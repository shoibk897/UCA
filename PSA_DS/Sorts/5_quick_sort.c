#include <stdio.h>
#include <assert.h>
#include <stdlib.h>
#include <time.h>
#include <sys/time.h>

void exch(int arr[], int i, int j)
{
  int temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

void quick_sort_recursive(int arr[], int left, int right) {
    if(left >= right) return;

    int pivot = arr[left];
    int i = left + 1;

    for(int j = left + 1 ; j <= right; j++) {
        if(arr[j] < pivot) {
            exch(arr,i++,j);
        }
    }
    exch(arr,left,--i);
    quick_sort_recursive(arr,left,i - 1);
    quick_sort_recursive(arr,i + 1,right);

}

void quick_sort(int arr[], int n) {
    quick_sort_recursive(arr,0,n-1);
}

long long time_elapsed(int n)
{
  int *arr = (int *) malloc(n * sizeof(int));

  srand(time(NULL));
  for(int i = 0; i < n; i++) arr[i] = rand();

  struct timeval before;
  gettimeofday(&before, NULL);
  long long before_millis = before.tv_sec*1000LL + before.tv_usec/1000;

  quick_sort(arr, n);

  struct timeval after;
  gettimeofday(&after, NULL);
  long long after_millis = after.tv_sec*1000LL + after.tv_usec/1000;

  return after_millis-before_millis;
}

void test_simple_input()
{
  int input[] = {5, 3, 1, 9, 7};
  int expected_output[] = {1, 3, 5, 7, 9};

  quick_sort(input, 5);

  for(int i = 0; i < 5; i++) assert(input[i] == expected_output[i]);
}

int main()
{
//   test_simple_input();

  long long t1 = time_elapsed(32000);
  long long t2 = time_elapsed(64000);

  printf("%lf\n", t2*1.0/t1);
  return 0;
}
