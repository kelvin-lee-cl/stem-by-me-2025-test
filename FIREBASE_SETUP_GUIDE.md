# Firebase 設置指南

## 🚀 快速設置

### 1. 創建 Firebase 項目

1. 前往 [Firebase Console](https://console.firebase.google.com/)
2. 點擊「創建項目」
3. 輸入項目名稱（例如：`stem-by-me-2025`）
4. 選擇是否啟用 Google Analytics（可選）
5. 點擊「創建項目」

### 2. 獲取 Firebase 配置

1. 在 Firebase Console 中，點擊項目設置（齒輪圖標）
2. 在「一般」標籤中，滾動到「您的應用程式」部分
3. 點擊「Web」圖標（</>）
4. 輸入應用程式暱稱（例如：`stem-by-me-web`）
5. 點擊「註冊應用程式」
6. 複製 Firebase 配置對象

### 3. 更新配置文件

將 `game1.html` 中的 Firebase 配置替換為您的實際配置：

```javascript
const firebaseConfig = {
    apiKey: "您的_API_KEY",
    authDomain: "您的項目.firebaseapp.com",
    projectId: "您的項目ID",
    storageBucket: "您的項目.appspot.com",
    messagingSenderId: "您的發送者ID",
    appId: "您的應用程式ID"
};
```

### 4. 設置 Firestore 數據庫

1. 在 Firebase Console 中，點擊「Firestore Database」
2. 點擊「創建數據庫」
3. 選擇「以測試模式開始」（用於開發）
4. 選擇數據庫位置（建議選擇離用戶最近的區域）
5. 點擊「完成」

### 5. 設置安全規則

在 Firestore 中，點擊「規則」標籤，並設置以下規則：

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 允許讀取和寫入遊戲分數
    match /gameScores/{document} {
      allow read, write: if true; // 測試模式 - 生產環境需要更嚴格的規則
    }
  }
}
```

## 📊 數據結構

遊戲分數將以以下結構存儲在 Firestore 中：

```javascript
{
  playerName: "玩家名稱",
  score: 300,
  status: "win", // "win", "lose", "playing"
  gameTime: 45.5, // 遊戲時間（秒）
  timestamp: Timestamp, // 服務器時間戳
  gameId: "game1", // 遊戲標識符
  totalScore: 1500 // 玩家總分
}
```

## 🔧 功能說明

### 自動分數保存
- 遊戲勝利時自動保存分數到 Firebase
- 遊戲失敗時自動保存分數到 Firebase
- 包含玩家名稱、分數、遊戲時間等信息

### 排行榜功能
- 顯示前 5 名最高分數
- 實時更新排行榜
- 包含玩家名稱、分數和日期

### 玩家名稱管理
- 首次遊戲時提示輸入玩家名稱
- 名稱保存在本地存儲中
- 可重複使用相同名稱

## 🛠️ 故障排除

### 常見問題

1. **Firebase 初始化錯誤**
   - 檢查 API 密鑰是否正確
   - 確認項目 ID 是否匹配

2. **權限錯誤**
   - 檢查 Firestore 安全規則
   - 確認數據庫已創建

3. **網絡錯誤**
   - 檢查網絡連接
   - 確認 Firebase 服務可用

### 調試技巧

1. 打開瀏覽器開發者工具
2. 查看 Console 中的錯誤信息
3. 檢查 Network 標籤中的 Firebase 請求

## 🔒 安全建議

### 生產環境設置

1. **更新安全規則**：
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /gameScores/{document} {
      allow read: if true; // 允許所有人讀取排行榜
      allow write: if request.auth != null; // 只允許登錄用戶寫入
    }
  }
}
```

2. **啟用身份驗證**（可選）
3. **設置 API 密鑰限制**
4. **監控使用情況**

## 📱 移動端支持

Firebase 配置已優化支持移動設備：
- 響應式設計
- 觸控友好的界面
- 離線支持（可選）

## 🔄 更新和維護

### 定期檢查
- Firebase 使用量
- 安全規則
- 數據庫性能

### 備份策略
- 定期導出數據
- 設置自動備份
- 監控數據完整性
