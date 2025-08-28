# Firebase 上傳資料結構文檔

## 概述

本專案使用 Firebase Firestore 作為主要資料儲存，所有照片以 Base64 格式直接儲存在 Firestore 中，無需使用 Firebase Storage。

## 資料庫結構

### Firestore 集合結構

```
photos (集合)
├── {userID} (文件)
    ├── id: string                    // 照片唯一ID (與 userID 相同)
    ├── fileName: string              // 檔案名稱
    ├── originalName: string          // 原始檔案名稱
    ├── userID: string                // 使用者ID (作為文件ID)
    ├── timestamp: string             // 上傳時間戳
    ├── size: number                  // 檔案大小 (bytes)
    ├── type: string                  // MIME 類型
    ├── dataURL: string               // Base64 編碼的圖片資料
    ├── locationCode: string          // 位置代碼
    ├── locationName: string          // 位置名稱
    ├── locationDescription: string   // 位置描述
    ├── locationAddress: string       // 位置地址
    ├── locationCategory: string      // 位置類別 (community, sports, business, etc.)
    ├── coordinates: string           // GPS 座標
    ├── gameType: string              // 遊戲類型
    ├── score: number                 // 遊戲分數
    ├── uploadedAt: timestamp         // Firebase 上傳時間戳
    └── firebaseId: string            // Firebase 文件ID (與 userID 相同)
```

## 詳細資料結構

### 照片文件範例

```javascript
{
  // 基本資訊
  id: "101",                         // 唯一識別碼 (與 userID 相同)
  fileName: "101_1756309444621.jfif", // 檔案名稱
  originalName: "photo.jfif",         // 原始檔案名稱
  
  // 使用者資訊
  userID: "101",                     // 使用者ID (作為文件ID)
  
  // 時間資訊
  timestamp: "2025-01-27T10:30:44.621Z", // 本地時間戳
  uploadedAt: Timestamp,             // Firebase 伺服器時間戳
  
  // 檔案資訊
  size: 245760,                      // 檔案大小 (bytes)
  type: "image/jfif",                // MIME 類型
  
  // 圖片資料 (Base64)
  dataURL: "data:image/jfif;base64,/9j/4AAQSkZJRgABAQAAAQ...", // Base64 編碼
  
  // 位置資訊
  locationCode: "T7B4",              // 位置代碼
  locationName: "浸信會愛羣社會服務處3樓", // 位置名稱
  locationDescription: "位於灣仔區的社會服務中心，提供各種社區服務", // 位置描述
  locationAddress: "灣仔軒尼斯道15號", // 位置地址
  locationCategory: "community",     // 位置類別
  coordinates: "22.277509423557337, 114.17910754372873", // GPS 座標
  
  // 遊戲資訊
  gameType: "開發者遊戲挑戰",         // 遊戲類型
  score: 300,                        // 遊戲分數
  
  // Firebase 識別碼
  firebaseId: "101"                  // Firebase 文件ID (與 userID 相同)
}
```

## 上傳流程

### 1. 檔案選擇
```javascript
const file = event.target.files[0];
```

### 2. Base64 轉換
```javascript
const reader = new FileReader();
reader.onload = function(e) {
    const dataURL = e.target.result; // Base64 資料
    // 繼續處理...
};
```

### 3. 照片物件建立
```javascript
const photo = {
    id: userID,  // 使用 userID 作為照片ID
    fileName: `${userID}_${Date.now()}.${file.name.split('.').pop()}`,
    originalName: file.name,
    userID: userID,
    timestamp: new Date().toISOString(),
    size: file.size,
    type: file.type,
    dataURL: dataURL,  // Base64 資料
    locationCode: currentLocation,
    locationName: locationInfo ? locationInfo.name : null,
    locationDescription: locationInfo ? locationInfo.description : null,
    locationAddress: locationInfo ? locationInfo.address : null,
    locationCategory: locationInfo ? locationInfo.category : null,
    coordinates: locationInfo ? locationInfo.coordinates : null,
    gameType: locationInfo ? locationInfo.gameType : null,
    score: locationInfo ? locationInfo.score : null
};
```

### 4. Firestore 上傳
```javascript
await FirebaseUtils.uploadPhoto(photo);
```

## Firebase 工具函數

### uploadPhoto()
```javascript
async uploadPhoto(photo, file) {
    try {
        if (!db) {
            console.log('⚠️ Firebase not available, skipping upload');
            return false;
        }

        // 儲存照片資料到 Firestore (包含 Base64)
        const photoData = {
            ...photo,
            uploadedAt: firebase.firestore.FieldValue.serverTimestamp(),
            firebaseId: photo.id
        };

        // 將 Base64 資料儲存在 Firestore - 使用 userID 作為文件ID
        await db.collection('photos').doc(photo.userID).set(photoData);
        console.log('✅ Photo saved to Firestore (Base64 format)');

        return true;

    } catch (error) {
        console.error('❌ Error uploading to Firebase:', error);
        return false;
    }
}
```

### loadPhotos()
```javascript
async loadPhotos() {
    try {
        if (!db) {
            console.log('⚠️ Firebase not available');
            return [];
        }

        const snapshot = await db.collection('photos').get();
        const photos = [];

        snapshot.forEach(doc => {
            const photoData = doc.data();
            // 新增 Firebase 文件 ID
            photoData.firebaseDocId = doc.id;
            photos.push(photoData);
        });

        console.log(`📸 Loaded ${photos.length} photos from Firebase`);
        return photos;

    } catch (error) {
        console.error('❌ Error loading photos from Firebase:', error);
        return [];
    }
}
```

### deletePhoto()
```javascript
async deletePhoto(photoId) {
    try {
        if (!db) {
            console.log('⚠️ Firebase not available');
            return false;
        }

        // 從 Firestore 刪除 - 使用 userID
        await db.collection('photos').doc(userId).delete();
        console.log('✅ Photo deleted from Firebase');
        return true;

    } catch (error) {
        console.error('❌ Error deleting photo from Firebase:', error);
        return false;
    }
}
```

## 位置類別系統

### 位置類別定義
```javascript
const locationCategories = {
    'community': { color: '#3498db', icon: '🏘️', name: '社區設施' },
    'sports': { color: '#e74c3c', icon: '⚽', name: '運動設施' },
    'business': { color: '#2c3e50', icon: '🏢', name: '商業設施' },
    'landmark': { color: '#f39c12', icon: '🗽', name: '地標建築' },
    'playground': { color: '#27ae60', icon: '🎠', name: '遊樂設施' },
    'transport': { color: '#9b59b6', icon: '🚇', name: '交通設施' },
    'religious': { color: '#34495e', icon: '⛪', name: '宗教建築' },
    'commercial': { color: '#e67e22', icon: '🛍️', name: '商業區' },
    'entertainment': { color: '#1abc9c', icon: '🎭', name: '娛樂場所' },
    'special': { color: '#e91e63', icon: '⭐', name: '特殊任務' },
    'test': { color: '#95a5a6', icon: '🧪', name: '測試點' }
};
```

### 位置資訊結構
每個位置包含以下詳細資訊：
- **name**: 位置名稱
- **coordinates**: GPS 座標
- **gameType**: 遊戲類型
- **score**: 遊戲分數
- **description**: 位置描述
- **address**: 詳細地址
- **category**: 位置類別

## 查詢範例

### 根據使用者ID查詢照片
```javascript
const userPhotos = await db.collection('photos')
    .where('userID', '==', '101')
    .orderBy('timestamp', 'desc')
    .get();
```

### 根據位置查詢照片
```javascript
const locationPhotos = await db.collection('photos')
    .where('locationCode', '==', 'T7B4')
    .get();
```

### 根據遊戲類型查詢照片
```javascript
const gamePhotos = await db.collection('photos')
    .where('gameType', '==', '開發者遊戲挑戰')
    .get();
```

### 根據位置類別查詢照片
```javascript
const categoryPhotos = await db.collection('photos')
    .where('locationCategory', '==', 'landmark')
    .get();
```

### 根據地址查詢照片
```javascript
const addressPhotos = await db.collection('photos')
    .where('locationAddress', '==', '灣仔軒尼斯道15號')
    .get();
```

## 優點

✅ **簡化設定**: 無需設定 Storage CORS 政策  
✅ **集中管理**: 所有資料集中在 Firestore  
✅ **易於備份**: 單一資料庫，備份簡單  
✅ **查詢靈活**: 支援複雜查詢和篩選  
✅ **即時同步**: Firestore 的即時更新功能  

## 注意事項

⚠️ **檔案大小**: Base64 編碼會增加約 33% 的儲存空間  
⚠️ **文件限制**: Firestore 單一文件大小限制為 1MB  
⚠️ **成本考量**: Firestore 讀寫操作會產生費用  
⚠️ **圖片壓縮**: 建議壓縮圖片以減少資料大小  

## 效能優化建議

1. **圖片壓縮**: 上傳前壓縮圖片
2. **分頁載入**: 大量照片使用分頁載入
3. **快取策略**: 實作本地快取減少網路請求
4. **索引優化**: 為常用查詢欄位建立索引

## 錯誤處理

### 常見錯誤及解決方案

| 錯誤類型 | 原因 | 解決方案 |
|---------|------|----------|
| `Firebase not available` | Firebase 未初始化 | 檢查 Firebase 配置 |
| `Document too large` | 圖片太大 | 壓縮圖片或分割資料 |
| `Permission denied` | 安全規則限制 | 檢查 Firestore 規則 |
| `Network error` | 網路連線問題 | 檢查網路連線 |

## 安全規則範例

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /photos/{photoId} {
      allow read, write: if request.time < timestamp.date(2025, 9, 20);
    }
  }
}
```

## 測試

使用 `test-firebase-simple.html` 進行測試：

1. Firebase 初始化測試
2. Firestore 連線測試  
3. 照片上傳測試 (Base64)
4. 資料查詢測試

## 相關檔案

- `firebase-config.js`: Firebase 配置和工具函數
- `script.js`: 主要遊戲邏輯和照片處理
- `game.html`: 遊戲頁面，包含 Firebase SDK
- `test-firebase-simple.html`: Firebase 測試頁面
- `firestore.rules`: Firestore 安全規則
