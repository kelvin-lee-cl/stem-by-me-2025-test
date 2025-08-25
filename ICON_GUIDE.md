# 圖標使用指南

## 當前可用的圖標庫

### 1. Font Awesome 圖標 (fa fa-)
您的網站已經載入了 Font Awesome 圖標庫，可以通過 `fa fa-` 前綴使用。

#### 當前使用的圖標：
- `fa fa-expand` - 全螢幕模式
- `fa fa-refresh` - 重新開始
- `fa fa-pause` - 暫停遊戲
- `fa fa-trophy` - 測試分數系統
- `fa fa-info-circle` - 分數系統說明
- `fa fa-heart-o` - 愛心圖標

#### 推薦的遊戲相關圖標：

##### 遊戲控制圖標：
```html
<i class="fa fa-play"></i>          <!-- 播放 -->
<i class="fa fa-pause"></i>         <!-- 暫停 -->
<i class="fa fa-stop"></i>          <!-- 停止 -->
<i class="fa fa-refresh"></i>       <!-- 重新開始 -->
<i class="fa fa-expand"></i>        <!-- 全螢幕 -->
<i class="fa fa-compress"></i>      <!-- 縮小 -->
<i class="fa fa-home"></i>          <!-- 返回主頁 -->
<i class="fa fa-arrow-left"></i>    <!-- 返回 -->
<i class="fa fa-arrow-right"></i>   <!-- 前進 -->
```

##### 遊戲狀態圖標：
```html
<i class="fa fa-trophy"></i>        <!-- 獎盃/勝利 -->
<i class="fa fa-star"></i>          <!-- 星星 -->
<i class="fa fa-heart"></i>         <!-- 生命值 -->
<i class="fa fa-clock-o"></i>       <!-- 時間 -->
<i class="fa fa-gamepad"></i>       <!-- 遊戲手柄 -->
<i class="fa fa-diamond"></i>       <!-- 鑽石/寶石 -->
<i class="fa fa-coins"></i>         <!-- 金幣 -->
<i class="fa fa-gift"></i>          <!-- 禮物/獎勵 -->
```

##### 分數系統圖標：
```html
<i class="fa fa-chart-line"></i>    <!-- 分數圖表 -->
<i class="fa fa-medal"></i>         <!-- 獎牌 -->
<i class="fa fa-crown"></i>         <!-- 皇冠 -->
<i class="fa fa-fire"></i>          <!-- 火焰/熱度 -->
<i class="fa fa-bolt"></i>          <!-- 閃電/能量 -->
<i class="fa fa-gem"></i>           <!-- 寶石 -->
<i class="fa fa-coins"></i>         <!-- 金幣 -->
<i class="fa fa-dollar-sign"></i>   <!-- 金錢 -->
```

##### 設置和選項圖標：
```html
<i class="fa fa-cog"></i>           <!-- 設置 -->
<i class="fa fa-sliders-h"></i>     <!-- 音量控制 -->
<i class="fa fa-volume-up"></i>     <!-- 音量開 -->
<i class="fa fa-volume-off"></i>    <!-- 音量關 -->
<i class="fa fa-music"></i>         <!-- 音樂 -->
<i class="fa fa-keyboard-o"></i>    <!-- 鍵盤 -->
<i class="fa fa-mouse-pointer"></i> <!-- 滑鼠 -->
<i class="fa fa-mobile"></i>        <!-- 手機 -->
```

##### 社交和分享圖標：
```html
<i class="fa fa-share"></i>         <!-- 分享 -->
<i class="fa fa-facebook"></i>      <!-- Facebook -->
<i class="fa fa-twitter"></i>       <!-- Twitter -->
<i class="fa fa-instagram"></i>     <!-- Instagram -->
<i class="fa fa-youtube"></i>       <!-- YouTube -->
<i class="fa fa-envelope"></i>      <!-- 郵件 -->
<i class="fa fa-phone"></i>         <!-- 電話 -->
```

### 2. Linearicons 圖標 (lnr lnr-)
您的網站也載入了 Linearicons 圖標庫，可以通過 `lnr lnr-` 前綴使用。

#### 推薦的 Linearicons 圖標：
```html
<i class="lnr lnr-home"></i>        <!-- 主頁 -->
<i class="lnr lnr-arrow-left"></i>  <!-- 左箭頭 -->
<i class="lnr lnr-arrow-right"></i> <!-- 右箭頭 -->
<i class="lnr lnr-cross"></i>       <!-- 關閉 -->
<i class="lnr lnr-checkmark-circle"></i> <!-- 確認 -->
<i class="lnr lnr-heart"></i>       <!-- 愛心 -->
<i class="lnr lnr-star"></i>        <!-- 星星 -->
<i class="lnr lnr-cog"></i>         <!-- 設置 -->
<i class="lnr lnr-volume-high"></i> <!-- 音量高 -->
<i class="lnr lnr-volume-low"></i>  <!-- 音量低 -->
<i class="lnr lnr-volume"></i>      <!-- 音量 -->
<i class="lnr lnr-music-note"></i>  <!-- 音樂 -->
```

## 如何更換圖標

### 1. 在 game1.html 中更換按鈕圖標：
```html
<!-- 當前 -->
<button class="control-btn" onclick="fullscreenGame()">
    <i class="fa fa-expand"></i> 全螢幕模式
</button>

<!-- 可以改為 -->
<button class="control-btn" onclick="fullscreenGame()">
    <i class="fa fa-external-link"></i> 全螢幕模式
</button>
```

### 2. 添加新的圖標按鈕：
```html
<button class="control-btn" onclick="someFunction()">
    <i class="fa fa-gamepad"></i> 遊戲設置
</button>
```

### 3. 在分數系統中使用圖標：
```html
<div class="score-display">
    <div class="current-score">
        <span class="score-label">
            <i class="fa fa-star"></i> 當前分數:
        </span>
        <span class="score-value" id="currentScore">0</span>
    </div>
</div>
```

## 圖標樣式自定義

### 1. 改變圖標顏色：
```css
.fa-trophy {
    color: #ffd700; /* 金色 */
}

.fa-heart {
    color: #ff4444; /* 紅色 */
}

.fa-star {
    color: #ffaa00; /* 橙色 */
}
```

### 2. 改變圖標大小：
```css
.fa-2x {
    font-size: 2em;
}

.fa-3x {
    font-size: 3em;
}

.large-icon {
    font-size: 1.5em;
}
```

### 3. 添加動畫效果：
```css
.rotating-icon {
    animation: spin 2s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
```

## 推薦的遊戲圖標組合

### 遊戲控制面板：
```html
<div class="game-controls">
    <button class="control-btn" onclick="playGame()">
        <i class="fa fa-play"></i> 開始遊戲
    </button>
    <button class="control-btn" onclick="pauseGame()">
        <i class="fa fa-pause"></i> 暫停
    </button>
    <button class="control-btn" onclick="restartGame()">
        <i class="fa fa-refresh"></i> 重新開始
    </button>
    <button class="control-btn" onclick="fullscreenGame()">
        <i class="fa fa-expand"></i> 全螢幕
    </button>
    <button class="control-btn" onclick="openSettings()">
        <i class="fa fa-cog"></i> 設置
    </button>
</div>
```

### 分數顯示：
```html
<div class="score-display">
    <div class="score-item">
        <i class="fa fa-star"></i>
        <span>分數: 1000</span>
    </div>
    <div class="score-item">
        <i class="fa fa-heart"></i>
        <span>生命: 3</span>
    </div>
    <div class="score-item">
        <i class="fa fa-clock-o"></i>
        <span>時間: 02:30</span>
    </div>
</div>
```

## 圖標資源

### 1. Font Awesome 官方網站：
- https://fontawesome.com/v4/icons/ (免費版本)
- 包含數千個圖標

### 2. Linearicons 官方網站：
- https://linearicons.com/free
- 簡潔的線性圖標

### 3. 圖標搜索工具：
- https://fontawesome.com/v4/search
- 可以搜索特定的圖標

## 注意事項

1. **圖標一致性**：建議在整個網站中使用同一種圖標風格
2. **可訪問性**：為圖標添加適當的 alt 文字或 aria-label
3. **響應式**：確保圖標在不同螢幕尺寸下都能正常顯示
4. **載入速度**：圖標庫已經載入，不會影響頁面載入速度

## 快速測試

您可以在瀏覽器控制台中測試圖標：
```javascript
// 創建一個測試圖標
const testIcon = document.createElement('i');
testIcon.className = 'fa fa-star';
testIcon.style.fontSize = '2em';
testIcon.style.color = 'gold';
document.body.appendChild(testIcon);
```
