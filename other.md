# STEM-by-ME 2025 - 遊戲認證與分數系統

## 📋 項目概述

STEM-by-ME 2025 是一個包含6個教育遊戲的互動網站，具有完整的認證系統和自動分數記錄功能。所有遊戲都通過密碼保護，並自動將分數保存到Firebase數據庫。

## 🎮 遊戲列表

| 遊戲 | 認證頁面 | 密碼 | 跳轉目標 | 勝利分數 |
|------|----------|------|----------|----------|
| 遊戲1 | auth1.html | T7B4 | game1.html | 300分 |
| 遊戲2 | auth2.html | R1H7 | game2.html | 300分 |
| 遊戲3 | auth3.html | B5Y9 | game3.html | 300分 |
| 遊戲4 | auth4.html | K6R2 | game4.html | 300分 |
| 遊戲5 | auth5.html | E558 | game5.html | 300分 |
| 遊戲6 | auth6.html | U4W9 | game6.html | 300分 |

## 🔐 管理員系統

| 功能 | 頁面 | 密碼 | 功能說明 |
|------|------|------|----------|
| 管理員控制台 | admin.html | ADMIN2025 | 查看所有玩家分數統計 |

## 🏗️ 系統架構

### 文件結構
```
stem-by-me-2025/
├── maze-game.html                    # 遊戲選擇頁面
├── game1.html ~ game6.html           # 遊戲主頁面
├── games/
│   ├── game1/ ~ game6/               # GDevelop遊戲文件
│   │   ├── index.html               # 遊戲iframe頁面 (含通信功能)
│   │   └── code0.js                 # 遊戲邏輯 (含分數系統)
├── game_authenticator/
│   ├── auth1.html ~ auth6.html      # 認證頁面
│   └── README.md                    # 認證系統說明
├── firebase-config.js               # Firebase配置
├── admin.html                       # 管理員控制台
└── README.md                        # 本文件
```

## 🔧 技術實現

### 1. 遊戲分數系統

#### GDevelop遊戲邏輯修改 (`games/gameX/code0.js`)
- **分數更新**: 在關鍵遊戲事件中調用 `window.updateScore(currentScore)`
- **勝利條件**: 達到勝利條件時調用 `window.gameWin(300)`
- **失敗條件**: 達到失敗條件時調用 `window.gameLose(0)`

```javascript
// 示例：分數更新
if (typeof window.updateScore === 'function') {
    window.updateScore(currentScore);
}

// 示例：勝利條件
if (typeof window.gameWin === 'function') {
    window.gameWin(300);
}
```

#### 遊戲iframe通信 (`games/gameX/index.html`)
- 實現 `postMessage` 通信機制
- 定義全局函數供GDevelop調用
- 處理遊戲開始、分數更新、勝利/失敗事件

```javascript
window.updateScore = function(score) { 
    sendMessageToParent('score_update', { score: score }); 
};
window.gameWin = function(score) { 
    sendMessageToParent('game_win', { score: score, gameTime: gameTime }); 
};
```

### 2. 遊戲主頁面系統

#### 分數處理 (`gameX.html`)
- **移除獎勵分數**: 所有遊戲統一為300分勝利分數
- **Firebase整合**: 自動保存分數到Firebase Firestore
- **全螢幕通知**: 支援全螢幕模式下的通知顯示
- **分數歷史**: 本地存儲遊戲歷史記錄

```javascript
async function handleGameWin(score, gameTime) {
    gameStatus = 'win';
    currentScore = score;
    totalScore += score; // 直接使用分數，無獎勵
    showNotification(`🎉 恭喜獲勝！獲得 ${score} 分`, 'success');
    await sendScoreToFirebase(score, 'win', gameTime);
}
```

### 3. 認證系統

#### 認證頁面 (`game_authenticator/authX.html`)
- **獨立密碼**: 每個遊戲有獨立的密碼
- **無保持登入**: 每次訪問都需要重新輸入密碼
- **自動跳轉**: 認證成功後自動跳轉到對應遊戲
- **響應式設計**: 支援各種設備尺寸

```javascript
const CORRECT_PASSWORD = 'T7B4'; // 每個遊戲不同
function checkAuthStatus() {
    // 無保持登入功能，總是顯示登入表單
    return;
}
```

### 4. 管理員系統

#### 管理員控制台 (`admin.html`)
- **密碼保護**: 使用密碼 `ADMIN2025` 登入
- **分數統計**: 顯示總玩家數、總遊戲次數、勝利次數、平均分數
- **篩選功能**: 按遊戲、狀態、玩家名稱篩選
- **實時數據**: 從Firebase即時載入所有分數記錄
- **響應式設計**: 支援各種設備尺寸

```javascript
// 管理員密碼驗證
const ADMIN_PASSWORD = 'ADMIN2025';
function login() {
    if (password === ADMIN_PASSWORD) {
        // 顯示管理員儀表板
        showDashboard();
        loadScores();
    }
}
```

### 5. 遊戲選擇頁面

#### 導航系統 (`maze-game.html`)
- **遊戲預覽**: 點擊遊戲卡片顯示預覽
- **認證跳轉**: 點擊"開始遊戲"跳轉到對應認證頁面
- **路徑修正**: 修正認證頁面路徑為相對路徑

```html
<div class="game-card" data-game="./game_authenticator/auth1.html">
    <!-- 遊戲卡片內容 -->
</div>
```

## 🔄 用戶體驗流程

1. **訪問遊戲選擇頁面** (`maze-game.html`)
2. **點擊遊戲卡片** → 顯示遊戲預覽lightbox
3. **點擊"開始遊戲"** → 跳轉到對應認證頁面
4. **輸入密碼** → 驗證成功後跳轉到遊戲
5. **完成遊戲** → 自動記錄分數到Firebase
6. **查看分數** → 在遊戲頁面查看分數歷史
7. **返回選擇頁面** → 可選擇其他遊戲

### 管理員流程
1. **訪問管理員頁面** (`admin.html`)
2. **輸入管理員密碼** → 驗證成功後進入控制台
3. **查看統計數據** → 總玩家數、遊戲次數、勝利次數、平均分數
4. **篩選數據** → 按遊戲、狀態、玩家名稱篩選
5. **重新整理** → 即時更新最新分數數據
6. **登出** → 清除認證狀態

## 🔒 安全特性

- **密碼保護**: 每個遊戲都有獨立的密碼
- **無保持登入**: 每次訪問都需要重新認證
- **無嘗試限制**: 簡化的認證流程
- **無會話管理**: 提高安全性
- **管理員密碼**: 獨立的管理員密碼保護

## 📊 分數系統

### 分數標準
- **勝利分數**: 所有遊戲統一為300分
- **失敗分數**: 0分
- **無獎勵分數**: 移除所有獎勵計算

### 數據存儲
- **Firebase Firestore**: 雲端分數存儲
- **本地存儲**: 遊戲歷史記錄
- **實時更新**: 分數變化即時顯示

## 🎨 界面特性

### 響應式設計
- **桌面端**: 完整功能體驗
- **平板端**: 適配中等螢幕
- **手機端**: 觸控優化

### 視覺效果
- **漸變背景**: 現代化設計
- **動畫效果**: 流暢的過渡動畫
- **通知系統**: 全螢幕支援的通知

## 🚀 部署說明

### 本地開發
1. 確保所有文件在正確的目錄結構中
2. 配置Firebase連接 (`firebase-config.js`)
3. 使用本地服務器運行 (如 `python -m http.server 8000`)

### 生產部署
1. 上傳所有文件到Web服務器
2. 確保Firebase配置正確
3. 測試所有遊戲的認證和分數功能

## 🔧 維護指南

### 修改密碼
編輯對應的認證頁面中的 `CORRECT_PASSWORD` 常量：
```javascript
const CORRECT_PASSWORD = 'NEW_PASSWORD';
```

### 修改管理員密碼
編輯 `admin.html` 中的 `ADMIN_PASSWORD` 常量：
```javascript
const ADMIN_PASSWORD = 'NEW_ADMIN_PASSWORD';
```

### 添加新遊戲
1. 創建新的遊戲文件夾 (`games/game7/`)
2. 創建對應的認證頁面 (`game_authenticator/auth7.html`)
3. 更新遊戲選擇頁面的遊戲卡片
4. 修改GDevelop遊戲邏輯添加分數系統

### 修改分數標準
編輯遊戲主頁面中的分數處理邏輯：
```javascript
window.gameWin(300); // 修改勝利分數
```

## 📝 更新日誌

### 主要更改
- ✅ 整合所有遊戲的分數系統
- ✅ 建立完整的認證系統
- ✅ 實現Firebase分數存儲
- ✅ 統一分數標準為300分
- ✅ 移除保持登入功能
- ✅ 修復導航路徑問題
- ✅ 添加全螢幕通知支援
- ✅ 優化響應式設計
- ✅ 創建管理員控制台
- ✅ 實現分數統計和篩選功能

### 技術改進
- 使用 `postMessage` API 實現iframe通信
- 實現無狀態認證系統
- 優化Firebase數據結構
- 改進錯誤處理機制

## 🤝 貢獻指南

如需修改或擴展功能，請：
1. 保持現有的代碼結構
2. 測試所有相關功能
3. 更新文檔說明
4. 確保響應式設計兼容性

## 📞 聯繫信息

如有問題或建議，請聯繫開發團隊。

---

**STEM-by-ME 2025** - 讓編程教育更有趣！🎮✨
