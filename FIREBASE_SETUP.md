# Firebase 設定指南

## 📋 概述
此專案使用 Firebase 進行資料儲存：
- **Firestore**: 儲存照片資料（包含 Base64 格式的圖片）和使用者資料
- **Analytics**: 追蹤應用程式使用情況

## 🔧 設定步驟

### 1. Firebase 專案設定
- 專案 ID: `stem-by-me-app`
- Storage Bucket: `stem-by-me-app.firebasestorage.app`

### 2. 安全規則設定

#### Firestore 規則 (`firestore.rules`)
```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.time < timestamp.date(2025, 9, 20);
    }
  }
}
```



### 3. 設定 Firestore 規則

#### 方法 1: 使用 Firebase Console
1. 登入 [Firebase Console](https://console.firebase.google.com/)
2. 選擇專案 `stem-by-me-app`
3. 前往 Firestore > Rules
4. 貼上 `firestore.rules` 的內容
5. 發布規則

#### 方法 2: 使用 Firebase CLI
```bash
# 安裝 Firebase CLI
npm install -g firebase-tools

# 登入 Firebase
firebase login

# 初始化專案
firebase init

# 部署規則
firebase deploy --only firestore:rules
```

### 4. 測試連接

使用 `test-firebase-simple.html` 頁面測試：
1. 開啟 `test-firebase-simple.html`
2. 點擊「執行所有測試」
3. 檢查每個測試的結果

## 🚨 常見錯誤和解決方案

### 1. TypeError: photos.reduce is not a function
**原因**: 非同步函數沒有正確等待結果
**解決方案**: 
- 確保使用 `async/await`
- 檢查陣列是否為空

### 2. Firestore 權限錯誤
**錯誤訊息**: `Permission denied`
**解決方案**:
1. 確認 Firestore 規則已正確設定
2. 檢查規則是否已部署
3. 使用測試頁面驗證

### 3. Firebase 初始化錯誤
**解決方案**:
1. 檢查 `firebase-config.js` 中的配置
2. 確認 Firebase SDK 已正確載入
3. 檢查網路連接

### 4. 權限錯誤
**錯誤訊息**: `Permission denied`
**解決方案**:
1. 檢查 Firestore 規則
2. 確認規則已部署
3. 檢查專案設定

## 📁 檔案結構
```
stem-by-me-2024/
├── firebase-config.js      # Firebase 配置
├── firestore.rules         # Firestore 安全規則
├── test-firebase-simple.html  # 測試頁面
└── FIREBASE_SETUP.md      # 此說明文件
```

## 🔍 偵錯技巧

### 1. 檢查 Firebase 狀態
```javascript
// 在瀏覽器控制台中執行
console.log('Firebase:', window.firebase);
console.log('Firestore:', window.db);
console.log('Storage:', window.storage);
```

### 2. 測試連接
```javascript
// 測試 Firestore
window.db.collection('test').add({test: true})
  .then(() => console.log('✅ Firestore 正常'))
  .catch(err => console.error('❌ Firestore 錯誤:', err));

// 測試照片上傳 (Base64)
const testPhoto = {
  id: 'test',
  dataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
  userID: 'test'
};
window.db.collection('photos').doc('test').set(testPhoto)
  .then(() => console.log('✅ 照片上傳正常'))
  .catch(err => console.error('❌ 照片上傳錯誤:', err));
```

### 3. 檢查網路請求
1. 開啟瀏覽器開發者工具
2. 前往 Network 標籤
3. 嘗試上傳照片
4. 檢查是否有權限錯誤

## 📞 支援
如果遇到問題，請：
1. 檢查此說明文件
2. 使用測試頁面驗證
3. 查看瀏覽器控制台錯誤訊息
4. 確認 Firebase 專案設定
