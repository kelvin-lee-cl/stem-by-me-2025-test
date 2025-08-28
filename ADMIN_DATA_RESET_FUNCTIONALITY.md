# Admin 數據重置功能實現

## 概述
在 `admin.html` 中實現了完整的重置所有玩家數據和清除所有照片功能，這些功能會同步清除 Firebase 中的數據並更新 admin 排行榜和照片顯示。

## 功能實現

### 1. 重置所有玩家數據 (`resetAllUsers`)

**功能描述：**
- 清除 Firebase 中 `gameScores` 集合的所有分數記錄
- 清除 Firebase 中 `photos` 集合的所有照片數據
- 重置本地數據陣列
- 同步更新所有相關顯示

**實現細節：**
```javascript
async function resetAllUsers() {
    // Firebase 連接檢查
    if (!window.db) {
        showNotification('重置失敗', 'Firebase 未連接', 'error');
        return;
    }

    // 雙重確認對話框
    if (!confirm('確定要重置所有玩家數據嗎？此操作不可撤銷！\n\n這將清除：\n• 所有遊戲分數記錄\n• 所有玩家統計數據\n• 排行榜數據')) {
        return;
    }

    // 清除 gameScores 集合
    const scoresSnapshot = await window.db.collection('gameScores').get();
    const deletePromises = scoresSnapshot.docs.map(doc => doc.ref.delete());
    await Promise.all(deletePromises);

    // 清除 photos 集合
    const photosSnapshot = await window.db.collection('photos').get();
    const deletePhotoPromises = photosSnapshot.docs.map(doc => doc.ref.delete());
    await Promise.all(deletePhotoPromises);

    // 重置本地數據
    allScores = [];
    allPhotos = [];

    // 更新顯示
    updateStatistics();
    displayScores();
    loadAllPhotos();
    loadWinnersList();

    // 成功通知
    showNotification('重置成功', `已清除 ${scoresSnapshot.size} 條分數記錄和 ${photosSnapshot.size} 張照片`, 'success');
}
```

### 2. 清除所有照片 (`clearAllPhotos`)

**功能描述：**
- 清除 Firebase 中 `photos` 集合的所有照片數據
- 重置本地照片數據陣列
- 同步更新照片顯示和統計

**實現細節：**
```javascript
async function clearAllPhotos() {
    // Firebase 連接檢查
    if (!window.db) {
        showNotification('清除失敗', 'Firebase 未連接', 'error');
        return;
    }

    // 雙重確認對話框
    if (!confirm('確定要清除所有照片嗎？此操作不可撤銷！\n\n這將清除：\n• 所有上傳的照片\n• 照片相關的統計數據')) {
        return;
    }

    // 清除 photos 集合
    const photosSnapshot = await window.db.collection('photos').get();
    const deletePromises = photosSnapshot.docs.map(doc => doc.ref.delete());
    await Promise.all(deletePromises);

    // 重置本地照片數據
    allPhotos = [];

    // 更新顯示
    loadAllPhotos();
    updateStatistics();

    // 成功通知
    showNotification('清除成功', `已清除 ${photosSnapshot.size} 張照片`, 'success');
}
```

## 安全特性

### 1. 雙重確認機制
- 每個重置/清除操作都需要用戶二次確認
- 確認對話框詳細說明將要清除的內容
- 防止意外操作

### 2. Firebase 連接檢查
- 在執行操作前檢查 Firebase 連接狀態
- 如果未連接，顯示錯誤通知並停止操作

### 3. 錯誤處理
- 完整的 try-catch 錯誤處理
- 詳細的錯誤訊息顯示
- 控制台日誌記錄

## 同步更新機制

### 重置所有玩家數據後會更新：
1. **統計數據** (`updateStatistics()`)
   - 總玩家數
   - 活躍玩家數
   - 完成遊戲數
   - 總分數

2. **分數顯示** (`displayScores()`)
   - 分數列表
   - 篩選功能
   - 排序功能

3. **照片顯示** (`loadAllPhotos()`)
   - 照片網格
   - 照片統計
   - 排序選項

4. **排行榜** (`loadWinnersList()`)
   - 前五名玩家
   - 玩家統計
   - 最新遊戲信息

### 清除所有照片後會更新：
1. **照片顯示** (`loadAllPhotos()`)
   - 清空照片網格
   - 重置照片統計

2. **統計數據** (`updateStatistics()`)
   - 更新照片相關統計

## 用戶體驗

### 1. 進度通知
- 操作開始時顯示「重置中」或「清除中」通知
- 操作完成後顯示成功通知和清除數量

### 2. 詳細反饋
- 成功通知包含清除的記錄數量
- 錯誤通知包含具體錯誤訊息

### 3. 控制台日誌
- 詳細的操作日誌記錄
- 便於調試和監控

## 技術實現

### 1. 非同步操作
- 使用 `async/await` 處理 Firebase 操作
- 並行刪除多個文檔以提高效率

### 2. 批量刪除
- 使用 `Promise.all()` 並行執行刪除操作
- 提高大量數據刪除的效率

### 3. 數據一致性
- 同時清除 Firebase 和本地數據
- 確保數據同步

## 使用方式

### 重置所有玩家數據：
1. 點擊「🔄 重置所有玩家數據」按鈕
2. 在確認對話框中點擊「確定」
3. 等待操作完成

### 清除所有照片：
1. 點擊「🗑️ 清除所有照片」按鈕
2. 在確認對話框中點擊「確定」
3. 等待操作完成

## 注意事項

1. **不可撤銷操作**：這些操作會永久刪除數據，無法恢復
2. **需要 Firebase 連接**：操作需要穩定的 Firebase 連接
3. **大量數據處理**：對於大量數據，操作可能需要一些時間
4. **權限要求**：需要適當的 Firebase 權限才能執行刪除操作

## Firebase 連接問題診斷

### 常見問題：「Firebase 未連接」

如果遇到「Firebase 未連接」錯誤，請按以下步驟診斷：

#### 1. 使用診斷工具
打開 `firebase-connection-test.html` 頁面進行完整診斷：
- 測試 Firebase SDK 載入
- 測試 Firebase 初始化
- 測試 Firebase 連接
- 測試數據庫操作
- 執行完整診斷

#### 2. 檢查控制台日誌
在瀏覽器開發者工具中查看控制台日誌：
```javascript
// 檢查 Firebase 初始化狀態
console.log('window.db:', window.db);
console.log('firebase:', typeof firebase);
console.log('firebase.firestore:', typeof firebase.firestore);
```

#### 3. 常見解決方案

**問題 1：Firebase SDK 未載入**
- 檢查網絡連接
- 確認 Firebase SDK 腳本正確載入
- 檢查瀏覽器控制台是否有 404 錯誤

**問題 2：Firebase 初始化失敗**
- 檢查 `firebaseConfig` 配置是否正確
- 確認 API Key 和項目 ID 有效
- 檢查 Firebase 項目是否啟用

**問題 3：Firestore 權限問題**
- 檢查 Firestore 安全規則
- 確認規則允許讀寫操作
- 檢查項目設置中的 API 限制

**問題 4：網絡連接問題**
- 檢查網絡連接狀態
- 確認防火牆設置
- 檢查代理設置

#### 4. 增強診斷功能

在 `admin.html` 中已添加：
- `checkFirebaseConnection()` 函數：詳細檢查 Firebase 連接狀態
- 增強的錯誤訊息：提供更具體的錯誤信息
- 詳細的控制台日誌：便於調試問題

#### 5. 測試連接
```javascript
// 手動測試 Firebase 連接
function testFirebaseConnection() {
    if (!window.db) {
        console.error('❌ window.db is null or undefined');
        return false;
    }
    
    window.db.collection('test').doc('test').get().then(() => {
        console.log('✅ Firebase connection test successful');
    }).catch(error => {
        console.error('❌ Firebase connection test failed:', error);
    });
}
```

## 相關文件

- `admin.html` - 主要實現文件
- `firebase-connection-test.html` - Firebase 連接診斷工具
- `FIREBASE_UPLOAD_STRUCTURE.md` - Firebase 數據結構文檔
- `ADMIN_FIREBASE_FORMAT_CONSISTENCY.md` - Admin Firebase 格式一致性文檔
