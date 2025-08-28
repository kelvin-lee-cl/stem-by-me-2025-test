# 照片ID變更說明

## 變更概述

已將照片ID從時間戳格式改為使用使用者ID，這樣每個使用者只會有一個照片文件，後續上傳會覆蓋之前的照片。

## 變更前後對比

### 變更前
```javascript
// 照片ID使用時間戳
id: Date.now().toString(),  // 例如: "1756309444621"
```

### 變更後
```javascript
// 照片ID使用使用者ID
id: window.loginSystem.getCurrentUser(),  // 例如: "101"
```

## 影響的檔案

### 1. script.js
- **savePhotoToLocalStorage()**: 照片物件建立時使用 userID 作為 id
- **uploadPhotoToFirebase()**: Firestore 文件ID使用 userID

### 2. firebase-config.js
- **uploadPhoto()**: Firestore 文件路徑改為使用 userID
- **deletePhoto()**: 刪除時使用 userID 作為文件ID

### 3. test-firebase-simple.html
- 測試照片物件使用固定的 userID 作為 id
- 刪除測試時使用 userID

### 4. FIREBASE_UPLOAD_STRUCTURE.md
- 更新了資料結構說明
- 更新了範例程式碼

## Firestore 資料結構變更

### 變更前
```
photos/
├── 1756309444621/     # 時間戳作為文件ID
├── 1756309444630/     # 每次上傳都是新文件
└── 1756309444640/
```

### 變更後
```
photos/
├── 101/              # 使用者ID作為文件ID
├── 102/              # 每個使用者一個文件
└── 103/
```

## 優點

✅ **簡化管理**: 每個使用者只有一個照片文件  
✅ **避免重複**: 不會累積多個照片文件  
✅ **節省空間**: 減少 Firestore 文件數量  
✅ **查詢簡化**: 直接使用 userID 查詢  

## 注意事項

⚠️ **覆蓋行為**: 新上傳會覆蓋舊照片  
⚠️ **歷史資料**: 舊的時間戳格式照片需要手動清理  
⚠️ **備份建議**: 重要照片建議額外備份  

## 資料遷移建議

如果需要保留舊的時間戳格式照片，建議：

1. **備份現有資料**: 在變更前導出所有照片
2. **清理舊資料**: 刪除時間戳格式的文件
3. **重新上傳**: 讓使用者重新上傳照片

## 測試

使用 `test-firebase-simple.html` 測試新的照片ID格式：

1. 照片上傳測試會使用 `test_user` 作為 ID
2. 上傳成功後會自動清理測試資料
3. 確認 Firestore 中文件ID為 `test_user`

## 相關查詢

### 根據使用者ID查詢照片
```javascript
const userPhoto = await db.collection('photos').doc(userID).get();
```

### 檢查使用者是否有照片
```javascript
const doc = await db.collection('photos').doc(userID).get();
if (doc.exists) {
    console.log('使用者有照片');
} else {
    console.log('使用者沒有照片');
}
```
