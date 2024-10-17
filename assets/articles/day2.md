DATE: 2024/10/16(三)  
weather: sunny
direction: 今天花了一些時間去研究三星決賽的pitch策略，
```
1. 調查你的聽眾背景，去思考他們在意什麼
讓評審FOMO -> “如果我不支持這組，我會錯過那些我很關心的事 ”

2. 現況描述
描述我們產品要解決的問題的現況，然後引起衝突，說明所有現有產品所無法解決的問題

3. 說明解方
說明我們如何去解決提到的問題，並描繪問題解決後的美好藍圖

4. 展現產品缺點
把現有困境和那些聽眾擔心的點講出來，並說明我們如何去shore up weakness
```

今天的code challenge要來解決我程設期中考沒做出來的前綴合題目，以下為題目連結
有興趣可以看一下
https://acm.cs.nthu.edu.tw/contest/3097/

今天解了之前期中上機考腦袋當機沒解出來的題目，經典的prefix sum題目，其實沒有到很難，大概就是開一個prefixsum和postfixsum然後去計算前K個餅乾和後0個餅乾,前K-1個餅乾和後1個餅乾...

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