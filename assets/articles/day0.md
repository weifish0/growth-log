# 100 Days of code: day0 正式啟動
DATE: 2024/10/15(二)  
weather: cloudy  
direction: 昨天考完了所有考試的 Midterm，最近準備全力衝刺三星比賽的 Final Project
ai-odyssey product roadmap:  
- 1016三 基礎遊戲構想
- 1016三 決賽簡報初稿(規劃好各個section的要點)
- 1017四 遊戲大廳
- 1019六 網頁辨識核心玩法

## 自我檢核
今天我和產創課學長毛遂自薦說可以幫他開發Minecraft伺服器的宣傳網頁，但當他問我有沒有什麼專案可以火力展示時，我完全回答不出來，我是有做過一些前端的網頁開發，但那些都只是用HTML, CSS, Vanilla JS東拼西湊出來的，美化頂多用一些Bootstrap之類的框架，通過這些技術只能做到**CSR(Client Side Rendering)**而這會導致較差的SEO、較慢的加載速度等劣勢等等。

## 網頁渲染方式介紹與比較
### 1. Client-Side Rendering (CSR)
**概念**：  
CSR 是指所有的 HTML、CSS 和 JavaScript 文件先在瀏覽器下載，並且 JavaScript 負責生成和更新 DOM 結構。在首次載入時，伺服器通常只返回一個空的 HTML 檔，然後所有的頁面內容是由 JavaScript 在客戶端動態生成的。

**優點**：
- 頁面切換速度快，一旦初始資源被下載，後續操作不需要再從伺服器獲取完整的 HTML，僅進行數據請求。
- 用戶體驗更互動、流暢，適合單頁應用（SPA），如 Gmail、Facebook。

**缺點**：
- 首次加載速度較慢，因為必須等待所有的 JavaScript 被下載並執行，這在低速網絡或較慢的裝置上尤為明顯。
- SEO（搜索引擎優化）效果差，因為爬蟲工具可能無法執行 JavaScript 來看到頁面內容。

**適用場景**：
- 互動性強、動態更新頻繁的網站或應用程式，如社交媒體平台、即時聊天應用等。

## 2. Server-Side Rendering (SSR)
**概念**：  
SSR 是指在伺服器端生成完整的 HTML，並將其發送給瀏覽器。當用戶請求頁面時，伺服器處理該請求，生成 HTML 並返回。

**優點**：
- 首次渲染速度更快，用戶看到完整頁面的時間比 CSR 更短，因為 HTML 是伺服器生成後直接發送的。
- SEO 友好，因為網頁內容在伺服器端已經生成，搜索引擎可以輕鬆抓取頁面。

**缺點**：
- 每次請求都需要伺服器重新生成頁面，可能導致伺服器負載增加，特別是在高流量的情況下。
- 用戶互動稍微慢一些，因為每次頁面切換都會涉及伺服器請求。

**適用場景**：
- 內容驅動的網站，SEO 很重要的情況，如新聞網站、Blog或商品展示頁面等。

---

> 不斷去吸收各種技術與知識並打造自己的學習鏈  

> You cannot connect the dots looking forward, you can only connect them looking backwards.


