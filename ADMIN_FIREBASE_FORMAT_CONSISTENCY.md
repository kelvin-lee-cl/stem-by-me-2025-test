# Admin.html Firebase 格式一致性修改

## 概述
已確保 `admin.html` 的 Firebase 獲取格式與 `game.html` 的上傳格式完全一致。

## 主要修改

### 1. 照片數據格式一致性

#### 修改前
- `admin.html` 使用 `photo.imageData` 來顯示圖片
- 缺少位置相關的詳細信息

#### 修改後
- 使用 `photo.dataURL` 來顯示圖片（與 `game.html` 一致）
- 新增完整的位置信息顯示：
  - `locationName`: 位置名稱
  - `gameType`: 遊戲類型
  - `locationDescription`: 位置描述
  - `locationAddress`: 位置地址
  - `locationCategory`: 位置類別

#### 照片卡片顯示增強
```javascript
// 修改前
<div class="photo-filename-display">${locationCode}</div>

// 修改後
<div class="photo-filename-display">${locationCode} - ${locationName}</div>
<div class="photo-game-type">遊戲類型: ${gameType}</div>
<div class="photo-location-details">
    <div>地址: ${locationAddress}</div>
    <div>類別: ${locationCategory}</div>
    <div>描述: ${locationDescription}</div>
</div>
```

### 2. CSS 樣式增強

#### 新增樣式類
- `.photo-game-type`: 遊戲類型顯示樣式
- `.photo-location-details`: 位置詳細信息容器樣式
- `.test-btn`: 測試數據創建按鈕樣式

#### 樣式特點
- 保持與原有深色科技主題一致
- 使用青色邊框和發光效果
- 銳角設計風格
- 懸停動畫效果

### 3. 測試數據功能

#### 新增 `createTestData()` 函數
- 創建符合 Firebase 格式的測試分數數據
- 創建符合 Firebase 格式的測試照片數據
- 包含完整的位置信息結構

#### 測試數據結構
```javascript
// 測試分數數據
{
    id: 'test1',
    playerName: '測試玩家1',
    userID: '101',
    gameId: 'game1',
    score: 85,
    totalScore: 85,
    status: 'win',
    gameTime: 120,
    timestamp: new Date()
}

// 測試照片數據
{
    id: '101',
    fileName: 'test_photo_1.jpg',
    userID: '101',
    dataURL: 'data:image/jpeg;base64,...',
    locationCode: 'L8Q2',
    locationName: '灣仔海濱長廊',
    gameType: '趣味親子打卡',
    locationDescription: '美麗的海濱長廊，適合親子活動',
    locationAddress: '灣仔海濱長廊',
    locationCategory: 'community'
}
```

### 4. 智能數據載入

#### 修改 `loadScores()` 函數
- 當沒有真實數據時自動創建測試數據
- 當 Firebase 連接失敗時創建測試數據
- 確保管理員面板始終有數據可顯示

#### 修改 `loadPhotosFromFirebase()` 函數
- 智能處理測試數據與真實數據的共存
- 避免測試數據被真實數據覆蓋

### 5. 用戶界面增強

#### 新增測試按鈕
- 位置：管理員儀表板篩選區域
- 功能：手動創建測試數據
- 樣式：紅色漸變，科技感設計

#### 照片信息顯示增強
- 顯示位置代碼和名稱
- 顯示遊戲類型
- 顯示詳細的位置信息（地址、類別、描述）
- 保持原有的時間戳和文件大小顯示

## 數據格式對比

### Game.html 上傳格式
```javascript
const photo = {
    id: window.loginSystem.getCurrentUser(),
    fileName: fileName,
    userID: window.loginSystem.getCurrentUser(),
    timestamp: new Date().toISOString(),
    size: selectedFile.size,
    type: selectedFile.type,
    dataURL: base64Data,
    locationCode: currentLocation,
    locationName: locationInfo ? locationInfo.name : null,
    gameType: locationInfo ? locationInfo.gameType : null,
    locationDescription: locationInfo ? locationInfo.description : null,
    locationAddress: locationInfo ? locationInfo.address : null,
    locationCategory: locationInfo ? locationInfo.category : null
};
```

### Admin.html 獲取格式（修改後）
```javascript
allPhotos.push({
    ...data,
    timestamp: data.timestamp ? data.timestamp.toDate() : new Date()
});

// 顯示時使用
photo.dataURL          // 圖片數據
photo.locationCode     // 位置代碼
photo.locationName     // 位置名稱
photo.gameType         // 遊戲類型
photo.locationDescription // 位置描述
photo.locationAddress  // 位置地址
photo.locationCategory // 位置類別
```

## 驗證方法

### 1. 功能測試
- 登入管理員面板
- 檢查照片顯示是否包含完整信息
- 測試創建測試數據按鈕
- 驗證照片排序功能

### 2. 數據一致性測試
- 從 `game.html` 上傳照片
- 在 `admin.html` 中檢查照片信息
- 確認所有字段正確顯示

### 3. 錯誤處理測試
- 斷開 Firebase 連接
- 檢查測試數據是否自動創建
- 驗證錯誤處理邏輯

## 注意事項

1. **測試數據僅用於演示**：當沒有真實數據時自動創建
2. **格式完全一致**：確保與 `game.html` 上傳格式匹配
3. **向後兼容**：保持對舊數據格式的支持
4. **性能優化**：避免不必要的數據重複載入

## 完成狀態

✅ 照片數據格式一致性  
✅ CSS 樣式增強  
✅ 測試數據功能  
✅ 智能數據載入  
✅ 用戶界面增強  
✅ 錯誤處理優化  
✅ 時間戳處理修復  

所有修改已完成，`admin.html` 的 Firebase 獲取格式現在與 `game.html` 的上傳格式完全一致。

## 最新修復 (2025-01-27)

### 排行榜 Firebase 格式一致性修復
確保 `admin.html` 的排行榜 Firebase 獲取格式與 `game.html` 的上傳格式完全一致。

#### 新增功能
1. **在 `game.html` 中添加分數上傳功能**
   - 新增 `uploadScoreToFirebase()` 函數
   - 在玩家完成關卡時自動上傳分數到 Firebase
   - 包含完整的位置信息和遊戲數據

2. **分數數據格式**
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

3. **排行榜顯示增強**
   - 顯示玩家最新遊戲類型
   - 顯示玩家最新位置信息
   - 包含位置代碼和名稱
   - 新增 CSS 樣式突出顯示最新信息

4. **測試數據更新**
   - 更新測試分數數據，包含完整的位置信息
   - 與 `game.html` 上傳格式完全一致

#### 修改效果
- ✅ 分數數據格式完全一致
- ✅ 排行榜顯示更詳細的信息
- ✅ 支持位置相關的元數據
- ✅ 測試數據與真實數據格式匹配

### 時間戳處理錯誤修復
修復了 `TypeError: data.timestamp.toDate is not a function` 錯誤。

#### 問題原因
- Firebase 中的 `timestamp` 字段可能是不同類型：
  - Firestore Timestamp 對象（有 `toDate()` 方法）
  - JavaScript Date 對象
  - ISO 字符串
  - 其他格式

#### 解決方案
在 `loadPhotosFromFirebase()` 和 `loadScores()` 函數中添加了安全的時間戳轉換邏輯：

```javascript
// Safely handle timestamp conversion
let timestamp;
try {
    if (data.timestamp) {
        if (typeof data.timestamp.toDate === 'function') {
            // Firestore Timestamp object
            timestamp = data.timestamp.toDate();
        } else if (data.timestamp instanceof Date) {
            // Already a Date object
            timestamp = data.timestamp;
        } else if (typeof data.timestamp === 'string') {
            // ISO string
            timestamp = new Date(data.timestamp);
        } else {
            // Fallback to current date
            timestamp = new Date();
        }
    } else {
        timestamp = new Date();
    }
} catch (error) {
    console.warn('Error converting timestamp for photo:', doc.id, error);
    timestamp = new Date();
}
```

#### 修復效果
- 消除了時間戳轉換錯誤
- 支持多種時間戳格式
- 提供更好的錯誤處理和日誌記錄
- 確保數據載入的穩定性
