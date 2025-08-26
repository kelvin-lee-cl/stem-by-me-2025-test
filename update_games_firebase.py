#!/usr/bin/env python3
"""
批量更新遊戲文件，添加 Firebase 功能
"""

import os
import re

def update_game_file(game_number):
    """更新指定遊戲編號的文件"""
    filename = f"game{game_number}.html"
    
    if not os.path.exists(filename):
        print(f"文件 {filename} 不存在，跳過")
        return
    
    print(f"正在更新 {filename}...")
    
    # 讀取文件內容
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. 添加 Firebase SDK
    if '<!-- Firebase SDK -->' not in content:
        firebase_sdk = '''    <!-- Firebase SDK -->
    <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>

'''
        content = content.replace('    <style>', firebase_sdk + '    <style>')
    
    # 2. 更新標題
    content = content.replace(f'<title>遊戲 {game_number-1} - 童非凡(2025)</title>', f'<title>遊戲 {game_number} - 童非凡(2025)</title>')
    
    # 3. 更新遊戲標題
    content = content.replace(f'<h1 class="game-title">遊戲 {game_number-1}</h1>', f'<h1 class="game-title">遊戲 {game_number}</h1>')
    content = content.replace(f'<p class="game-subtitle">歡迎來到第{game_number-1}個挑戰遊戲</p>', f'<p class="game-subtitle">歡迎來到第{game_number}個挑戰遊戲</p>')
    
    # 4. 更新 iframe src
    content = content.replace(f'src="games/game{game_number-1}/index.html"', f'src="games/game{game_number}/index.html"')
    
    # 5. 添加 Firebase 配置和功能
    firebase_config = f'''        // Firebase Configuration
        const firebaseConfig = {{
            apiKey: "AIzaSyD5x_L2yAP9ndQJRBeC31Z6nNrh4okt9uo",
            authDomain: "stem-by-me-app.firebaseapp.com",
            projectId: "stem-by-me-app",
            storageBucket: "stem-by-me-app.firebasestorage.app",
            messagingSenderId: "216736327145",
            appId: "1:216736327145:web:e01721f8e0c6a960a19778",
            measurementId: "G-WWSS5PJVP1"
        }};

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();

        // Score System Variables
        let currentScore = 0;
        let totalScore = 0;
        let scoreHistory = [];
        let gameStatus = 'playing'; // 'playing', 'win', 'lose'
        let playerName = 'Anonymous'; // Default player name

        // DOM Elements
        const currentScoreElement = document.getElementById('currentScore');
        const totalScoreElement = document.getElementById('totalScore');
        const scoreListElement = document.getElementById('scoreList');

        // Get player name from localStorage or prompt user
        function getPlayerName() {{
            const savedName = localStorage.getItem('playerName');
            if (savedName) {{
                playerName = savedName;
                return playerName;
            }}

            const name = prompt('請輸入您的名字（用於記錄分數）：', 'Anonymous');
            if (name && name.trim()) {{
                playerName = name.trim();
                localStorage.setItem('playerName', playerName);
            }}
            return playerName;
        }}

        // Send score to Firebase
        async function sendScoreToFirebase(score, status, gameTime = null) {{
            try {{
                const playerName = getPlayerName();
                const scoreData = {{
                    playerName: playerName,
                    score: score,
                    status: status,
                    gameTime: gameTime,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    gameId: 'game{game_number}',
                    totalScore: totalScore
                }};

                // Add to Firestore
                const docRef = await db.collection('gameScores').add(scoreData);
                console.log('Score sent to Firebase with ID:', docRef.id);
                
                showNotification('📊 分數已成功保存到雲端！', 'success');
                return docRef.id;
            }} catch (error) {{
                console.error('Error sending score to Firebase:', error);
                showNotification('❌ 保存分數到雲端時發生錯誤', 'error');
                return null;
            }}
        }}

'''
    
    # 檢查是否已經有 Firebase 配置
    if '// Firebase Configuration' not in content:
        # 找到 script 標籤開始的位置
        script_start = content.find('    <script>')
        if script_start != -1:
            # 找到第一個變量定義的位置
            vars_start = content.find('        // Score System Variables', script_start)
            if vars_start != -1:
                content = content[:vars_start] + firebase_config + content[vars_start:]
    
    # 6. 更新 localStorage 鍵名
    content = content.replace(f'game{game_number-1}_totalScore', f'game{game_number}_totalScore')
    content = content.replace(f'game{game_number-1}_scoreHistory', f'game{game_number}_scoreHistory')
    
    # 7. 更新遊戲勝利和失敗處理函數
    # 更新 handleGameWin
    win_pattern = r'(// Handle game win\s+function handleGameWin\(score, gameTime\) \{[^}]*\})'
    win_replacement = f'''        // Handle game win
        async function handleGameWin(score, gameTime) {{
            gameStatus = 'win';
            currentScore = score;

            // Add bonus points for winning
            const winBonus = Math.floor(score * 0.5); // 50% bonus
            const totalEarned = score + winBonus;

            totalScore += totalEarned;

            // Update displays
            updateScoreDisplay(currentScoreElement, currentScore);
            updateScoreDisplay(totalScoreElement, totalScore);

            // Add to history
            addScoreToHistory(totalEarned, 'win', gameTime);

            // Send score to Firebase
            await sendScoreToFirebase(totalEarned, 'win', gameTime);

            // Show win notification
            showNotification(`🎉 恭喜獲勝！獲得 ${{totalEarned}} 分（包含 ${{winBonus}} 分獎勵）`, 'success');

            // Save scores
            saveScores();
        }}'''
    
    content = re.sub(win_pattern, win_replacement, content, flags=re.DOTALL)
    
    # 更新 handleGameLose
    lose_pattern = r'(// Handle game lose\s+function handleGameLose\(score, gameTime\) \{[^}]*\})'
    lose_replacement = f'''        // Handle game lose
        async function handleGameLose(score, gameTime) {{
            gameStatus = 'lose';
            currentScore = score;

            totalScore += score;

            // Update displays
            updateScoreDisplay(currentScoreElement, currentScore);
            updateScoreDisplay(totalScoreElement, totalScore);

            // Add to history
            addScoreToHistory(score, 'lose', gameTime);

            // Send score to Firebase
            await sendScoreToFirebase(score, 'lose', gameTime);

            // Show lose notification
            showNotification(`😔 遊戲結束，獲得 ${{score}} 分`, 'info');

            // Save scores
            saveScores();
        }}'''
    
    content = re.sub(lose_pattern, lose_replacement, content, flags=re.DOTALL)
    
    # 更新 testScoreSystem
    test_pattern = r'(// Test score system function\s+function testScoreSystem\(\) \{[^}]*\})'
    test_replacement = f'''        // Test score system function
        async function testScoreSystem() {{
            // Simulate a game win with random score
            const testScore = Math.floor(Math.random() * 100) + 50; // Random score between 50-150
            await handleGameWin(testScore, Math.random() * 60 + 30); // Random time between 30-90 seconds

            showNotification('🧪 測試分數系統已觸發！', 'info');
        }}'''
    
    content = re.sub(test_pattern, test_replacement, content, flags=re.DOTALL)
    
    # 寫回文件
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"{filename} 更新完成！")

def main():
    """主函數"""
    print("開始批量更新遊戲文件...")
    
    # 更新 game3.html 到 game6.html
    for game_num in range(3, 7):
        update_game_file(game_num)
    
    print("所有遊戲文件更新完成！")

if __name__ == "__main__":
    main()
