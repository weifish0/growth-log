# Day2: Prefix Sum Problem
DATE: 2024/10/16(三)  
今天的 code challenge 要來解決我程設期中考沒做出來的前綴合題目，[題目連結](https://acm.cs.nthu.edu.tw/contest/3097/)有興趣可以看一下


今天解了之前期中上機考腦袋當機沒解出來的題目，經典 prefix sum 題目，其實沒有到很難，大概就是開一個 prefixsum 和 postfixsum 然後去計算前 K 個餅乾和後 0 個餅乾,前 K-1 個餅乾和後 1 個餅乾...

總的來說下次考試時還是要穩住心態，才能保持平常水準。

```C
#include <stdio.h>

int main(void){
    int T;
    scanf("%d", &T);
    while (T--){
        int K, N;
        scanf("%d%d", &N, &K);
        long long prefix_sum[N];
        long long post_sum[N];
        long long arr[N];

        scanf("%lld", &arr[0]);
        prefix_sum[0] = arr[0];

        // calculate prefix_sum
        for(int i=1; i<N; i++){
            scanf("%lld", &arr[i]);
            prefix_sum[i] = prefix_sum[i-1] + arr[i];
        }

        // calculate post_sum
        post_sum[0]=arr[N-1];
        for(int i=1; i<N; i++){
            post_sum[i] = post_sum[i-1] + arr[N-i-1];
        }

        long long max_sum = 0;
        for(int i=0; i<=K; i++){
            long long head = (i!=K) ? prefix_sum[K-1-i] : 0;
            long long tail = (i!=0) ? post_sum[i-1] : 0;
            if(head+tail>max_sum){
                max_sum = head+tail;
            }
        }
        printf("%lld\n", max_sum);
    }
}
```