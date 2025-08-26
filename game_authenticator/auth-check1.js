/**
 * 遊戲認證檢查腳本 / Game Authentication Check Script
 * 將此腳本添加到遊戲頁面以確保只有認證用戶才能訪問
 * Add this script to game pages to ensure only authenticated users can access
 */

(function () {
    'use strict';

    // 檢查認證狀態 / Check authentication status
    function checkAuthentication() {
        const authStatus = localStorage.getItem('gameAuthStatus');

        // 如果沒有認證狀態，重定向到認證頁面
        // If no authentication status, redirect to auth page
        if (!authStatus || authStatus !== 'authenticated') {
            redirectToAuth();
            return false;
        }

        return true;
    }

    // 重定向到認證頁面 / Redirect to authentication page
    function redirectToAuth() {
        const currentPath = window.location.pathname;
        const authPath = './game_authenticator/auth1.html';

        // 保存當前頁面路徑，以便認證後返回
        // Save current page path to return after authentication
        localStorage.setItem('gameAuthReturnPath', currentPath);

        // 重定向到認證頁面 / Redirect to auth page
        window.location.href = authPath;
    }



    // 登出功能 / Logout function
    function logout() {
        localStorage.removeItem('gameAuthStatus');
        redirectToAuth();
    }

    // 檢查認證並設置自動更新 / Check auth and setup auto update
    function initAuthCheck() {
        if (!checkAuthentication()) {
            return;
        }

        // 添加登出按鈕到頁面（可選）/ Add logout button to page (optional)
        addLogoutButton();
    }

    // 添加登出按鈕 / Add logout button
    function addLogoutButton() {
        // 檢查是否已經有登出按鈕 / Check if logout button already exists
        if (document.getElementById('auth-logout-btn')) {
            return;
        }

        // 創建登出按鈕 / Create logout button
        const logoutBtn = document.createElement('button');
        logoutBtn.id = 'auth-logout-btn';
        logoutBtn.innerHTML = '登出 / Logout';
        logoutBtn.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #e74c3c;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            z-index: 10000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        `;

        // 添加懸停效果 / Add hover effect
        logoutBtn.addEventListener('mouseenter', function () {
            this.style.background = '#c0392b';
        });

        logoutBtn.addEventListener('mouseleave', function () {
            this.style.background = '#e74c3c';
        });

        // 添加點擊事件 / Add click event
        logoutBtn.addEventListener('click', logout);

        // 添加到頁面 / Add to page
        document.body.appendChild(logoutBtn);
    }

    // 頁面載入時初始化 / Initialize on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAuthCheck);
    } else {
        initAuthCheck();
    }

    // 導出函數供外部使用 / Export functions for external use
    window.GameAuth = {
        checkAuthentication: checkAuthentication,
        logout: logout
    };

})();
