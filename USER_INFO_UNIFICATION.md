# 用戶資訊統一獲取系統

## 概述

根據用戶要求「user name統一自動從checkpiont.index獲取」，已修改 `firebase-config.js` 中的 `getPlayerName()` 和 `getUserId()` 函數，使其從 `checkpiont.html` 登入系統中獲取用戶資訊，而不是從 `localStorage` 或生成隨機值。

## 修改內容

### 1. 修改的檔案
- `firebase-config.js` - 主要修改檔案
- `game1.html` 到 `game6.html` - 移除重複的 `getPlayerName()` 函數定義

### 2. 修改的函數

#### `getPlayerName()` 函數
**修改前：**
```javascript
function getPlayerName() {
    const playerName = localStorage.getItem('playerName');
    if (playerName) {
        return playerName;
    }
    
    // Generate a random player name if none exists
    const randomId = Math.floor(Math.random() * 1000) + 100;
    const defaultName = `玩家${randomId}`;
    localStorage.setItem('playerName', defaultName);
    return defaultName;
}
```

**修改後：**
```javascript
function getPlayerName() {
    // First try to get from checkpiont.html system
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        // Get user name from allUsers data
        const allUsers = JSON.parse(localStorage.getItem('scavengerHuntUsers') || '{}');
        if (allUsers[currentUser] && allUsers[currentUser].name) {
            return allUsers[currentUser].name;
        }
        // If no name found, use user ID as name
        return `玩家${currentUser}`;
    }
    
    // Fallback to localStorage
    const playerName = localStorage.getItem('playerName');
    if (playerName) {
        return playerName;
    }
    
    // Last resort: generate a random player name
    const randomId = Math.floor(Math.random() * 1000) + 100;
    const defaultName = `玩家${randomId}`;
    localStorage.setItem('playerName', defaultName);
    return defaultName;
}
```

#### `getUserId()` 函數
**修改前：**
```javascript
function getUserId() {
    const userId = localStorage.getItem('userId');
    if (userId) {
        return userId;
    }
    
    // Generate a random user ID if none exists
    const randomId = Math.floor(Math.random() * 1000) + 100;
    localStorage.setItem('userId', randomId.toString());
    return randomId.toString();
}
```

**修改後：**
```javascript
function getUserId() {
    // First try to get from checkpiont.html system
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        return currentUser;
    }
    
    // Fallback to localStorage
    const userId = localStorage.getItem('userId');
    if (userId) {
        return userId;
    }
    
    // Last resort: generate a random user ID
    const randomId = Math.floor(Math.random() * 1000) + 100;
    localStorage.setItem('userId', randomId.toString());
    return randomId.toString();
}
```

## 獲取邏輯

### 1. 優先級順序

#### 玩家名稱獲取順序：
1. **checkpiont.html 系統** - 從 `localStorage.getItem('currentUser')` 獲取用戶ID，然後從 `scavengerHuntUsers` 中獲取對應的用戶名稱
2. **localStorage 備用** - 從 `localStorage.getItem('playerName')` 獲取
3. **隨機生成** - 生成隨機玩家名稱作為最後備用方案

#### 用戶ID獲取順序：
1. **checkpiont.html 系統** - 直接從 `localStorage.getItem('currentUser')` 獲取
2. **localStorage 備用** - 從 `localStorage.getItem('userId')` 獲取
3. **隨機生成** - 生成隨機用戶ID作為最後備用方案

### 2. checkpiont.html 系統數據結構

#### localStorage 中的數據：
- `currentUser` - 當前登入的用戶ID（例如："101", "102", "201"）
- `scavengerHuntUsers` - 所有用戶的詳細資料（JSON格式）
- `isSignedIn` - 登入狀態標記

#### scavengerHuntUsers 數據結構：
```javascript
{
    "101": {
        "id": "101",
        "name": "玩家101",
        "group": "Junior",
        "completedLocations": [],
        "totalScore": 0,
        "createdAt": "2024-01-01T00:00:00.000Z",
        "lastPlayed": null
    },
    "201": {
        "id": "201", 
        "name": "玩家201",
        "group": "Senior",
        "completedLocations": [],
        "totalScore": 0,
        "createdAt": "2024-01-01T00:00:00.000Z",
        "lastPlayed": null
    }
    // ... 更多用戶
}
```

## 影響範圍

### 1. 受影響的遊戲
- `game1.html` 到 `game6.html` - 所有使用 `firebase-config.js` 的遊戲
- 這些遊戲現在會自動從 `checkpiont.html` 系統獲取用戶資訊
- **重要修改**: 移除了每個遊戲中重複的 `getPlayerName()` 函數定義，確保使用 `firebase-config.js` 中的統一函數

### 2. 分數上傳格式
遊戲分數上傳到 Firebase 時，現在會使用：
- **玩家名稱**: 從 `checkpiont.html` 系統獲取的用戶名稱
- **用戶ID**: 從 `checkpiont.html` 系統獲取的用戶ID

### 3. 數據一致性
- 所有遊戲的用戶資訊現在都來自同一個源頭（`checkpiont.html` 系統）
- 確保了用戶名稱和ID在不同遊戲間的一致性

## 測試

### 1. 測試頁面
創建了兩個測試頁面：

#### `test-user-info.html`
- 模擬 `checkpiont.html` 登入
- 測試用戶資訊獲取功能
- 查看 localStorage 內容
- 清除測試數據

#### `test-games-user-info.html`
- 模擬 `checkpiont.html` 登入
- 測試 Firebase Config 函數
- 模擬遊戲1-6的分數上傳格式
- 驗證用戶資訊統一獲取
- 查看 localStorage 內容
- 清除測試數據

### 2. 測試步驟

#### 基本測試 (`test-user-info.html`)
1. 訪問 `test-user-info.html`
2. 輸入有效的用戶ID（101-150 或 201-250）
3. 點擊「模擬登入」
4. 點擊「測試獲取用戶資訊」
5. 驗證獲取的用戶名稱和ID是否正確

#### 遊戲測試 (`test-games-user-info.html`)
1. 訪問 `test-games-user-info.html`
2. 輸入有效的用戶ID（101-150 或 201-250）
3. 點擊「模擬登入」
4. 點擊「測試 Firebase Config 函數」
5. 點擊各個遊戲的「測試上傳」按鈕
6. 驗證每個遊戲的用戶資訊是否統一
7. 檢查分數上傳格式是否符合標準

## 優勢

### 1. 統一性
- 所有遊戲使用相同的用戶資訊來源
- 避免了不同遊戲間用戶資訊不一致的問題

### 2. 用戶體驗
- 用戶在 `checkpiont.html` 登入後，所有遊戲都會自動使用相同的用戶資訊
- 無需在每個遊戲中重新輸入用戶資訊

### 3. 數據管理
- 集中化的用戶數據管理
- 更容易追蹤和管理用戶的遊戲記錄

### 4. 向後兼容性
- 保留了原有的備用機制
- 如果 `checkpiont.html` 系統不可用，仍可使用其他方式獲取用戶資訊

## 注意事項

### 1. 依賴關係
- 遊戲需要用戶先在 `checkpiont.html` 中登入
- 如果用戶直接訪問遊戲頁面而沒有登入，會使用備用機制

### 2. 數據同步
- 確保 `checkpiont.html` 系統正確設置了 `currentUser` 和 `scavengerHuntUsers`
- 用戶登出時需要清除相關的 localStorage 數據

### 3. 錯誤處理
- 函數包含了完整的錯誤處理機制
- 即使 `checkpiont.html` 系統出現問題，也不會影響遊戲的正常運行

## 未來改進

### 1. 可能的增強
- 添加用戶資訊驗證機制
- 實現跨頁面的實時用戶狀態同步
- 添加用戶資訊緩存機制以提升性能

### 2. 監控和日誌
- 添加詳細的用戶資訊獲取日誌
- 監控用戶資訊獲取的成功率
- 追蹤備用機制的使用情況
