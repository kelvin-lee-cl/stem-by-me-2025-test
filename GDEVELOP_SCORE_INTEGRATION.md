# GDevelop 分數系統整合指南

## 概述
這個指南將幫助您在 GDevelop 遊戲中設置分數系統，使其能夠與父頁面（game1.html）進行通信，實現自動分數記錄和遊戲勝利檢測。

## 已設置的功能

### 1. 父頁面功能 (game1.html)
- ✅ 分數顯示系統（當前分數和總分）
- ✅ 分數歷史記錄（最近10次遊戲）
- ✅ 遊戲勝利/失敗檢測
- ✅ 自動保存到本地存儲
- ✅ 勝利獎勵系統（50%獎勵分數）
- ✅ 通知系統
- ✅ 測試按鈕

### 2. GDevelop 遊戲通信功能
- ✅ 與父頁面的通信框架
- ✅ 手動分數更新函數
- ✅ 遊戲勝利/失敗函數
- ✅ 遊戲時間追蹤

## 在 GDevelop 中設置分數系統

### 步驟 1: 創建變數
在 GDevelop 編輯器中：
1. 打開您的遊戲項目
2. 在場景編輯器中，點擊「變數」標籤
3. 創建以下變數：
   - `Score` (數字) - 用於存儲當前分數
   - `Lives` (數字) - 用於存儲生命值
   - `GameOver` (布林值) - 用於標記遊戲結束
   - `Win` (布林值) - 用於標記遊戲勝利

### 步驟 2: 設置分數更新事件
在事件編輯器中添加以下事件：

#### 分數增加事件
```
條件：
- 當玩家獲得分數時（例如：擊中敵人、收集物品等）

動作：
- 變數：Score += 10 (或其他分數值)
- JavaScript 代碼：
  if (typeof window.updateScore === 'function') {
      window.updateScore(runtimeScene.getVariables().get('Score').getAsNumber());
  }
```

#### 生命值減少事件
```
條件：
- 當玩家失去生命時（例如：被敵人擊中）

動作：
- 變數：Lives -= 1
- 條件檢查：如果 Lives <= 0
  - 變數：GameOver = true
  - JavaScript 代碼：
    if (typeof window.gameLose === 'function') {
        window.gameLose(runtimeScene.getVariables().get('Score').getAsNumber());
    }
```

#### 遊戲勝利事件
```
條件：
- 當玩家完成關卡或達到勝利條件時

動作：
- 變數：Win = true
- JavaScript 代碼：
  if (typeof window.gameWin === 'function') {
      window.gameWin(runtimeScene.getVariables().get('Score').getAsNumber());
  }
```

### 步驟 3: 遊戲開始事件
```
條件：
- 場景開始時

動作：
- 變數：Score = 0
- 變數：Lives = 3 (或您想要的初始生命值)
- 變數：GameOver = false
- 變數：Win = false
```

## 可用的 JavaScript 函數

### 1. 更新分數
```javascript
window.updateScore(score);
```
- 參數：`score` (數字) - 新的分數值
- 功能：向父頁面發送分數更新

### 2. 遊戲勝利
```javascript
window.gameWin(score);
```
- 參數：`score` (數字) - 最終分數
- 功能：向父頁面發送遊戲勝利信號

### 3. 遊戲失敗
```javascript
window.gameLose(score);
```
- 參數：`score` (數字) - 最終分數
- 功能：向父頁面發送遊戲失敗信號

## 測試方法

### 1. 使用測試按鈕
在 game1.html 頁面上點擊「測試分數系統」按鈕，可以模擬遊戲勝利並測試分數系統。

### 2. 在瀏覽器控制台中測試
打開瀏覽器開發者工具，在控制台中輸入：
```javascript
// 更新分數
window.frames[0].updateScore(100);

// 遊戲勝利
window.frames[0].gameWin(150);

// 遊戲失敗
window.frames[0].gameLose(75);
```

## 常見問題

### Q: 分數沒有更新怎麼辦？
A: 確保在 GDevelop 事件中正確調用了 `window.updateScore()` 函數。

### Q: 遊戲勝利/失敗沒有觸發怎麼辦？
A: 檢查是否在適當的條件下調用了 `window.gameWin()` 或 `window.gameLose()` 函數。

### Q: 分數沒有保存怎麼辦？
A: 分數會自動保存到瀏覽器的 localStorage 中，確保瀏覽器支持 localStorage。

### Q: 如何修改獎勵分數比例？
A: 在 game1.html 的 `handleGameWin` 函數中修改 `winBonus` 的計算方式。

## 自定義選項

### 修改獎勵分數比例
在 `game1.html` 中找到：
```javascript
const winBonus = Math.floor(score * 0.5); // 50% bonus
```
將 `0.5` 改為您想要的比例（例如：`0.3` 為 30% 獎勵）。

### 修改分數歷史記錄數量
在 `game1.html` 中找到：
```javascript
if (scoreHistory.length > 10) {
    scoreHistory = scoreHistory.slice(0, 10);
}
```
將 `10` 改為您想要保存的記錄數量。

### 修改通知顯示時間
在 `game1.html` 中找到：
```javascript
setTimeout(() => {
    if (notification.parentElement) {
        notification.remove();
    }
}, 5000); // 5 seconds
```
將 `5000` 改為您想要的顯示時間（毫秒）。

## 下一步
1. 在 GDevelop 中設置變數和事件
2. 測試分數系統功能
3. 根據您的遊戲需求調整分數計算邏輯
4. 測試遊戲勝利和失敗條件
5. 優化用戶體驗

如有任何問題，請檢查瀏覽器控制台的錯誤信息，或參考 GDevelop 的官方文檔。
