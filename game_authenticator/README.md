# 遊戲認證系統 / Game Authentication System

## 概述 / Overview

這是一個安全的遊戲認證系統，需要密碼才能訪問遊戲。系統包含以下功能：

This is a secure game authentication system that requires a password to access games. The system includes the following features:

## 功能特色 / Features

### 🔐 安全認證 / Secure Authentication
- **密碼保護**: 使用密碼 "T7B4" 進行認證
- **Password Protection**: Uses password "T7B4" for authentication

### 🛡️ 安全機制 / Security Mechanisms
- **本地存儲**: 使用 localStorage 保存認證狀態
- **Local Storage**: Uses localStorage to save authentication status

### 🎨 用戶界面 / User Interface
- **現代設計**: 響應式設計，支援桌面和移動設備
- **Modern Design**: Responsive design supporting desktop and mobile devices
- **雙語支援**: 中文和英文界面
- **Bilingual Support**: Chinese and English interface
- **密碼顯示切換**: 可切換密碼顯示/隱藏
- **Password Toggle**: Toggle password visibility

### 🎮 遊戲訪問 / Game Access
- **個別認證**: 每個遊戲都有獨立的認證頁面
- **Individual Authentication**: Each game has its own authentication page
- **自動重定向**: 認證成功後自動跳轉到對應的遊戲頁面
- **Auto Redirect**: Automatically redirects to the corresponding game page after successful authentication
- **返回路徑**: 如果從其他遊戲頁面訪問，認證後會返回原頁面
- **Return Path**: If accessed from other game pages, returns to original page after authentication

## 使用方法 / Usage

### 1. 訪問認證系統 / Access Authentication System
```
http://your-domain/game_authenticator/
```
或直接訪問 / Or directly access:
```
http://your-domain/game_authenticator/auth.html
```

### 2. 輸入密碼 / Enter Password
- 在密碼欄位輸入: **T7B4**
- Enter in password field: **T7B4**

### 3. 自動跳轉 / Auto Redirect
- 認證成功後會自動跳轉到對應的遊戲頁面
- After successful authentication, automatically redirects to the corresponding game page
- 如果從其他遊戲頁面訪問，會返回原頁面
- If accessed from other game pages, returns to the original page

## 文件結構 / File Structure

```
game_authenticator/
├── auth1.html         # 遊戲1認證頁面 / Game 1 authentication page
├── auth2.html         # 遊戲2認證頁面 / Game 2 authentication page
├── auth3.html         # 遊戲3認證頁面 / Game 3 authentication page
├── auth4.html         # 遊戲4認證頁面 / Game 4 authentication page
├── auth5.html         # 遊戲5認證頁面 / Game 5 authentication page
├── auth6.html         # 遊戲6認證頁面 / Game 6 authentication page
├── auth-check1.js     # 認證檢查腳本 / Authentication check script
└── README.md          # 說明文件 / Documentation
```

## 安全設定 / Security Settings

### 密碼 / Password
- **預設密碼**: T7B4
- **Default Password**: T7B4



## 自定義設定 / Customization

### 修改密碼 / Change Password
在 `auth.html` 文件中找到以下行並修改：
In `auth.html` file, find and modify this line:

```javascript
const CORRECT_PASSWORD = 'T7B4'; // 修改為你的新密碼 / Change to your new password
```



## 瀏覽器相容性 / Browser Compatibility

- ✅ Chrome (推薦 / Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ 移動瀏覽器 / Mobile browsers

## 注意事項 / Notes

1. **本地存儲**: 認證狀態保存在瀏覽器的 localStorage 中
   - **Local Storage**: Authentication status is saved in browser's localStorage

2. **安全性**: 這是一個前端認證系統，密碼存儲在客戶端
   - **Security**: This is a frontend authentication system, password is stored client-side

3. **清除快取**: 如需清除認證狀態，清除瀏覽器快取或使用登出功能
   - **Clear Cache**: To clear authentication status, clear browser cache or use logout function

## 故障排除 / Troubleshooting

### 無法登入 / Cannot Login
1. 確認密碼正確: **T7B4**
   - Confirm correct password: **T7B4**
2. 檢查瀏覽器是否支援 localStorage
   - Check if browser supports localStorage
3. 清除瀏覽器快取後重試
   - Clear browser cache and try again

### 遊戲無法載入 / Games Cannot Load
1. 確認遊戲文件路徑正確
   - Confirm game file paths are correct
2. 檢查遊戲文件是否存在
   - Check if game files exist
3. 確認伺服器設定正確
   - Confirm server settings are correct

## 技術支援 / Technical Support

如有問題，請檢查：
If you have issues, please check:

1. 瀏覽器控制台錯誤訊息
   - Browser console error messages
2. 網路連線狀態
   - Network connection status
3. 文件權限設定
   - File permission settings
