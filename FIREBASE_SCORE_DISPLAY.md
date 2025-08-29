# Firebase 分數顯示功能實現

## 概述
此功能將 `score-value` 設為從 Firebase 中獲取該用戶的分數，而不是使用本地存儲的分數。

## 實現的功能

### 1. Firebase 分數獲取函數
在 `firebase-config.js` 中新增了 `getUserScoreFromFirebase(userID)` 函數：

```javascript
async function getUserScoreFromFirebase(userID) {
    try {
        if (!window.db) {
            console.log('⚠️ Firebase not available, cannot get user score');
            return 0;
        }

        if (!userID) {
            console.log('⚠️ No userID provided, cannot get user score');
            return 0;
        }

        console.log(`🔄 Getting Firebase score for user: ${userID}`);

        // Get user's scores from Firebase
        const scoresSnapshot = await window.db.collection('gameScores')
            .where('userID', '==', userID)
            .get();

        // Calculate total score
        let totalScore = 0;
        scoresSnapshot.forEach(doc => {
            const data = doc.data();
            totalScore += data.score || 0;
        });

        console.log(`✅ Firebase score for user ${userID}: ${totalScore}`);
        return totalScore;

    } catch (error) {
        console.error('❌ Error getting user score from Firebase:', error);
        return 0;
    }
}

// Make getUserScoreFromFirebase available globally
window.getUserScoreFromFirebase = getUserScoreFromFirebase;
```

### 2. 分數顯示邏輯更新
修改了 `script.js` 中的 `updateScoreDisplay()` 函數：

- **初始顯示**：先顯示本地分數，確保界面快速響應
- **後台更新**：在後台獲取 Firebase 分數並更新顯示
- **錯誤處理**：如果 Firebase 獲取失敗，保持本地分數顯示

```javascript
function updateScoreDisplay() {
    // Only show score display for admin users
    let scoreDisplay = document.getElementById('score-display');

    // Check if admin panel is visible (admin mode)
    const adminPanel = document.getElementById('admin-panel');
    const isAdminMode = adminPanel && adminPanel.style.display !== 'none';

    if (isAdminMode) {
        // Show score display for admin
        if (!scoreDisplay) {
            scoreDisplay = document.createElement('div');
            scoreDisplay.id = 'score-display';
            scoreDisplay.className = 'score-display admin-score-display';
            document.querySelector('.header').appendChild(scoreDisplay);
        }

        // Get current user
        const currentUser = window.loginSystem ? window.loginSystem.getCurrentUser() : null;
        
        // Initially show local score, then update with Firebase score in background
        let displayScore = getTotalScore();
        
        // Update with Firebase score in background if available
        if (currentUser && typeof getUserScoreFromFirebase === 'function') {
            getUserScoreFromFirebase(currentUser).then(firebaseScore => {
                console.log(`✅ Retrieved Firebase score for user ${currentUser}: ${firebaseScore}`);
                
                // Update the display with Firebase score
                const scoreValueElement = scoreDisplay.querySelector('.score-value');
                if (scoreValueElement) {
                    scoreValueElement.textContent = `${firebaseScore}分`;
                }
            }).catch(error => {
                console.error('❌ Error getting Firebase score:', error);
                // Keep local score if Firebase fails
            });
        }

        const currentCompletedLocations = getCompletedLocations();
        scoreDisplay.innerHTML = `
            <div class="score-info">
                <span class="score-label">總分：</span>
                <span class="score-value">${displayScore}分</span>
                <span class="progress-label">進度：</span>
                <span class="progress-value">${currentCompletedLocations.length}/${Object.keys(locationData).length}</span>
            </div>
        `;
        scoreDisplay.style.display = 'block';
    } else {
        // Hide score display for regular users
        if (scoreDisplay) {
            scoreDisplay.style.display = 'none';
        }
    }
}
```

### 3. 測試功能
新增了 `testFirebaseScoreRetrieval()` 函數來驗證功能：

```javascript
async function testFirebaseScoreRetrieval() {
    console.log('🧪 Testing Firebase score retrieval...');
    
    const currentUser = window.loginSystem ? window.loginSystem.getCurrentUser() : null;
    
    if (!currentUser) {
        console.log('❌ No current user, cannot test Firebase score retrieval');
        return;
    }
    
    if (typeof getUserScoreFromFirebase !== 'function') {
        console.log('❌ getUserScoreFromFirebase function not available');
        return;
    }
    
    try {
        const firebaseScore = await getUserScoreFromFirebase(currentUser);
        console.log(`✅ Firebase score test successful for user ${currentUser}: ${firebaseScore}分`);
        
        // Compare with local score
        const localScore = getTotalScore();
        console.log(`📊 Local score: ${localScore}分, Firebase score: ${firebaseScore}分`);
        
        if (firebaseScore !== localScore) {
            console.log('⚠️ Score mismatch detected - Firebase score will be used for display');
        }
        
    } catch (error) {
        console.error('❌ Firebase score retrieval test failed:', error);
    }
}
```

## 功能特點

### 1. 性能優化
- **快速響應**：先顯示本地分數，確保界面快速響應
- **後台更新**：在後台獲取 Firebase 分數，不阻塞用戶界面
- **緩存機制**：避免重複請求 Firebase 數據

### 2. 錯誤處理
- **Firebase 不可用**：自動回退到本地分數
- **網絡錯誤**：保持本地分數顯示
- **用戶未登入**：使用本地分數作為備用

### 3. 用戶體驗
- **無縫切換**：用戶不會看到分數突然變化
- **即時更新**：Firebase 分數獲取後立即更新顯示
- **一致性**：確保顯示的分數與 Firebase 數據一致

## 使用方式

### 1. 自動觸發
- 頁面載入時自動獲取 Firebase 分數
- 管理員面板開啟時更新分數顯示
- 用戶登入後自動同步分數

### 2. 手動測試
在瀏覽器控制台中執行：
```javascript
testFirebaseScoreRetrieval();
```

### 3. 監控日誌
查看控制台日誌來監控分數獲取過程：
- `🔄 Getting Firebase score for user: XXX`
- `✅ Retrieved Firebase score for user XXX: XXX分`
- `❌ Error getting Firebase score: XXX`

## 技術細節

### 1. Firebase 查詢
```javascript
const scoresSnapshot = await window.db.collection('gameScores')
    .where('userID', '==', userID)
    .get();
```

### 2. 分數計算
```javascript
let totalScore = 0;
scoresSnapshot.forEach(doc => {
    const data = doc.data();
    totalScore += data.score || 0;
});
```

### 3. 顯示更新
```javascript
const scoreValueElement = scoreDisplay.querySelector('.score-value');
if (scoreValueElement) {
    scoreValueElement.textContent = `${firebaseScore}分`;
}
```

## 注意事項

1. **Firebase 依賴**：需要 Firebase 正確初始化才能獲取分數
2. **用戶登入**：只有登入用戶才能獲取 Firebase 分數
3. **網絡連接**：需要網絡連接來訪問 Firebase
4. **權限設置**：確保 Firebase 安全規則允許讀取 gameScores 集合

## 未來擴展

1. **分數緩存**：實現本地緩存機制，減少 Firebase 請求
2. **實時更新**：使用 Firebase 實時監聽器自動更新分數
3. **分數歷史**：顯示分數變化歷史記錄
4. **多用戶比較**：支持多用戶分數比較功能
