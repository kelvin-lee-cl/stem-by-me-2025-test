# 自動同步 Firebase 數據功能

## 概述

在 `stem-by-me-2024/game.html` 中實現了自動同步當前玩家 Firebase 數據的功能，確保玩家的分數、完成位置和照片數據能夠實時同步並顯示在界面上。

## 功能特點

### 1. 自動同步機制
- **初始同步**: 頁面載入時自動同步當前玩家的 Firebase 數據
- **定期同步**: 每30秒自動同步一次數據
- **事件觸發同步**: 完成位置或上傳照片時立即同步
- **智能同步**: 只在用戶登入時進行同步

### 2. 數據同步範圍
- **分數數據**: 從 `gameScores` 集合獲取用戶的所有分數記錄
- **照片數據**: 從 `photos` 集合獲取用戶的照片記錄
- **完成位置**: 自動計算用戶已完成的位置
- **總分統計**: 自動計算用戶的總分

### 3. UI 更新
- **即時更新**: 同步後立即更新界面顯示
- **視覺反饋**: 顯示同步狀態和最後同步時間
- **進度指示**: 更新完成位置的視覺指示器
- **分數顯示**: 實時更新總分和進度

## 實現細節

### 核心函數

#### 1. 自動同步啟動函數
```javascript
function startAutoSyncCurrentPlayerData() {
    console.log('🔄 Starting auto-sync for current player Firebase data...');
    
    // 清除現有間隔
    if (autoSyncInterval) {
        clearInterval(autoSyncInterval);
    }

    // 獲取當前用戶
    const currentUser = window.loginSystem ? window.loginSystem.getCurrentUser() : null;
    if (!currentUser) {
        console.log('❌ No current user found, cannot start auto-sync');
        return;
    }

    console.log(`✅ Starting auto-sync for user: ${currentUser}`);

    // 初始同步
    syncCurrentPlayerData();

    // 設置定期同步 (每30秒)
    autoSyncInterval = setInterval(syncCurrentPlayerData, 30000);

    // 監聽遊戲事件
    window.addEventListener('locationCompleted', syncCurrentPlayerData);
    window.addEventListener('photoUploaded', syncCurrentPlayerData);
}
```

#### 2. 數據同步函數
```javascript
async function syncCurrentPlayerData() {
    try {
        const currentUser = window.loginSystem ? window.loginSystem.getCurrentUser() : null;
        if (!currentUser || !window.db) {
            console.log('⚠️ Cannot sync: No user or Firebase not available');
            return;
        }

        console.log(`🔄 Syncing Firebase data for user: ${currentUser}`);

        // 獲取用戶分數
        const scoresSnapshot = await window.db.collection('gameScores')
            .where('userID', '==', currentUser)
            .orderBy('timestamp', 'desc')
            .get();

        // 獲取用戶照片
        const photoDoc = await window.db.collection('photos').doc(currentUser).get();

        // 處理分數數據
        const scores = [];
        let totalScore = 0;
        const completedLocations = new Set();

        scoresSnapshot.forEach(doc => {
            const data = doc.data();
            scores.push({
                id: doc.id,
                ...data,
                timestamp: data.timestamp ? data.timestamp.toDate() : new Date()
            });
            totalScore += data.score || 0;
            if (data.locationCode) {
                completedLocations.add(data.locationCode);
            }
        });

        // 處理照片數據
        let photoData = null;
        if (photoDoc.exists) {
            const data = photoDoc.data();
            photoData = {
                ...data,
                uploadedAt: data.uploadedAt ? data.uploadedAt.toDate() : new Date()
            };
        }

        // 更新當前玩家數據
        currentPlayerData = {
            userID: currentUser,
            playerName: `玩家${currentUser}`,
            scores: scores,
            totalScore: totalScore,
            completedLocations: Array.from(completedLocations),
            photo: photoData,
            lastSync: new Date()
        };

        // 更新 localStorage
        updateLocalStorageWithFirebaseData(currentPlayerData);

        // 更新 UI
        updateUIWithCurrentPlayerData(currentPlayerData);

        console.log(`✅ Firebase sync completed for user: ${currentUser}`);
        console.log(`📊 Total score: ${totalScore}, Completed locations: ${completedLocations.size}`);

    } catch (error) {
        console.error('❌ Error syncing Firebase data:', error);
    }
}
```

#### 3. UI 更新函數
```javascript
function updateUIWithCurrentPlayerData(playerData) {
    try {
        // 更新分數顯示
        const scoreDisplay = document.getElementById('score-display');
        if (scoreDisplay) {
            scoreDisplay.innerHTML = `
                <div class="score-info">
                    <span class="score-label">總分：</span>
                    <span class="score-value">${playerData.totalScore}分</span>
                    <span class="progress-label">進度：</span>
                    <span class="progress-value">${playerData.completedLocations.length}/21</span>
                    <span class="sync-label">(已同步)</span>
                </div>
            `;
        }

        // 更新進度項目
        updateProgressItemsWithFirebaseData(playerData.completedLocations);

        // 更新標題
        const header = document.querySelector('.header p');
        if (header) {
            header.innerHTML = `探索灣仔海濱，完成挑戰，收集分數！<br><strong>當前玩家: ${playerData.playerName}</strong><br><small>總分: ${playerData.totalScore}分 | 完成: ${playerData.completedLocations.length}/21</small>`;
        }

        console.log('✅ Updated UI with current player data');

    } catch (error) {
        console.error('❌ Error updating UI:', error);
    }
}
```

### 事件觸發機制

#### 1. 完成位置事件
在 `script.js` 中的 `checkPassword` 函數中添加：
```javascript
// 觸發位置完成事件
window.dispatchEvent(new CustomEvent('locationCompleted', {
    detail: {
        locationCode: currentLocation,
        locationInfo: locationInfo,
        totalScore: newTotalScore,
        completedLocations: newCompletedLocations
    }
}));
```

#### 2. 照片上傳事件
在 `script.js` 中的 `uploadPhotoToFirebase` 函數中添加：
```javascript
// 觸發照片上傳事件
window.dispatchEvent(new CustomEvent('photoUploaded', {
    detail: {
        photo: photo,
        userID: photo.userID,
        locationCode: photo.locationCode
    }
}));
```

### CSS 樣式

#### 同步狀態樣式
```css
/* ===== AUTO-SYNC STYLES ===== */
.sync-label {
    color: #28a745;
    font-size: 10px;
    font-style: italic;
    margin-left: 5px;
}

.score-info {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}

.score-label, .progress-label {
    font-weight: 600;
    color: #2c3e50;
}

.score-value, .progress-value {
    font-weight: bold;
    color: #28a745;
}

.completion-indicator {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.7; }
    100% { opacity: 1; }
}
```

## 數據結構

### Firebase 數據格式

#### gameScores 集合
```javascript
{
    playerName: "玩家101",
    userID: "101",
    gameId: "game_趣味親子打卡",
    score: 80,
    totalScore: 160,
    status: "win",
    gameTime: 180,
    timestamp: Timestamp,
    locationCode: "F3C9",
    locationName: "軒尼斯道籃球場",
    gameType: "趣味親子打卡",
    locationDescription: "戶外籃球場，適合親子運動活動",
    locationAddress: "灣仔軒尼斯道",
    locationCategory: "sports",
    coordinates: "22.278071431224433, 114.17812866522151"
}
```

#### photos 集合
```javascript
{
    id: "photo_1234567890",
    userID: "101",
    locationCode: "L8Q2",
    fileName: "photo.jpg",
    fileSize: 1024000,
    imageData: "data:image/jpeg;base64,...",
    uploadedAt: Timestamp,
    locationName: "灣仔會展",
    gameType: "闖關點"
}
```

### localStorage 數據格式
```javascript
{
    "scavengerHuntUsers": {
        "101": {
            "name": "測試用戶101",
            "loginTime": "2024-01-01T10:00:00.000Z",
            "lastActivity": "2024-01-01T10:30:00.000Z",
            "totalScore": 160,
            "completedLocations": ["F3C9", "L8Q2"],
            "lastPlayed": "2024-01-01T10:30:00.000Z",
            "lastSync": "2024-01-01T10:30:00.000Z"
        }
    }
}
```

## 測試頁面

創建了 `test-auto-sync-firebase.html` 測試頁面，包含以下功能：

### 測試功能
1. **登入狀態管理**: 模擬用戶登入/登出
2. **自動同步控制**: 開始/停止自動同步
3. **手動同步**: 手動觸發一次同步
4. **遊戲事件模擬**: 模擬完成位置、上傳照片、上傳分數
5. **數據顯示**: 實時顯示同步的數據
6. **狀態監控**: 監控同步狀態和結果

### 使用方法
1. 打開 `test-auto-sync-firebase.html`
2. 點擊「模擬登入」按鈕登入用戶
3. 點擊「開始自動同步」啟動同步
4. 使用「模擬遊戲事件」按鈕測試各種場景
5. 觀察數據的實時更新

## 技術要點

### 1. 異步處理
- 使用 `async/await` 處理 Firebase 查詢
- 錯誤處理和重試機制
- 非阻塞的數據同步

### 2. 事件驅動
- 自定義事件觸發同步
- 事件監聽器管理
- 事件清理機制

### 3. 數據一致性
- 安全的時間戳轉換
- 數據驗證和清理
- 本地和遠程數據同步

### 4. 性能優化
- 定期同步而非實時監聽
- 智能的數據更新策略
- 記憶體管理和清理

## 維護說明

### 修改同步頻率
編輯 `startAutoSyncCurrentPlayerData()` 函數中的 `setInterval` 參數

### 添加新的同步數據
在 `syncCurrentPlayerData()` 函數中添加新的 Firebase 查詢

### 修改 UI 更新邏輯
編輯 `updateUIWithCurrentPlayerData()` 函數中的 UI 更新代碼

### 添加新的事件觸發
在相應的遊戲邏輯中添加 `CustomEvent` 觸發

### 測試功能
使用 `test-auto-sync-firebase.html` 進行功能測試

## 兼容性

- 與現有的 `login.js` 系統完全兼容
- 支持所有現代瀏覽器
- 響應式設計，支持移動設備
- 無障礙設計，支持鍵盤導航
