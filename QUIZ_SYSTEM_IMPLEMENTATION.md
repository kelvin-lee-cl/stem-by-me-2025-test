# 📝 問卷系統實現文檔

## 🎯 功能概述

問卷系統已成功實現，與照片上載功能保持一致的顯示方式和用戶體驗。當用戶選擇難題解答挑戰類型的地點時，問卷會自動顯示。

## 🏗️ 實現架構

### 1. HTML結構
- **問卷區域**: `quiz-section` - 主要的問卷容器
- **問卷標題**: `quiz-header` - 包含標題和切換按鈕
- **問卷描述**: `quiz-description` - 問卷說明文字
- **問卷區域**: `quiz-area` - 載入狀態顯示區域
- **問卷內容**: `quiz-content` - 動態載入的問卷問題
- **問卷按鈕**: `quiz-buttons` - 提交和取消按鈕

### 2. CSS樣式
- **一致性設計**: 與照片上載區域保持相同的視覺風格
- **響應式佈局**: 適配不同螢幕尺寸
- **狀態指示**: 載入中、準備就緒等不同狀態的視覺反饋
- **互動效果**: 選項懸停、選中等動畫效果

### 3. JavaScript邏輯
- **問卷數據**: `quizData` 對象存儲各位置的問卷內容
- **狀態管理**: `currentQuiz` 和 `quizAnswers` 管理當前問卷狀態
- **事件處理**: 選項選擇、提交、取消等用戶互動
- **自動顯示**: 根據位置類型自動顯示/隱藏問卷

## 📋 功能特點

### 1. 自動顯示邏輯
```javascript
// 當選擇難題解答挑戰類型的位置時自動顯示問卷
if (locationInfo.gameType === '難題解答挑戰') {
    showQuizForLocation(password);
} else {
    hideQuiz();
}
```

### 2. 載入動畫
- 問卷載入時顯示載入狀態
- 1秒後顯示問卷內容
- 視覺反饋讓用戶了解系統狀態

### 3. 互動體驗
- 點擊選項自動選中
- 同一問題只能選擇一個答案
- 提交前檢查是否所有問題都已回答

### 4. 評分系統
- 自動計算正確答案數量
- 60分為及格標準
- 顯示詳細的結果反饋

## 🎮 問卷內容

### 當前實現的問卷
**位置**: M9J3 (渣甸坊)
**類型**: 難題解答挑戰

#### 問題1: 渣甸坊主要經營什麼類型的商品？
- 電子產品
- **服裝和時尚用品** ✓
- 食品和飲料
- 家居用品

#### 問題2: 渣甸坊的營業時間通常是？
- 早上6點到晚上6點
- 早上8點到晚上8點
- **早上10點到晚上10點** ✓
- 24小時營業

#### 問題3: 渣甸坊的特色是什麼？
- 高檔奢侈品
- **平價時尚商品** ✓
- 古董收藏品
- 進口食品

## 🔧 技術實現

### 1. 問卷數據結構
```javascript
const quizData = {
    'M9J3': {
        title: '渣甸坊問卷調查',
        description: '請回答以下關於渣甸坊的問題',
        questions: [
            {
                id: 1,
                question: '問題內容',
                options: [
                    { id: 'a', text: '選項A', correct: false },
                    { id: 'b', text: '選項B', correct: true }
                ]
            }
        ]
    }
};
```

### 2. 核心函數
- `showQuizForLocation(locationCode)`: 顯示指定位置的問卷
- `hideQuiz()`: 隱藏問卷
- `loadQuizContent(locationCode)`: 載入問卷內容
- `generateQuizHTML(quiz)`: 生成問卷HTML
- `submitQuiz()`: 提交問卷並計算分數
- `showQuizResults(score, correctAnswers, totalQuestions, isPassed)`: 顯示結果

### 3. 事件追蹤
```javascript
trackEvent('quiz_displayed', {
    location_code: locationCode,
    location_name: locationData[locationCode]?.name || 'Unknown'
});

trackEvent('quiz_submitted', {
    location_code: currentQuiz,
    location_name: locationData[currentQuiz]?.name || 'Unknown',
    score: score,
    correct_answers: correctAnswers,
    total_questions: totalQuestions,
    passed: isPassed
});
```

## 🎨 視覺設計

### 1. 與照片上載的一致性
- 相同的卡片樣式和陰影效果
- 一致的邊框和圓角設計
- 統一的按鈕樣式和間距

### 2. 狀態指示
- **載入中**: 藍色邊框和背景
- **準備就緒**: 綠色邊框和背景
- **選中狀態**: 藍色背景和白色文字

### 3. 響應式設計
- 適配桌面和移動設備
- 彈性佈局確保內容正確顯示
- 觸控友好的按鈕尺寸

## 🚀 使用流程

### 1. 用戶操作流程
1. 用戶選擇難題解答挑戰類型的位置
2. 問卷自動顯示並開始載入
3. 載入完成後顯示問卷問題
4. 用戶選擇答案（可修改）
5. 點擊提交按鈕
6. 系統計算分數並顯示結果

### 2. 管理員功能
- `toggleQuizSection()`: 切換問卷區域顯示/隱藏
- 可在控制台調用進行測試

## 📊 數據追蹤

### 1. 顯示事件
- 位置代碼
- 位置名稱
- 顯示時間

### 2. 提交事件
- 位置代碼和名稱
- 得分和正確答案數量
- 總問題數和是否通過
- 提交時間

## 🔮 未來擴展

### 1. 更多問卷
- 為其他難題解答挑戰位置添加問卷
- 支持不同類型的問題（多選、填空等）

### 2. 功能增強
- 問卷結果保存到Firebase
- 問卷統計和分析
- 自定義問卷創建工具

### 3. 用戶體驗
- 問卷進度指示器
- 答案回顧功能
- 問卷完成證書

## ✅ 測試清單

- [x] 問卷自動顯示功能
- [x] 問卷載入動畫
- [x] 選項選擇功能
- [x] 提交驗證
- [x] 分數計算
- [x] 結果顯示
- [x] 取消功能
- [x] 響應式設計
- [x] 事件追蹤

## 📝 總結

問卷系統已成功實現並與現有的照片上載功能完美整合。系統提供了良好的用戶體驗，包括自動顯示、載入動畫、互動選項和結果反饋。問卷只在選擇難題解答挑戰類型的位置時顯示，確保了功能的針對性和用戶體驗的一致性。
