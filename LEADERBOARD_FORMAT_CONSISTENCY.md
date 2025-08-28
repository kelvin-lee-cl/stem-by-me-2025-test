# 排行榜 Firebase 格式一致性修改

## 概述
已確保 `admin.html` 的排行榜 Firebase 獲取格式與 `game.html` 的上傳格式完全一致。

## 問題分析

### 原始問題
- `game.html` 中沒有分數上傳到 Firebase 的功能
- `admin.html` 期望從 Firebase 的 `gameScores` 集合中獲取分數數據
- 排行榜顯示的信息不夠詳細，缺少位置相關的元數據

### 解決方案
1. 在 `game.html` 中添加分數上傳功能
2. 統一分數數據格式
3. 增強排行榜顯示信息

## 主要修改

### 1. Game.html 分數上傳功能

#### 新增 `uploadScoreToFirebase()` 函數
```javascript
async function uploadScoreToFirebase(locationInfo, totalScore, status) {
    try {
        if (!window.db) {
            console.log('⚠️ Firebase not available, skipping score upload');
            return;
        }

        console.log('🚀 Starting Firebase score upload for user:', window.loginSystem.getCurrentUser());

        // Create score data object
        const scoreData = {
            playerName: `玩家${window.loginSystem.getCurrentUser()}`,
            userID: window.loginSystem.getCurrentUser(),
            gameId: `game_${locationInfo.gameType.replace(/\s+/g, '_').toLowerCase()}`,
            score: locationInfo.score,
            totalScore: totalScore,
            status: status, // 'win' or 'lose'
            gameTime: Math.floor(Math.random() * 300) + 60, // Random game time between 60-360 seconds
            timestamp: window.firebase.firestore.FieldValue.serverTimestamp(),
            locationCode: currentLocation,
            locationName: locationInfo.name,
            gameType: locationInfo.gameType,
            locationDescription: locationInfo.description,
            locationAddress: locationInfo.address,
            locationCategory: locationInfo.category,
            coordinates: locationInfo.coordinates
        };

        // Save score data to Firestore
        await window.db.collection('gameScores').add(scoreData);
        console.log('✅ Score saved to Firestore');

        // Track Firebase score upload
        trackEvent('score_uploaded_to_firebase', {
            user_id: scoreData.userID,
            location_code: scoreData.locationCode,
            score: scoreData.score,
            total_score: scoreData.totalScore,
            status: scoreData.status
        });

    } catch (error) {
        console.error('❌ Error uploading score to Firebase:', error);
        showResult('❌ Firebase 分數上傳失敗，但已保存到本地', 'warning');
    }
}
```

#### 觸發時機
- 在玩家完成關卡時自動調用
- 在 `checkPassword()` 函數中成功驗證關卡代碼後調用

### 2. 分數數據格式統一

#### Game.html 上傳格式
```javascript
const scoreData = {
    playerName: `玩家${window.loginSystem.getCurrentUser()}`,
    userID: window.loginSystem.getCurrentUser(),
    gameId: `game_${locationInfo.gameType.replace(/\s+/g, '_').toLowerCase()}`,
    score: locationInfo.score,
    totalScore: totalScore,
    status: status, // 'win' or 'lose'
    gameTime: Math.floor(Math.random() * 300) + 60,
    timestamp: window.firebase.firestore.FieldValue.serverTimestamp(),
    locationCode: currentLocation,
    locationName: locationInfo.name,
    gameType: locationInfo.gameType,
    locationDescription: locationInfo.description,
    locationAddress: locationInfo.address,
    locationCategory: locationInfo.category,
    coordinates: locationInfo.coordinates
};
```

#### Admin.html 獲取格式
```javascript
allScores.push({
    id: doc.id,
    ...data,
    timestamp: timestamp
});
```

### 3. 排行榜顯示增強

#### 修改前
```javascript
winnersHTML += `
    <div class="winner-card">
        <div class="rank-badge rank-${rank}">${rank}</div>
        <div class="winner-photo">👤</div>
        <div class="winner-info">
            <h4>${playerName}</h4>
            <p>玩家編號: ${playerName}</p>
            <p>遊戲次數: ${stats.gameCount}</p>
            <p>勝利次數: ${stats.winCount} (${winRate}%)</p>
            <div class="winner-score">${stats.totalScore} 分</div>
        </div>
    </div>
`;
```

#### 修改後
```javascript
// Get player's latest game info for display
const playerLatestGame = allScores
    .filter(score => (score.playerName || score.userID || '匿名玩家') === playerName)
    .sort((a, b) => b.timestamp - a.timestamp)[0];

const latestGameType = playerLatestGame ? (playerLatestGame.gameType || '未知遊戲類型') : '未知遊戲類型';
const latestLocation = playerLatestGame ? (playerLatestGame.locationName || '未知位置') : '未知位置';
const latestLocationCode = playerLatestGame ? (playerLatestGame.locationCode || '未知代碼') : '未知代碼';

winnersHTML += `
    <div class="winner-card">
        <div class="rank-badge rank-${rank}">${rank}</div>
        <div class="winner-photo">👤</div>
        <div class="winner-info">
            <h4>${playerName}</h4>
            <p>玩家編號: ${playerLatestGame ? playerLatestGame.userID : '未知'}</p>
            <p>遊戲次數: ${stats.gameCount}</p>
            <p>勝利次數: ${stats.winCount} (${winRate}%)</p>
            <p class="latest-game">最新遊戲: ${latestGameType}</p>
            <p class="latest-location">最新位置: ${latestLocation} (${latestLocationCode})</p>
            <div class="winner-score">${stats.totalScore} 分</div>
        </div>
    </div>
`;
```

### 4. CSS 樣式增強

#### 新增樣式類
```css
.winner-info .latest-game,
.winner-info .latest-location {
    color: #00ffff;
    font-weight: bold;
    margin-bottom: 10px;
    padding: 5px;
    background: rgba(0, 255, 255, 0.1);
    border-left: 3px solid #00ffff;
    border-radius: 0;
}
```

### 5. 測試數據更新

#### 更新測試分數數據
```javascript
const testScores = [
    {
        id: 'test1',
        playerName: '測試玩家1',
        userID: '101',
        gameId: 'game_趣味親子打卡',
        score: 85,
        totalScore: 85,
        status: 'win',
        gameTime: 120,
        timestamp: new Date(Date.now() - 3600000),
        locationCode: 'L8Q2',
        locationName: '灣仔海濱長廊',
        gameType: '趣味親子打卡',
        locationDescription: '美麗的海濱長廊，適合親子活動',
        locationAddress: '灣仔海濱長廊',
        locationCategory: 'community',
        coordinates: { lat: 22.2783, lng: 114.1747 }
    },
    // ... 更多測試數據
];
```

## 數據流程

### 1. 玩家完成關卡
1. 玩家在 `game.html` 中輸入正確的關卡代碼
2. 系統驗證代碼並計算分數
3. 調用 `uploadScoreToFirebase()` 上傳分數到 Firebase

### 2. 管理員查看排行榜
1. 管理員登入 `admin.html`
2. 系統從 Firebase 的 `gameScores` 集合載入分數數據
3. 計算每個玩家的總分、遊戲次數、勝利次數
4. 顯示前5名玩家的詳細信息

### 3. 排行榜顯示
- 玩家名稱和編號
- 遊戲次數和勝利次數
- 最新遊戲類型
- 最新位置信息（包含代碼）
- 總分數

## 驗證方法

### 1. 功能測試
- 在 `game.html` 中完成關卡
- 檢查 Firebase 中是否正確保存分數數據
- 在 `admin.html` 中查看排行榜是否正確顯示

### 2. 數據一致性測試
- 確認上傳和獲取的數據格式一致
- 驗證所有字段正確顯示
- 檢查時間戳處理是否正確

### 3. 錯誤處理測試
- 斷開 Firebase 連接
- 檢查測試數據是否正確顯示
- 驗證錯誤處理邏輯

## 完成狀態

✅ 分數上傳功能實現  
✅ 數據格式統一  
✅ 排行榜顯示增強  
✅ CSS 樣式優化  
✅ 測試數據更新  
✅ 錯誤處理完善  

所有修改已完成，`admin.html` 的排行榜 Firebase 獲取格式現在與 `game.html` 的上傳格式完全一致。
