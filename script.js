// Scavenger Hunt Checkpoint JavaScript - STEM by Me Style

// Detailed location data with coordinates, game types, and scores
const locationData = {

    'F3C9': {
        name: '軒尼斯道籃球場',
        coordinates: '22.278071431224433, 114.17812866522151',
        gameType: '難題解答挑戰',
        score: 100,
        description: '戶外籃球場，適合親子運動活動',
        address: '灣仔軒尼斯道',
        category: 'sports'
    },
    'L8Q2': {
        name: '灣仔會展',
        coordinates: '22.283416768433817, 114.17313614169522',
        gameType: '趣味親子打卡',
        score: 80,
        description: '香港會議展覽中心，舉辦各種展覽和會議',
        address: '灣仔港灣道1號',
        category: 'business'
    },

    'G6V3': {
        name: '海濱遊樂設施(滑梯)',
        coordinates: '22.282934208942937, 114.17865548077772',
        gameType: '闖關點',
        score: 40,
        description: '海濱公園的兒童遊樂設施',
        address: '灣仔海濱公園',
        category: 'playground'
    },
    'P9M8': {
        name: '鴨仔船附近',
        coordinates: '22.283213249621735, 114.17989206930777',
        gameType: '趣味親子打卡',
        score: 80,
        description: '海濱的鴨仔船地標，適合拍照留念',
        address: '灣仔海濱',
        category: 'landmark'
    },
    'W4K5': {
        name: '火車附近販賣機',
        coordinates: '22.28350632948947, 114.18013293854646',
        gameType: '闖關點',
        score: 40,
        description: '海濱火車站附近的販賣機',
        address: '灣仔海濱火車站',
        category: 'transport'
    },
    'J7D1': {
        name: '火車車箱',
        coordinates: '22.28350632948947, 114.18013293854646',
        gameType: '難題解答挑戰',
        score: 100,
        description: '海濱火車站的車廂展示',
        address: '灣仔海濱火車站',
        category: 'transport'
    },
    'S2N6': {
        name: '海濱站',
        coordinates: '22.28350632948947, 114.18013293854646',
        gameType: '趣味親子打卡',
        score: 80,
        description: '灣仔海濱火車站',
        address: '灣仔海濱',
        category: 'transport'
    },

    'Z3T7': {
        name: '維園門口公仔',
        coordinates: '22.28098492243771, 114.18702508874155',
        gameType: '闖關點',
        score: 40,
        description: '維多利亞公園門口的裝飾公仔',
        address: '銅鑼灣維多利亞公園',
        category: 'landmark'
    },

    'H4G8': {
        name: '聖馬利亞堂',
        coordinates: '22.278552345640914, 114.18872642220472',
        gameType: '趣味親子打卡',
        score: 80,
        description: '歷史悠久的教堂建築',
        address: '灣仔聖馬利亞堂',
        category: 'religious'
    },
    'N8P5': {
        name: '大坑',
        coordinates: '22.279038533587816, 114.19158575234175',
        gameType: '難題解答挑戰',
        score: 100,
        description: '大坑地區的特色景點',
        address: '灣仔大坑',
        category: 'community'
    },
    'Y1F4': {
        name: '奧運五色天橋',
        coordinates: '22.279309272636187, 114.18716842350592',
        gameType: '難題解答挑戰',
        score: 100,
        description: '奧運主題的五色天橋',
        address: '灣仔奧運天橋',
        category: 'landmark'
    },
    'C2L6': {
        name: '怡和街圓形天橋',
        coordinates: '22.279504812359235, 114.18622193894356',
        gameType: '趣味親子打卡',
        score: 80,
        description: '怡和街的圓形行人天橋',
        address: '灣仔怡和街',
        category: 'transport'
    },
    'M9J3': {
        name: '渣甸坊',
        coordinates: '22.279594554604934, 114.1843079227669',
        gameType: '闖關點',
        score: 40,
        description: '灣仔區的商業街道',
        address: '灣仔渣甸坊',
        category: 'commercial'
    },

    'V7X1': {
        name: 'Time Square',
        coordinates: '22.278319755181176, 114.18212432535469',
        gameType: '趣味親子打卡',
        score: 80,
        description: '時代廣場購物中心',
        address: '銅鑼灣時代廣場',
        category: 'commercial'
    },

    'D8C5': {
        name: '尋找灣仔海濱同事',
        coordinates: '待定',
        gameType: '尋找灣仔海濱同事',
        score: 500,
        description: '尋找在灣仔海濱工作的同事',
        address: '灣仔海濱',
        category: 'special'
    },
    'M000': {
        name: '測試密碼1 - 開始和結束',
        coordinates: '測試座標',
        gameType: '測試遊戲',
        score: 100,
        description: '測試用的開始和結束點',
        address: '測試地址',
        category: 'test'
    },
    'M010': {
        name: '測試密碼2 - 開始和結束',
        coordinates: '測試座標',
        gameType: '測試遊戲',
        score: 100,
        description: '測試用的開始和結束點',
        address: '測試地址',
        category: 'test'
    }
};

// Location categories with colors and icons
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

// Game type colors for visual distinction
const gameTypeColors = {
    '開發者遊戲挑戰': '#9d7de6',
    '難題解答挑戰': '#1849a8',
    '趣味親子打卡': '#f7901e',
    '闖關點': '#28a745',
    '尋找灣仔海濱同事': '#dc3545'
};

// DOM elements
const currentLocationDisplay = document.getElementById('current-location');
const passwordInput = document.getElementById('password-input');
const submitBtn = document.getElementById('submit-btn');
const resultMessage = document.getElementById('result-message');
const progressGrid = document.getElementById('progress-grid');

// Progress toggle elements
const progressToggle = document.getElementById('progress-toggle');
const progressContent = document.getElementById('progress-content');
const toggleIcon = document.querySelector('.toggle-icon');

// Image upload elements
const imageUploadSection = document.getElementById('image-upload-section');
const imageInput = document.getElementById('image-input');
const imagePreview = document.getElementById('image-preview');
const previewImg = document.getElementById('preview-img');
const uploadBtn = document.getElementById('upload-btn');
const cancelUploadBtn = document.getElementById('cancel-upload-btn');
const uploadProgress = document.getElementById('upload-progress');
const progressFill = document.querySelector('.progress-fill');

// Admin panel elements
const adminToggle = document.getElementById('admin-toggle');
const adminPanel = document.getElementById('admin-panel');
const refreshPhotosBtn = document.getElementById('refresh-photos');
const exportDataBtn = document.getElementById('export-data');
const winnersList = document.getElementById('winners-list');
const allPhotosGrid = document.getElementById('all-photos-grid');
const sortOrder = document.getElementById('sort-order');

// Progress tracking
// These variables are now managed by login.js
// let completedLocations = [];
let currentLocation = '';
// let totalScore = 0;
let selectedFile = null;

// Photo upload allowed location codes
const ALLOWED_UPLOAD_CODES = ['L8Q2', 'P9M8', 'S2N6', 'H4G8', 'C2L6', 'V7X1'];

// Admin data
let allPhotos = [];
let winners = [];

// Global showResult function for login system
window.showResult = function (message, type) {
    const resultMessage = document.getElementById('result-message');
    if (resultMessage) {
        resultMessage.innerHTML = message;
        resultMessage.className = `result-message ${type}`;
    }
};

// Sync progress data with login system
// Helper functions to get current progress from login system
function getCompletedLocations() {
    return window.loginSystem ? window.loginSystem.getCompletedLocations() : [];
}

function getTotalScore() {
    return window.loginSystem ? window.loginSystem.getTotalScore() : 0;
}

function syncWithLoginSystem() {
    if (window.loginSystem) {
        // Get current progress from login system
        const completedLocations = getCompletedLocations();
        const totalScore = getTotalScore();

        console.log('Synced with login system:', completedLocations.length, 'locations,', totalScore, 'points');
    }
}

// Firebase Analytics tracking function
function trackEvent(eventName, parameters = {}) {
    if (window.firebaseAnalytics) {
        try {
            window.firebaseAnalytics.logEvent(eventName, parameters);
            console.log('Firebase Analytics Event:', eventName, parameters);
        } catch (error) {
            console.log('Analytics tracking error:', error);
        }
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    // Track page view
    trackEvent('page_view', {
        page_title: 'Scavenger Hunt Checkpoint',
        page_location: window.location.href
    });

    initializeProgressGrid();
    setupEventListeners();
    setupImageUploadListeners();
    setupAdminListeners();

    // Hide password input group initially
    const passwordInputGroup = document.getElementById('password-input-group');
    if (passwordInputGroup) {
        passwordInputGroup.style.display = 'none';
    }

    // Hide quiz section initially
    hideQuiz();

    // Check if user has completed locations that support photo upload
    const imageUploadSection = document.getElementById('image-upload-section');
    if (imageUploadSection) {
        const completedLocations = getCompletedLocations();
        const hasUploadableLocations = completedLocations.some(location => ALLOWED_UPLOAD_CODES.includes(location));

        if (hasUploadableLocations && window.loginSystem && window.loginSystem.isSignedIn()) {
            imageUploadSection.style.display = 'block';
            updateUploadSectionTitle();
        } else {
            imageUploadSection.style.display = 'none';
        }
    }

    // Sync with login system
    syncWithLoginSystem();

    updateProgressDisplay();
    updateScoreDisplay();

    // Update upload section title
    updateUploadSectionTitle();

    // Test photo upload system
    setTimeout(testPhotoUpload, 1000);

    // Test Firebase score retrieval
    setTimeout(testFirebaseScoreRetrieval, 2000);
});















function setupEventListeners() {
    // Location code input
    passwordInput.addEventListener('input', function () {
        this.value = this.value.toUpperCase();
        clearResultMessage();
    });

    passwordInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });

    // Mobile-friendly input handling
    passwordInput.addEventListener('blur', function () {
        // Auto-submit on mobile when input loses focus (if code is complete)
        if (this.value.length === 4 && window.loginSystem && window.loginSystem.isSignedIn()) {
            setTimeout(() => checkPassword(), 500);
        }
    });

    // Submit button
    submitBtn.addEventListener('click', checkPassword);

    // Mobile touch improvements
    submitBtn.addEventListener('touchstart', function (e) {
        e.preventDefault();
        this.style.transform = 'scale(0.98)';
    });

    submitBtn.addEventListener('touchend', function (e) {
        e.preventDefault();
        this.style.transform = 'scale(1)';
        checkPassword();
    });

    // Test photo upload button
    const testPhotoUploadBtn = document.getElementById('test-photo-upload');
    if (testPhotoUploadBtn) {
        testPhotoUploadBtn.addEventListener('click', function () {
            const imageUploadSection = document.getElementById('image-upload-section');
            if (imageUploadSection) {
                imageUploadSection.style.display = 'block';
                console.log('✅ Photo upload section manually shown');
                showResult('📸 照片上傳功能已啟用！請選擇照片進行上傳。', 'success');
            } else {
                console.log('❌ Photo upload section not found');
                showResult('❌ 照片上傳區域未找到！', 'error');
            }
        });
    }

    // Progress toggle functionality
    progressToggle.addEventListener('click', toggleProgressSection);

    // Progress header click to toggle
    document.querySelector('.progress-header').addEventListener('click', function (e) {
        if (e.target !== progressToggle && e.target !== toggleIcon) {
            toggleProgressSection();
        }
    });
}

function setupAdminListeners() {
    // Admin toggle
    adminToggle.addEventListener('click', toggleAdminPanel);

    // Refresh photos
    refreshPhotosBtn.addEventListener('click', loadAllPhotos);

    // Export data
    exportDataBtn.addEventListener('click', exportData);

    // User management
    const exportUsersBtn = document.getElementById('export-users');
    const resetAllUsersBtn = document.getElementById('reset-all-users');
    const clearAllPhotosBtn = document.getElementById('clear-all-photos');

    if (exportUsersBtn) {
        exportUsersBtn.addEventListener('click', exportUserData);
    }

    if (resetAllUsersBtn) {
        resetAllUsersBtn.addEventListener('click', resetAllUsers);
    }

    if (clearAllPhotosBtn) {
        clearAllPhotosBtn.addEventListener('click', clearAllPhotos);
    }

    // User search and management
    const searchUserBtn = document.getElementById('search-user-btn');
    const userSearchInput = document.getElementById('user-search-input');
    const updateUserPointsBtn = document.getElementById('update-user-points-btn');

    if (searchUserBtn) {
        searchUserBtn.addEventListener('click', searchUser);
    }

    if (userSearchInput) {
        userSearchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                searchUser();
            }
        });
    }

    if (updateUserPointsBtn) {
        updateUserPointsBtn.addEventListener('click', updateUserPoints);
    }

    // Filters
    // gameTypeFilter.addEventListener('change', filterAndSortPhotos); // Removed as per edit hint
    sortOrder.addEventListener('change', filterAndSortPhotos);
}

function toggleAdminPanel() {
    const isVisible = adminPanel.style.display !== 'none';

    if (isVisible) {
        // Hide admin panel
        adminPanel.style.display = 'none';
        adminToggle.classList.remove('active');

        // Hide score display for regular users
        updateScoreDisplay();

        // Track admin panel closed
        trackEvent('admin_panel_closed');
    } else {
        // Show admin panel
        adminPanel.style.display = 'block';
        adminToggle.classList.add('active');

        // Load data when opening
        loadAllPhotos();
        updateUserStats();

        // Show score display for admin
        updateScoreDisplay();

        // Track admin panel opened
        trackEvent('admin_panel_opened');
    }
}

async function loadAllPhotos() {
    try {
        // Show loading
        winnersList.innerHTML = '<div class="loading">載入中...</div>';
        allPhotosGrid.innerHTML = '<div class="loading">載入中...</div>';

        // Check Firebase status
        checkFirebaseStatus();

        // Get all photos from localStorage and Firebase
        const photos = await getAllPhotosFromLocalStorage();

        // Process photos
        allPhotos = photos.map(photo => {
            const locationCode = photo.locationCode;
            const locationInfo = locationData[locationCode];
            return {
                ...photo,
                locationName: locationInfo ? locationInfo.name : (photo.locationName || '未知位置'),
                gameType: locationInfo ? locationInfo.gameType : (photo.gameType || '未知類型'),
                score: locationInfo ? locationInfo.score : (photo.score || 0),
                gameTypeFolder: getGameTypeFolder(locationInfo ? locationInfo.gameType : (photo.gameType || ''))
            };
        });

        // Calculate winners (top 5 by score)
        calculateWinners();

        // Display photos
        displayWinners();
        filterAndSortPhotos();

        // Display photo statistics
        const stats = await displayPhotoStatistics();

        // Update admin stats with photo information
        const totalPhotosElement = document.getElementById('total-photos');
        if (totalPhotosElement) {
            totalPhotosElement.textContent = stats.totalPhotos;
        }

        // Track photos loaded
        trackEvent('admin_photos_loaded', {
            total_photos: allPhotos.length,
            total_size_mb: Math.round(stats.totalSize / (1024 * 1024) * 100) / 100
        });

    } catch (error) {
        console.error('Error loading photos:', error);
        winnersList.innerHTML = '<div class="no-photos">載入失敗，請重試</div>';
        allPhotosGrid.innerHTML = '<div class="no-photos">載入失敗，請重試</div>';

        // Track error
        trackEvent('admin_photos_load_error', {
            error_message: error.message
        });
    }
}

async function getAllPhotosFromLocalStorage() {
    const photos = [];

    // Get photos from localStorage
    const storedPhotos = localStorage.getItem('scavengerHuntPhotos');
    if (storedPhotos) {
        const parsedPhotos = JSON.parse(storedPhotos);
        photos.push(...parsedPhotos);
    }

    // Try to get photos from Firebase if available
    try {
        if (window.db) {
            const firebasePhotos = await loadPhotosFromFirebase();
            photos.push(...firebasePhotos);
        }
    } catch (error) {
        console.error('Error loading photos from Firebase:', error);
    }

    return photos;
}

// Function to load photos from Firebase
async function loadPhotosFromFirebase() {
    try {
        if (!window.db) {
            console.log('⚠️ Firebase not available');
            return [];
        }

        const snapshot = await window.db.collection('photos').get();
        const photos = [];

        snapshot.forEach(doc => {
            const photoData = doc.data();
            // Add Firebase document ID
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

function calculateWinners() {
    // For the simplified photo system, we'll show top users by points instead
    const allUsers = window.loginSystem ? window.loginSystem.getAllUsers() : {};
    const topUsers = Object.values(allUsers)
        .sort((a, b) => b.totalScore - a.totalScore)
        .slice(0, 5);

    winners = topUsers.map(user => ({
        userID: user.id,
        userName: `玩家${user.id}`,
        totalScore: user.totalScore,
        completedLocations: user.completedLocations.length,
        lastPlayed: user.lastPlayed
    }));
}

function displayWinners() {
    if (winners.length === 0) {
        winnersList.innerHTML = '<div class="no-photos">暫無獲勝者數據</div>';
        return;
    }

    winnersList.innerHTML = winners.map((winner, index) => {
        const rank = index + 1;
        const rankClass = `rank-${rank}`;

        return `
            <div class="winner-card">
                <div class="rank-badge ${rankClass}">${rank}</div>
                <div class="winner-photo-container">
                    <div class="winner-photo-placeholder">👤</div>
                </div>
                <div class="winner-info">
                    <h4>${winner.userName}</h4>
                    <p>完成位置: ${winner.completedLocations}/21</p>
                    <p>最後遊戲: ${winner.lastPlayed ? new Date(winner.lastPlayed).toLocaleDateString('zh-TW') : '從未遊戲'}</p>
                    <div class="winner-score">${winner.totalScore}分</div>
                </div>
            </div>
        `;
    }).join('');
}

function filterAndSortPhotos() {
    const selectedSortOrder = sortOrder.value;

    let filteredPhotos = [...allPhotos];

    // Sort photos
    switch (selectedSortOrder) {
        case 'newest':
            filteredPhotos.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            break;
        case 'oldest':
            filteredPhotos.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
            break;
        case 'high-to-low':
            filteredPhotos.sort((a, b) => b.size - a.size);
            break;
        case 'low-to-high':
            filteredPhotos.sort((a, b) => a.size - b.size);
            break;
    }

    displayAllPhotos(filteredPhotos);
}

function displayAllPhotos(photos) {
    if (photos.length === 0) {
        allPhotosGrid.innerHTML = '<div class="no-photos">暫無照片</div>';
        return;
    }

    allPhotosGrid.innerHTML = photos.map((photo, index) => {
        const timestamp = new Date(photo.timestamp);
        const formattedTime = timestamp.toLocaleString('zh-TW');
        const fileSize = photo.size ? Math.round(photo.size / 1024) : 0;
        const locationText = photo.locationName ? `📍 ${photo.locationName}` : '📍 未知位置';
        const gameTypeText = photo.gameType ? `🎮 ${photo.gameType}` : '';

        // Get location category info
        const categoryInfo = photo.locationCategory && locationCategories[photo.locationCategory]
            ? locationCategories[photo.locationCategory]
            : null;
        const categoryIcon = categoryInfo ? categoryInfo.icon : '📍';
        const categoryColor = categoryInfo ? categoryInfo.color : '#666';

        // Get location address
        const addressText = photo.locationAddress ? `🏠 ${photo.locationAddress}` : '';

        // Get location description
        const descriptionText = photo.locationDescription ? photo.locationDescription : '';

        return `
            <div class="photo-card" onclick="previewPhoto(${index})" style="cursor: pointer; transition: transform 0.2s ease;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                <div class="photo-image-container">
                    ${photo.dataURL ?
                `<img src="${photo.dataURL}" alt="${photo.fileName}" class="photo-image" onerror="this.parentElement.innerHTML='<div class=\\'photo-image-placeholder\\'><div class=\\'photo-icon\\'>📸</div><div class=\\'photo-filename\\'>${photo.fileName}</div></div>'">` :
                `<div class="photo-image-placeholder">
                            <div class="photo-icon">📸</div>
                            <div class="photo-filename">${photo.fileName}</div>
                        </div>`
            }
                </div>
                <div class="photo-info">
                    <div class="photo-filename-display">${photo.originalName || photo.fileName}</div>
                    <div class="photo-user">👤 玩家${photo.userID}</div>
                    <div class="photo-location" style="color: ${categoryColor}; font-weight: bold;">
                        ${categoryIcon} ${photo.locationName || '未知位置'}
                    </div>
                    ${addressText ? `<div class="photo-address" style="font-size: 0.8em; color: #666; margin-top: 2px;">${addressText}</div>` : ''}
                    ${descriptionText ? `<div class="photo-description" style="font-size: 0.8em; color: #888; margin-top: 2px; font-style: italic;">${descriptionText}</div>` : ''}
                    ${gameTypeText ? `<div class="photo-game-type">${gameTypeText}</div>` : ''}
                    <div class="photo-timestamp">🕒 ${formattedTime}</div>
                    <div class="photo-size">📁 ${fileSize}KB</div>
                    <div style="color: #17a2b8; font-size: 0.9em; margin-top: 8px; text-align: center;">👆 點擊查看大圖</div>
                </div>
            </div>
        `;
    }).join('');
}

function exportData() {
    const data = {
        winners: winners,
        allPhotos: allPhotos,
        exportTime: new Date().toISOString(),
        totalPhotos: allPhotos.length,
        totalWinners: winners.length
    };

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `scavenger-hunt-data-${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    // Track export
    trackEvent('admin_data_exported', {
        total_photos: allPhotos.length,
        total_winners: winners.length
    });
}

function updateUploadSectionTitle(gameType) {
    const uploadTitle = document.querySelector('.image-upload-section h3');
    const uploadDescription = document.querySelector('.upload-description');

    // Check if we have a current location
    if (currentLocation && locationData[currentLocation]) {
        const locationInfo = locationData[currentLocation];

        // Check if this location allows photo upload
        const allowsUpload = ALLOWED_UPLOAD_CODES.includes(currentLocation);

        if (allowsUpload) {
            uploadTitle.innerHTML = `📸 照片上傳 - ${locationInfo.name}`;

            switch (gameType) {
                case '趣味親子打卡':
                    uploadDescription.textContent = '請上傳您在此位置的親子合照！';
                    break;
                case '開發者遊戲挑戰':
                    uploadDescription.textContent = '請上傳您完成遊戲挑戰的照片！';
                    break;
                case '難題解答挑戰':
                    uploadDescription.textContent = '請上傳您解答難題的照片！';
                    break;
                case '闖關點':
                    uploadDescription.textContent = '請上傳您在此闖關點的照片！';
                    break;
                case '尋找灣仔海濱同事':
                    uploadDescription.textContent = '請上傳您找到灣仔海濱同事的照片！';
                    break;
                default:
                    uploadDescription.textContent = '請上傳您在此位置的照片！';
            }
        } else {
            uploadTitle.innerHTML = '📸 照片上傳';
            uploadDescription.textContent = '此位置不支援照片上傳功能';
        }
    } else {
        // No location selected
        uploadTitle.innerHTML = '📸 照片上傳';
        uploadDescription.textContent = '請先選擇一個支援照片上傳的位置！';
    }
}

function toggleProgressSection() {
    const isCollapsed = progressContent.classList.contains('collapsed');

    if (isCollapsed) {
        // Expand
        progressContent.classList.remove('collapsed');
        toggleIcon.textContent = '−';
        progressContent.style.maxHeight = progressContent.scrollHeight + 'px';

        // Track progress section expanded
        trackEvent('progress_section_expanded');
    } else {
        // Collapse
        progressContent.classList.add('collapsed');
        toggleIcon.textContent = '+';
        progressContent.style.maxHeight = '0';

        // Track progress section collapsed
        trackEvent('progress_section_collapsed');
    }
}

function setupImageUploadListeners() {
    // File input change
    imageInput.addEventListener('change', handleFileSelect);

    // Upload button
    uploadBtn.addEventListener('click', uploadImage);

    // Cancel upload button
    cancelUploadBtn.addEventListener('click', cancelUpload);

    // Drag and drop functionality
    const uploadLabel = document.querySelector('.upload-label');

    uploadLabel.addEventListener('dragover', function (e) {
        e.preventDefault();
        this.classList.add('dragover');
    });

    uploadLabel.addEventListener('dragleave', function (e) {
        e.preventDefault();
        this.classList.remove('dragover');
    });

    uploadLabel.addEventListener('drop', function (e) {
        e.preventDefault();
        this.classList.remove('dragover');

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    });

    // Click to select file
    uploadLabel.addEventListener('click', function () {
        imageInput.click();
    });
}

function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
        handleFile(file);
    }
}

function handleFile(file) {
    // Validate file type
    if (!file.type.startsWith('image/')) {
        showResult('❌ 請選擇圖片文件！支持格式：JPG、PNG、GIF、WebP', 'error');
        return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
        showResult('❌ 圖片文件太大，請選擇小於5MB的圖片！', 'error');
        return;
    }

    // Check if user is logged in
    if (!window.loginSystem || !window.loginSystem.isSignedIn()) {
        showResult('❌ 請先登入玩家帳號！', 'error');
        return;
    }

    // Check if a location is selected and supports photo upload
    if (!currentLocation) {
        const completedLocations = getCompletedLocations();
        if (completedLocations.length === 0) {
            showResult('❌ 請先選擇一個支援照片上傳的位置！<br>支援的位置：L8Q2, P9M8, S2N6, H4G8, C2L6, V7X1', 'warning');
            return;
        }
    } else if (!ALLOWED_UPLOAD_CODES.includes(currentLocation)) {
        showResult('❌ 此位置不支援照片上傳功能！<br>請選擇支援照片上傳的位置。', 'warning');
        return;
    }

    selectedFile = file;

    // Create preview
    const reader = new FileReader();
    reader.onload = function (e) {
        previewImg.src = e.target.result;
        imagePreview.style.display = 'block';

        // Show file info
        const fileSizeKB = Math.round(file.size / 1024);
        showResult(`📸 已選擇圖片：${file.name}<br>檔案大小：${fileSizeKB}KB<br>請點擊「上傳照片」按鈕完成上傳`, 'info');

        // Track image selection
        trackEvent('image_selected', {
            file_name: file.name,
            file_size: file.size,
            file_type: file.type,
            user_id: window.loginSystem.getCurrentUser(),
            location_code: currentLocation || null
        });
    };

    reader.onerror = function () {
        showResult('❌ 圖片讀取失敗，請重試！', 'error');
    };

    reader.readAsDataURL(file);
}

async function uploadImage() {
    const uploadBtn = document.getElementById('upload-btn');

    // Show loading state
    uploadBtn.classList.add('loading');
    uploadBtn.disabled = true;

    try {
        if (!selectedFile) {
            showResult('請先選擇圖片！', 'error');
            return;
        }

        if (!window.loginSystem || !window.loginSystem.isSignedIn() || !window.loginSystem.getCurrentUser()) {
            showResult('請先登入玩家帳號！', 'error');
            return;
        }

        // Check if a location is selected and supports photo upload
        if (!currentLocation) {
            const completedLocations = getCompletedLocations();
            if (completedLocations.length === 0) {
                showResult('❌ 請先選擇一個支援照片上傳的位置！<br>支援的位置：L8Q2, P9M8, S2N6, H4G8, C2L6, V7X1', 'warning');
                return;
            }
        } else if (!ALLOWED_UPLOAD_CODES.includes(currentLocation)) {
            showResult('❌ 此位置不支援照片上傳功能！<br>請選擇支援照片上傳的位置。', 'warning');
            return;
        }

        // Show progress with better feedback
        uploadProgress.style.display = 'block';
        progressFill.style.width = '0%';

        // Update progress text
        const progressText = uploadProgress.querySelector('.progress-text') || uploadProgress.querySelector('div');
        if (progressText) {
            progressText.textContent = '正在處理圖片...';
        }

        // Create unique filename
        const timestamp = Date.now();
        const fileExtension = selectedFile.name.split('.').pop() || 'jpg';
        const fileName = `${window.loginSystem.getCurrentUser()}_${timestamp}.${fileExtension}`;

        // Convert file to base64 for localStorage storage
        const reader = new FileReader();
        reader.onload = function (e) {
            const base64Data = e.target.result;

            // Simulate upload progress with better feedback
            let progress = 0;
            const progressInterval = setInterval(() => {
                progress += 5;
                progressFill.style.width = progress + '%';

                // Update progress text
                if (progressText) {
                    if (progress < 30) {
                        progressText.textContent = '正在壓縮圖片...';
                    } else if (progress < 60) {
                        progressText.textContent = '正在保存到本地...';
                    } else if (progress < 90) {
                        progressText.textContent = '正在完成上傳...';
                    } else {
                        progressText.textContent = '上傳完成！';
                    }
                }

                if (progress >= 100) {
                    clearInterval(progressInterval);

                    // Hide progress after a moment
                    setTimeout(() => {
                        uploadProgress.style.display = 'none';
                    }, 1500);

                    // Save photo to localStorage with base64 data
                    savePhotoToLocalStorage(fileName, base64Data);

                    // Get location info for success message
                    let locationInfo = null;
                    let locationText = '位置：未指定';
                    let gameTypeText = '';

                    // Try to get location info from currentLocation first
                    if (currentLocation && locationData[currentLocation]) {
                        locationInfo = locationData[currentLocation];
                    } else {
                        // If no currentLocation, try to detect from the last completed location or show a message
                        const completedLocations = getCompletedLocations();
                        if (completedLocations.length > 0) {
                            const lastCompletedLocation = completedLocations[completedLocations.length - 1];
                            if (locationData[lastCompletedLocation]) {
                                locationInfo = locationData[lastCompletedLocation];
                            }
                        }
                    }

                    if (locationInfo) {
                        locationText = `位置：${locationInfo.name}`;
                        gameTypeText = `遊戲類型：${locationInfo.gameType}`;
                    } else {
                        locationText = '位置：未指定（請先選擇位置或完成一個關卡）';
                    }

                    // Show success message
                    showResult(`🎉 照片上傳成功！<br>${locationText}<br>${gameTypeText}<br>檔案名稱：${fileName}<br>檔案大小：${Math.round(selectedFile.size / 1024)}KB<br>照片已保存到本地`, 'success');

                    // Track successful upload
                    trackEvent('image_uploaded', {
                        file_name: fileName,
                        file_size: selectedFile.size,
                        user_id: window.loginSystem.getCurrentUser(),
                        location_code: currentLocation || null,
                        location_name: locationInfo ? locationInfo.name : null,
                        game_type: locationInfo ? locationInfo.gameType : null
                    });

                    // Clear the form
                    setTimeout(() => {
                        cancelUpload();
                    }, 3000);
                }
            }, 50); // Faster progress updates
        };

        reader.onerror = function () {
            uploadProgress.style.display = 'none';
            showResult('❌ 照片讀取失敗，請重試！', 'error');
        };

        reader.readAsDataURL(selectedFile);

    } catch (error) {
        console.error('Upload error:', error);
        showResult('❌ 照片上傳失敗，請重試！', 'error');
        uploadProgress.style.display = 'none';
    } finally {
        // Hide loading state
        uploadBtn.classList.remove('loading');
        uploadBtn.disabled = false;
    }
}

async function savePhotoToLocalStorage(fileName, base64Data) {
    try {
        // Get existing photos
        const existingPhotos = localStorage.getItem('scavengerHuntPhotos');
        const photos = existingPhotos ? JSON.parse(existingPhotos) : [];

        // Get current location info if available
        let locationInfo = null;

        // Try to get location info from currentLocation first
        if (currentLocation && locationData[currentLocation]) {
            locationInfo = locationData[currentLocation];
        } else {
            // If no currentLocation, try to detect from the last completed location
            const completedLocations = getCompletedLocations();
            if (completedLocations.length > 0) {
                const lastCompletedLocation = completedLocations[completedLocations.length - 1];
                if (locationData[lastCompletedLocation]) {
                    locationInfo = locationData[lastCompletedLocation];
                }
            }
        }

        // Create photo object with enhanced metadata
        const photo = {
            id: window.loginSystem.getCurrentUser(), // Use userID as photo ID
            fileName: fileName,
            originalName: selectedFile.name,
            userID: window.loginSystem.getCurrentUser(),
            timestamp: new Date().toISOString(),
            size: selectedFile.size,
            type: selectedFile.type,
            dataURL: base64Data, // Store the actual image data
            locationCode: currentLocation || null,
            locationName: locationInfo ? locationInfo.name : null,
            gameType: locationInfo ? locationInfo.gameType : null,
            score: locationInfo ? locationInfo.score : null,
            coordinates: locationInfo ? locationInfo.coordinates : null,
            locationDescription: locationInfo ? locationInfo.description : null,
            locationAddress: locationInfo ? locationInfo.address : null,
            locationCategory: locationInfo ? locationInfo.category : null
        };

        // Add to photos array
        photos.push(photo);

        // Save back to localStorage
        localStorage.setItem('scavengerHuntPhotos', JSON.stringify(photos));

        console.log(`Photo saved to localStorage: ${fileName} (${Math.round(selectedFile.size / 1024)}KB)`);
        console.log(`Location: ${locationInfo ? locationInfo.name : 'Unknown'}, Game Type: ${locationInfo ? locationInfo.gameType : 'Unknown'}`);

        // Upload to Firebase if available
        await uploadPhotoToFirebase(photo, selectedFile);

        // Update admin panel if it's open
        if (adminPanel && adminPanel.style.display !== 'none') {
            loadAllPhotos();
        }

    } catch (error) {
        console.error('Error saving photo to localStorage:', error);
        showResult('❌ 照片保存失敗，請重試！', 'error');
    }
}

// Function to upload score to Firebase
async function uploadScoreToFirebase(locationInfo, totalScore, status) {
    try {
        if (!window.db) {
            console.log('⚠️ Firebase not available, skipping score upload');
            return;
        }

        console.log('🚀 Starting Firebase score upload for user:', window.loginSystem.getCurrentUser());

        // Create score data object
        const scoreData = {
            playerName: `玩家${window.loginSystem.getCurrentUser()}`,
            userID: window.loginSystem.getCurrentUser(),
            gameId: `game_${locationInfo.gameType.replace(/\s+/g, '_').toLowerCase()}`,
            score: locationInfo.score,
            totalScore: totalScore,
            status: status, // 'win' or 'lose'
            gameTime: Math.floor(Math.random() * 300) + 60, // Random game time between 60-360 seconds
            timestamp: window.firebase.firestore.FieldValue.serverTimestamp(),
            locationCode: currentLocation,
            locationName: locationInfo.name,
            gameType: locationInfo.gameType,
            locationDescription: locationInfo.description,
            locationAddress: locationInfo.address,
            locationCategory: locationInfo.category,
            coordinates: locationInfo.coordinates
        };

        // Save score data to Firestore
        await window.db.collection('gameScores').add(scoreData);
        console.log('✅ Score saved to Firestore');

        // Track Firebase score upload
        trackEvent('score_uploaded_to_firebase', {
            user_id: scoreData.userID,
            location_code: scoreData.locationCode,
            score: scoreData.score,
            total_score: scoreData.totalScore,
            status: scoreData.status
        });

    } catch (error) {
        console.error('❌ Error uploading score to Firebase:', error);
        showResult('❌ Firebase 分數上傳失敗，但已保存到本地', 'warning');
    }
}

// Function to upload photo to Firebase (Base64 format)
async function uploadPhotoToFirebase(photo, file) {
    try {
        if (!window.db) {
            console.log('⚠️ Firebase not available, skipping upload');
            return;
        }

        console.log('🚀 Starting Firebase upload for photo:', photo.id);

        // Check if this is a 親子打卡 photo that needs manual review
        if (photo.gameType === '趣味親子打卡') {
            // Upload to review queue instead of regular photos
            const reviewPhotoData = {
                ...photo,
                uploadedAt: window.firebase.firestore.FieldValue.serverTimestamp(),
                firebaseId: photo.id,
                status: 'pending', // pending, approved, rejected
                suggestedScore: photo.score || 0, // Default score for review
                reviewedAt: null,
                reviewedBy: null,
                approvedScore: null,
                rejectedReason: null
            };

            // Save to reviewPhotos collection with a unique ID
            const reviewPhotoRef = window.db.collection('reviewPhotos').doc();
            await reviewPhotoRef.set(reviewPhotoData);

            console.log('✅ Photo saved to review queue for manual approval');

            // Track review photo upload
            trackEvent('photo_uploaded_to_review_queue', {
                photo_id: photo.id,
                user_id: photo.userID,
                location_code: photo.locationCode,
                game_type: photo.gameType,
                status: 'pending'
            });

            // Show message indicating manual review is required
            showResult(`
            📸 照片上傳成功！
            <br><strong>位置：</strong>${photo.locationName}
            <br><strong>遊戲類型：</strong>${photo.gameType}
            <br><strong>狀態：</strong>⏳ 等待管理員人工審核
            <br><br>✅ 管理員審核通過後您將獲得加分！
        `, 'success');

        } else {
            // For non-親子打卡 photos, upload to regular photos collection
            const photoData = {
                ...photo,
                uploadedAt: window.firebase.firestore.FieldValue.serverTimestamp(),
                firebaseId: photo.id
            };

            // Keep the Base64 data in Firestore - use userID as document ID
            await window.db.collection('photos').doc(photo.userID).set(photoData);
            console.log('✅ Photo saved to Firestore (Base64 format)');

            // Track Firebase upload
            trackEvent('photo_uploaded_to_firebase', {
                photo_id: photo.id,
                user_id: photo.userID,
                location_code: photo.locationCode,
                format: 'base64'
            });
        }

        // Trigger photo uploaded event for auto-sync
        window.dispatchEvent(new CustomEvent('photoUploaded', {
            detail: {
                photo: photo,
                userID: photo.userID,
                locationCode: photo.locationCode,
                requiresReview: photo.gameType === '趣味親子打卡'
            }
        }));

    } catch (error) {
        console.error('❌ Error uploading to Firebase:', error);
        showResult('❌ Firebase 上傳失敗，但已保存到本地', 'warning');
    }
}

function getGameTypeFolder(gameType) {
    switch (gameType) {
        case '趣味親子打卡':
            return 'parent-child-checkin';
        case '開發者遊戲挑戰':
            return 'developer-game-challenge';
        case '難題解答挑戰':
            return 'puzzle-solving-challenge';
        case '闖關點':
            return 'checkpoint';
        case '尋找灣仔海濱同事':
            return 'find-colleague';
        default:
            return 'general';
    }
}

function cancelUpload() {
    selectedFile = null;
    imageInput.value = '';
    imagePreview.style.display = 'none';
    uploadProgress.style.display = 'none';
    progressFill.style.width = '0%';
}

async function checkPassword() { // This function now checks location codes
    const submitBtn = document.getElementById('submit-btn');

    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    try {
        if (!window.loginSystem || !window.loginSystem.isSignedIn() || !window.loginSystem.getCurrentUser()) {
            showResult('請先登入玩家帳號！', 'error');
            trackEvent('location_code_error', { error_type: 'not_signed_in' });
            return;
        }

        const enteredPassword = passwordInput.value.trim().toUpperCase();

        if (!enteredPassword) {
            showResult('請輸入關卡代碼！', 'error');
            trackEvent('location_code_error', { error_type: 'empty_code' });
            return;
        }

        // Check if a location is selected
        if (!currentLocation) {
            showResult('❌ 請先選擇一個位置！', 'error');
            passwordInput.value = '';
            passwordInput.focus();
            return;
        }

        // Check if entered code matches the selected location
        if (enteredPassword !== currentLocation) {
            showResult('❌ 關卡代碼不正確，請檢查後重試！', 'error');
            passwordInput.value = '';
            passwordInput.focus();

            // Track invalid code
            trackEvent('location_code_invalid', {
                entered_code: enteredPassword,
                expected_code: currentLocation,
                user_id: window.loginSystem.getCurrentUser()
            });
            return;
        }

        // Code is correct for the selected location
        const locationInfo = locationData[currentLocation];

        // Track code verification attempt
        trackEvent('location_code_verified', {
            location_name: locationInfo.name,
            entered_code: enteredPassword,
            is_correct: true,
            user_id: window.loginSystem.getCurrentUser()
        });

        // Check if already completed
        const completedLocations = getCompletedLocations();
        if (completedLocations.includes(currentLocation)) {
            showResult(`✅ 玩家${window.loginSystem.getCurrentUser()}已完成此位置：${locationInfo.name}<br>您已經獲得過 ${locationInfo.score} 分！`, 'info');

            // Track already completed
            trackEvent('location_already_completed', {
                location_name: locationInfo.name,
                user_id: window.loginSystem.getCurrentUser()
            });

            // Clear form
            setTimeout(() => {
                passwordInput.value = '';
                clearResultMessage();
            }, 3000);
            return;
        }

        // Create new completed locations array for all cases
        const newCompletedLocations = [...completedLocations, currentLocation];
        let newTotalScore = getTotalScore();

        // Check if this is a 親子打卡 (parent-child check-in) location that requires manual review
        if (locationInfo.gameType === '趣味親子打卡') {
            // For 親子打卡 locations, don't award points automatically
            // Instead, mark as completed but pending review
            // totalScore: newTotalScore, // Keep current score

            // Sync back to login system (without adding score)
            if (window.loginSystem) {
                window.loginSystem.setCompletedLocations(newCompletedLocations);
                window.loginSystem.saveCurrentUserData();
            }

            // Update displays
            updateProgressDisplay();

            // Show message indicating manual review is required
            showResult(`
            🎉 恭喜玩家${window.loginSystem.getCurrentUser()}！
            <br><strong>關卡代碼驗證成功：</strong>${enteredPassword}
            <br><strong>位置：</strong>${locationInfo.name}
            <br><strong>遊戲類型：</strong>${locationInfo.gameType}
            <br><strong>狀態：</strong>✅ 位置完成，等待人工審核加分
            <br><strong>完成進度：</strong>${newCompletedLocations.length}/21
            <br><br>📸 請上傳照片以獲得加分！
        `, 'success');

            // Track completion without score
            trackEvent('location_completed_pending_review', {
                location_name: locationInfo.name,
                game_type: locationInfo.gameType,
                user_id: window.loginSystem.getCurrentUser(),
                verified_code: enteredPassword,
                status: 'pending_review'
            });

            // Show image upload section for 親子打卡 locations after successful verification
            const imageUploadSection = document.getElementById('image-upload-section');
            if (imageUploadSection) {
                imageUploadSection.style.display = 'block';
                updateUploadSectionTitle(locationInfo.gameType);
            }

            // Auto-close location list after successful verification (with delay for better UX)
            setTimeout(() => {
                if (progressContent && !progressContent.classList.contains('collapsed')) {
                    progressContent.classList.add('collapsed');
                    toggleIcon.textContent = '+';
                    progressContent.style.maxHeight = '0';

                    // Track progress section auto-collapsed
                    trackEvent('progress_section_auto_collapsed', {
                        action: 'successful_verification',
                        location_code: currentLocation
                    });
                }
            }, 2000); // 2 second delay to let user see the success message

            // Trigger location completed event for auto-sync
            window.dispatchEvent(new CustomEvent('locationCompleted', {
                detail: {
                    locationCode: currentLocation,
                    locationInfo: locationInfo,
                    totalScore: newTotalScore, // Keep current score
                    completedLocations: newCompletedLocations,
                    requiresReview: true
                }
            }));

        } else {
            // For non-親子打卡 locations, award points automatically
            newTotalScore = getTotalScore() + locationInfo.score;

            // Sync back to login system
            if (window.loginSystem) {
                window.loginSystem.setCompletedLocations(newCompletedLocations);
                window.loginSystem.setTotalScore(newTotalScore);
                window.loginSystem.saveCurrentUserData();
            }

            // Update displays
            updateProgressDisplay();
            updateScoreDisplay();

            // Add celebration effects
            addConfetti();

            // Show success message with detailed info
            showResult(`
            🎉 恭喜玩家${window.loginSystem.getCurrentUser()}！
            <br><strong>關卡代碼驗證成功：</strong>${enteredPassword}
            <br><strong>位置：</strong>${locationInfo.name}
            <br><strong>遊戲類型：</strong>${locationInfo.gameType}
            <br><strong>獲得分數：</strong>${locationInfo.score}分
            <br><strong>總分：</strong>${newTotalScore}分
            <br><strong>完成進度：</strong>${newCompletedLocations.length}/21
        `, 'success');

            // Track successful completion
            trackEvent('location_completed', {
                location_name: locationInfo.name,
                game_type: locationInfo.gameType,
                score_earned: locationInfo.score,
                total_score: newTotalScore,
                completion_count: newCompletedLocations.length,
                user_id: window.loginSystem.getCurrentUser(),
                verified_code: enteredPassword
            });

            // Upload score to Firebase
            uploadScoreToFirebase(locationInfo, newTotalScore, 'win');

            // Show quiz section for 難題解答挑戰 locations after successful verification
            if (locationInfo.gameType === '難題解答挑戰') {
                showQuizForLocation(enteredPassword);
            }

            // Show image upload section for supported locations after successful verification
            if (ALLOWED_UPLOAD_CODES.includes(currentLocation)) {
                const imageUploadSection = document.getElementById('image-upload-section');
                if (imageUploadSection) {
                    imageUploadSection.style.display = 'block';
                    updateUploadSectionTitle(locationInfo.gameType);
                }
            }

            // Auto-close location list after successful verification (with delay for better UX)
            setTimeout(() => {
                if (progressContent && !progressContent.classList.contains('collapsed')) {
                    progressContent.classList.add('collapsed');
                    toggleIcon.textContent = '+';
                    progressContent.style.maxHeight = '0';

                    // Track progress section auto-collapsed
                    trackEvent('progress_section_auto_collapsed', {
                        action: 'successful_verification',
                        location_code: currentLocation
                    });
                }
            }, 2000); // 2 second delay to let user see the success message

            // Trigger location completed event for auto-sync
            window.dispatchEvent(new CustomEvent('locationCompleted', {
                detail: {
                    locationCode: currentLocation,
                    locationInfo: locationInfo,
                    totalScore: newTotalScore,
                    completedLocations: newCompletedLocations
                }
            }));
        }

        // Check if game is completed
        if (newCompletedLocations.length === 21) {
            setTimeout(() => {
                showResult(`
                🏆 恭喜玩家${window.loginSystem.getCurrentUser()}完成整個尋寶遊戲！
                <br><strong>總分：</strong>${newTotalScore}分
                <br><strong>完成時間：</strong>${new Date().toLocaleString('zh-TW')}
                <br>🎊 您已成為尋寶大師！🎊
            `, 'success');

                // Track game completion
                trackEvent('game_completed', {
                    user_id: window.loginSystem.getCurrentUser(),
                    total_score: newTotalScore,
                    completion_time: new Date().toISOString()
                });
            }, 2000);
        }

        // Clear form after delay
        setTimeout(() => {
            passwordInput.value = '';
            clearResultMessage();

            // Hide password input group after successful completion
            const passwordInputGroup = document.getElementById('password-input-group');
            if (passwordInputGroup) {
                passwordInputGroup.style.display = 'none';
            }

            // Auto-expand progress section after successful completion
            if (progressContent && progressContent.classList.contains('collapsed')) {
                progressContent.classList.remove('collapsed');
                toggleIcon.textContent = '−';
                progressContent.style.maxHeight = progressContent.scrollHeight + 'px';

                // Track progress section auto-expanded
                trackEvent('progress_section_auto_expanded', {
                    action: 'completion_success',
                    location_name: locationInfo.name
                });
            }
        }, 5000);

    } catch (error) {
        console.error('Password check error:', error);
        showResult('處理密碼時發生錯誤，請重試！', 'error');
    } finally {
        // Hide loading state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
}

function showResult(message, type) {
    resultMessage.innerHTML = message;
    resultMessage.className = `result-message ${type}`;
}

function clearResultMessage() {
    resultMessage.textContent = '';
    resultMessage.className = 'result-message';
}

function initializeProgressGrid() {
    progressGrid.innerHTML = '';

    // Hide password input group initially
    const passwordInputGroup = document.getElementById('password-input-group');
    if (passwordInputGroup) {
        passwordInputGroup.style.display = 'none';
    }

    Object.entries(locationData).forEach(([password, info]) => {
        const progressItem = document.createElement('div');
        progressItem.className = 'progress-item';
        progressItem.dataset.password = password;

        const completedLocations = getCompletedLocations();
        const isCompleted = completedLocations.includes(password);
        if (isCompleted) {
            progressItem.classList.add('completed');
        }

        const gameTypeColor = gameTypeColors[info.gameType];

        // Hide location code - only show it when completed
        const passwordDisplay = isCompleted ? password : '????';

        progressItem.innerHTML = `
            <div class="location-name">${info.name}</div>
            <div class="password">${passwordDisplay}</div>
            <div class="game-type" style="color: ${gameTypeColor}; font-size: 10px; margin-top: 5px;">${info.gameType}</div>
            <div class="score" style="font-size: 12px; font-weight: bold; color: #1849a8;">${info.score}分</div>
        `;

        // Add click event to select location
        progressItem.addEventListener('click', function () {
            // Show location info and prompt for code input
            const locationInfo = locationData[password];
            const categoryInfo = locationInfo.category && locationCategories[locationInfo.category]
                ? locationCategories[locationInfo.category]
                : null;

            // Check if this location supports photo upload
            const supportsUpload = ALLOWED_UPLOAD_CODES.includes(password);
            const uploadStatus = supportsUpload ?
                '<div style="margin-top: 8px; color: #28a745; font-weight: bold;">📸 支援照片上傳</div>' :
                '<div style="margin-top: 8px; color: #6c757d; font-style: italic;">📸 不支援照片上傳</div>';

            currentLocationDisplay.innerHTML = `
                <div style="margin-bottom: 10px;">
                    <strong style="font-size: 1.2em; color: ${categoryInfo ? categoryInfo.color : '#333'};">
                        ${categoryInfo ? categoryInfo.icon : '📍'} ${locationInfo.name}
                    </strong>
                </div>
                <div style="font-size: 0.9em; color: #666; line-height: 1.4;">
                    <div><strong>📍 地址:</strong> ${locationInfo.address || '地址待定'}</div>
                    <div><strong>🎮 遊戲類型:</strong> ${locationInfo.gameType}</div>
                    <div><strong>🏆 分數:</strong> ${locationInfo.score}分</div>
                    <div><strong>📍 座標:</strong> ${locationInfo.coordinates}</div>
                    ${locationInfo.description ? `<div style="margin-top: 8px; font-style: italic; color: #888;"><strong>📝 描述:</strong> ${locationInfo.description}</div>` : ''}
                    ${uploadStatus}
                </div>
                <div style="margin-top: 15px; padding: 10px; background-color: #f8f9fa; border-radius: 5px; border-left: 4px solid #007bff;">
                    <strong>🔐 請輸入關卡代碼：</strong>
                    <div style="margin-top: 8px; font-size: 0.9em; color: #666;">
                        請輸入正確的關卡代碼來驗證您已到達此位置
                    </div>
                </div>
            `;

            // Set current location for validation
            currentLocation = password;

            // Show password input group
            const passwordInputGroup = document.getElementById('password-input-group');
            if (passwordInputGroup) {
                passwordInputGroup.style.display = 'flex';
            }

            passwordInput.focus();
            clearResultMessage();

            // Show photo upload section for supported locations immediately
            if (ALLOWED_UPLOAD_CODES.includes(password)) {
                imageUploadSection.style.display = 'block';
                updateUploadSectionTitle(locationInfo.gameType);
            } else {
                imageUploadSection.style.display = 'none';
            }

            // Hide quiz section initially - it will be shown after code verification
            hideQuiz();

            // Update upload section with location info (but keep hidden)
            const uploadTitle = document.querySelector('.image-upload-section h3');
            if (uploadTitle) {
                uploadTitle.innerHTML = `📸 照片上傳 - ${locationInfo.name}`;
            }

            // Auto-collapse progress section after selecting location
            if (progressContent && !progressContent.classList.contains('collapsed')) {
                progressContent.classList.add('collapsed');
                toggleIcon.textContent = '+';
                progressContent.style.maxHeight = '0';

                // Track progress section auto-collapsed
                trackEvent('progress_section_auto_collapsed', {
                    location_name: locationInfo.name,
                    location_category: locationInfo.category
                });
            }

            // Track progress item click
            trackEvent('progress_item_clicked', {
                location_name: locationInfo.name,
                location_category: locationInfo.category,
                is_completed: isCompleted
            });
        });

        progressGrid.appendChild(progressItem);
    });
}

function updateProgressDisplay() {
    const progressItems = progressGrid.querySelectorAll('.progress-item');
    const completedLocations = getCompletedLocations();

    progressItems.forEach(item => {
        const password = item.dataset.password;
        const isCompleted = completedLocations.includes(password);

        if (isCompleted) {
            item.classList.add('completed');
            // Show the actual location code when completed
            const passwordElement = item.querySelector('.password');
            if (passwordElement) {
                passwordElement.textContent = password;
            }
        } else {
            item.classList.remove('completed');
            // Hide location code with question marks
            const passwordElement = item.querySelector('.password');
            if (passwordElement) {
                passwordElement.textContent = '????';
            }
        }
    });

    // Update completion stats
    const totalLocations = Object.keys(locationData).length;
    const completedCount = completedLocations.length;
    const completionPercentage = Math.round((completedCount / totalLocations) * 100);

    // Add completion message if all locations are completed
    if (completedCount === totalLocations) {
        const totalScore = getTotalScore();
        showResult('🎊 恭喜！您已完成整個尋寶遊戲！🎊<br>總分：' + totalScore + '分', 'success');

        // Track game completion
        trackEvent('game_completed', {
            total_score: totalScore,
            completion_time: new Date().toISOString()
        });
    }
}

function updateScoreDisplay() {
    // Only show score display for admin users
    let scoreDisplay = document.getElementById('score-display');

    // Check if admin panel is visible (admin mode)
    const adminPanel = document.getElementById('admin-panel');
    const isAdminMode = adminPanel && adminPanel.style.display !== 'none';

    if (isAdminMode) {
        // Show score display for admin
        if (!scoreDisplay) {
            scoreDisplay = document.createElement('div');
            scoreDisplay.id = 'score-display';
            scoreDisplay.className = 'score-display admin-score-display';
            document.querySelector('.header').appendChild(scoreDisplay);
        }

        // Get current user
        const currentUser = window.loginSystem ? window.loginSystem.getCurrentUser() : null;

        // Initially show local score, then update with Firebase score in background
        let displayScore = getTotalScore();

        // Update with Firebase score in background if available
        if (currentUser && typeof getUserScoreFromFirebase === 'function') {
            getUserScoreFromFirebase(currentUser).then(firebaseScore => {
                console.log(`✅ Retrieved Firebase score for user ${currentUser}: ${firebaseScore}`);

                // Update the display with Firebase score
                const scoreValueElement = scoreDisplay.querySelector('.score-value');
                if (scoreValueElement) {
                    scoreValueElement.textContent = `${firebaseScore}分`;
                }
            }).catch(error => {
                console.error('❌ Error getting Firebase score:', error);
                // Keep local score if Firebase fails
            });
        }

        const currentCompletedLocations = getCompletedLocations();
        scoreDisplay.innerHTML = `
            <div class="score-info">
                <span class="score-label">總分：</span>
                <span class="score-value">${displayScore}分</span>
                <span class="progress-label">進度：</span>
                <span class="progress-value">${currentCompletedLocations.length}/${Object.keys(locationData).length}</span>
            </div>
        `;
        scoreDisplay.style.display = 'block';
    } else {
        // Hide score display for regular users
        if (scoreDisplay) {
            scoreDisplay.style.display = 'none';
        }
    }
}

function updateUserStats() {
    const allUsers = window.loginSystem ? window.loginSystem.getAllUsers() : {};
    const totalUsers = Object.keys(allUsers).length;
    let activeUsers = 0;
    let completedUsers = 0;
    let totalScoreSum = 0;
    let juniorUsers = 0;
    let seniorUsers = 0;
    let juniorScore = 0;
    let seniorScore = 0;

    // Calculate user statistics
    Object.values(allUsers).forEach(user => {
        if (user.lastPlayed) {
            activeUsers++;
        }
        if (user.completedLocations.length === 21) {
            completedUsers++;
        }
        totalScoreSum += user.totalScore;

        // Group statistics
        if (user.group === 'Junior') {
            juniorUsers++;
            juniorScore += user.totalScore;
        } else if (user.group === 'Senior') {
            seniorUsers++;
            seniorScore += user.totalScore;
        }
    });

    // Get top 5 users by points
    const topUsers = Object.values(allUsers)
        .sort((a, b) => b.totalScore - a.totalScore)
        .slice(0, 5);

    // Update stats display
    document.getElementById('total-users').textContent = totalUsers;
    document.getElementById('active-users').textContent = activeUsers;
    document.getElementById('completed-users').textContent = completedUsers;
    document.getElementById('total-score').textContent = totalScoreSum;

    // Update group stats if elements exist
    const juniorStatsElement = document.getElementById('junior-stats');
    const seniorStatsElement = document.getElementById('senior-stats');

    if (juniorStatsElement) {
        juniorStatsElement.innerHTML = `
            <div class="group-stat">
                <span class="group-label">Junior組 (101-150):</span>
                <span class="group-count">${juniorUsers}人</span>
                <span class="group-score">${juniorScore}分</span>
            </div>
        `;
    }

    if (seniorStatsElement) {
        seniorStatsElement.innerHTML = `
            <div class="group-stat">
                <span class="group-label">Senior組 (201-250):</span>
                <span class="group-count">${seniorUsers}人</span>
                <span class="group-score">${seniorScore}分</span>
            </div>
        `;
    }

    // Update winners list with top 5 users
    displayTopUsers(topUsers);
}

function displayTopUsers(topUsers) {
    if (topUsers.length === 0) {
        winnersList.innerHTML = '<div class="no-photos">暫無玩家數據</div>';
        return;
    }

    winnersList.innerHTML = topUsers.map((user, index) => {
        const rank = index + 1;
        const rankClass = `rank-${rank}`;
        const userGroup = user.group || 'Unknown';
        const groupBadge = userGroup === 'Junior' ? '<span class="group-badge junior">Junior</span>' : '<span class="group-badge senior">Senior</span>';

        return `
            <div class="winner-card">
                <div class="rank-badge ${rankClass}">${rank}</div>
                <div class="winner-photo">👤</div>
                <div class="winner-info">
                    <h4>玩家${user.id} ${groupBadge}</h4>
                    <p>完成位置: ${user.completedLocations.length}/21</p>
                    <p>最後遊戲: ${user.lastPlayed ? new Date(user.lastPlayed).toLocaleDateString('zh-TW') : '從未遊戲'}</p>
                    <div class="winner-score">${user.totalScore}分</div>
                </div>
            </div>
        `;
    }).join('');
}

function exportUserData() {
    const allUsers = window.loginSystem ? window.loginSystem.getAllUsers() : {};
    const currentUser = window.loginSystem ? window.loginSystem.getCurrentUser() : null;
    const userData = {
        users: allUsers,
        photos: getAllPhotosFromLocalStorage(),
        exportTime: new Date().toISOString(),
        totalUsers: Object.keys(allUsers).length,
        totalPhotos: getAllPhotosFromLocalStorage().length,
        currentUser: currentUser
    };

    const dataStr = JSON.stringify(userData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `scavenger-hunt-data-${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    // Track export
    trackEvent('admin_data_exported', {
        total_users: Object.keys(allUsers).length,
        total_photos: getAllPhotosFromLocalStorage().length
    });
}

function resetAllUsers() {
    if (confirm('您確定要重置所有200個玩家的進度嗎？此操作無法撤銷！')) {
        const allUsers = window.loginSystem ? window.loginSystem.getAllUsers() : {};

        // Reset all users
        Object.keys(allUsers).forEach(userId => {
            allUsers[userId].completedLocations = [];
            allUsers[userId].totalScore = 0;
            allUsers[userId].lastPlayed = null;
        });

        // Save to localStorage
        localStorage.setItem('scavengerHuntUsers', JSON.stringify(allUsers));

        // Reload current user data
        if (window.loginSystem) {
            window.loginSystem.loadCurrentUserData();
        }

        // Update displays
        updateProgressDisplay();
        updateScoreDisplay();
        updateUserStats();

        // Track reset
        trackEvent('admin_all_users_reset', {
            total_users: Object.keys(allUsers).length
        });

        alert('所有玩家進度已重置！');
    }
}

function clearAllPhotos() {
    if (confirm('您確定要清除所有上傳的照片嗎？此操作無法撤銷！')) {
        // Clear photos from localStorage
        localStorage.removeItem('scavengerHuntPhotos');

        // Update admin panel
        loadAllPhotos();

        // Track clear
        trackEvent('admin_photos_cleared');

        alert('所有照片已清除！');
    }
}

// User management functions
async function searchUser() {
    const searchUserBtn = document.getElementById('search-user-btn');

    // Show loading state
    searchUserBtn.classList.add('loading');
    searchUserBtn.disabled = true;

    try {
        const userSearchInput = document.getElementById('user-search-input');
        const userDetails = document.getElementById('user-details');
        const selectedUserName = document.getElementById('selected-user-name');
        const userCompletedCount = document.getElementById('user-completed-count');
        const userCurrentScore = document.getElementById('user-current-score');
        const userPointsInput = document.getElementById('user-points-input');

        const searchValue = userSearchInput.value.trim();

        if (!searchValue) {
            alert('請輸入玩家編號！');
            return;
        }

        // Pad with zeros if needed
        const paddedUserId = searchValue.padStart(3, '0');

        const allUsers = window.loginSystem ? window.loginSystem.getAllUsers() : {};

        // Check if user exists
        if (!allUsers[paddedUserId]) {
            alert('玩家不存在！');
            userDetails.style.display = 'none';
            return;
        }

        const user = allUsers[paddedUserId];

        // Update user details display
        const userGroup = user.group || 'Unknown';
        const groupBadge = userGroup === 'Junior' ? '<span class="group-badge junior">Junior</span>' : '<span class="group-badge senior">Senior</span>';
        selectedUserName.innerHTML = `玩家${paddedUserId} ${groupBadge}`;
        userCompletedCount.textContent = user.completedLocations.length;
        userCurrentScore.textContent = user.totalScore;
        userPointsInput.value = user.totalScore;

        // Show user details
        userDetails.style.display = 'block';

        // Load user photos
        loadUserPhotos(paddedUserId);

        // Track user search
        trackEvent('admin_user_searched', {
            user_id: paddedUserId,
            user_score: user.totalScore,
            user_completed_locations: user.completedLocations.length
        });

    } catch (error) {
        console.error('Search user error:', error);
        alert('搜尋玩家時發生錯誤，請重試！');
    } finally {
        // Hide loading state
        searchUserBtn.classList.remove('loading');
        searchUserBtn.disabled = false;
    }
}

async function updateUserPoints() {
    const updateUserPointsBtn = document.getElementById('update-user-points-btn');

    // Show loading state
    updateUserPointsBtn.classList.add('loading');
    updateUserPointsBtn.disabled = true;

    try {
        const userSearchInput = document.getElementById('user-search-input');
        const userPointsInput = document.getElementById('user-points-input');
        const userCurrentScore = document.getElementById('user-current-score');

        const searchValue = userSearchInput.value.trim();
        const newPoints = parseInt(userPointsInput.value);

        if (!searchValue) {
            alert('請先搜尋玩家！');
            return;
        }

        if (isNaN(newPoints) || newPoints < 0) {
            alert('請輸入有效的分數！');
            return;
        }

        // Pad with zeros if needed
        const paddedUserId = searchValue.padStart(3, '0');

        const allUsers = window.loginSystem ? window.loginSystem.getAllUsers() : {};

        // Check if user exists
        if (!allUsers[paddedUserId]) {
            alert('玩家不存在！');
            return;
        }

        const oldScore = allUsers[paddedUserId].totalScore;

        // Update user score
        allUsers[paddedUserId].totalScore = newPoints;
        allUsers[paddedUserId].lastPlayed = new Date().toISOString();

        // Save to localStorage
        localStorage.setItem('scavengerHuntUsers', JSON.stringify(allUsers));

        // Update display
        userCurrentScore.textContent = newPoints;

        // Update winners list
        calculateWinners();
        displayWinners();

        // Track points update
        trackEvent('admin_user_points_updated', {
            user_id: paddedUserId,
            old_score: oldScore,
            new_score: newPoints,
            score_difference: newPoints - oldScore
        });

        alert(`玩家${paddedUserId}的分數已更新為 ${newPoints} 分！`);

    } catch (error) {
        console.error('Update user points error:', error);
        alert('更新玩家分數時發生錯誤，請重試！');
    } finally {
        // Hide loading state
        updateUserPointsBtn.classList.remove('loading');
        updateUserPointsBtn.disabled = false;
    }
}

function loadUserPhotos(userId) {
    const userPhotosGrid = document.getElementById('user-photos-grid');
    const photos = getAllPhotosFromLocalStorage();

    // Filter photos by user ID
    const userPhotos = photos.filter(photo => photo.userID === userId);

    if (userPhotos.length === 0) {
        userPhotosGrid.innerHTML = '<div class="no-photos">此玩家暫無上傳照片</div>';
        return;
    }

    userPhotosGrid.innerHTML = userPhotos.map(photo => {
        const timestamp = new Date(photo.timestamp);
        const formattedTime = timestamp.toLocaleString('zh-TW');

        return `
            <div class="user-photo-card">
                <div class="user-photo-image-container">
                    ${photo.dataURL ?
                `<img src="${photo.dataURL}" alt="${photo.fileName}" class="user-photo-image" onerror="this.parentElement.innerHTML='<div class=\\'user-photo-placeholder\\'>📸</div>'">` :
                `<div class="user-photo-placeholder">📸</div>`
            }
                </div>
                <div class="user-photo-info">
                    <div>${photo.originalName || photo.fileName}</div>
                    <div>${formattedTime}</div>
                </div>
            </div>
        `;
    }).join('');
}

async function getPhotoStatistics() {
    const photos = await getAllPhotosFromLocalStorage();

    // Ensure photos is an array
    if (!Array.isArray(photos)) {
        console.warn('⚠️ Photos is not an array, returning empty stats');
        return {
            totalPhotos: 0,
            totalSize: 0,
            photosByUser: {},
            photosByLocation: {},
            photosByGameType: {},
            photosByDate: {}
        };
    }

    const stats = {
        totalPhotos: photos.length,
        totalSize: photos.reduce((sum, photo) => sum + (photo.size || 0), 0),
        photosByUser: {},
        photosByLocation: {},
        photosByGameType: {},
        photosByDate: {}
    };

    photos.forEach(photo => {
        // Count by user
        stats.photosByUser[photo.userID] = (stats.photosByUser[photo.userID] || 0) + 1;

        // Count by location
        if (photo.locationCode) {
            stats.photosByLocation[photo.locationCode] = (stats.photosByLocation[photo.locationCode] || 0) + 1;
        }

        // Count by game type
        if (photo.gameType) {
            stats.photosByGameType[photo.gameType] = (stats.photosByGameType[photo.gameType] || 0) + 1;
        }

        // Count by date
        const date = new Date(photo.timestamp).toLocaleDateString('zh-TW');
        stats.photosByDate[date] = (stats.photosByDate[date] || 0) + 1;
    });

    return stats;
}

// Function to display photo statistics
async function displayPhotoStatistics() {
    const stats = await getPhotoStatistics();
    const totalSizeMB = Math.round(stats.totalSize / (1024 * 1024) * 100) / 100;

    console.log('📊 Photo Statistics:');
    console.log(`Total Photos: ${stats.totalPhotos}`);
    console.log(`Total Size: ${totalSizeMB}MB`);
    console.log('Photos by User:', stats.photosByUser);
    console.log('Photos by Location:', stats.photosByLocation);
    console.log('Photos by Game Type:', stats.photosByGameType);
    console.log('Photos by Date:', stats.photosByDate);

    return stats;
}

// Add some fun animations and effects
function addConfetti() {
    // Simple confetti effect for completed locations
    const colors = ['#9d7de6', '#1849a8', '#f7901e', '#28a745', '#17a2b8'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Add reset functionality (for testing purposes)
function resetProgress() {
    if (!window.loginSystem || !window.loginSystem.isSignedIn() || !window.loginSystem.getCurrentUser()) {
        showResult('請先登入玩家帳號！', 'error');
        return;
    }

    if (confirm(`您確定要重置玩家${window.loginSystem.getCurrentUser()}的所有進度嗎？此操作無法撤銷。`)) {
        const emptyLocations = [];
        const zeroScore = 0;

        // Sync back to login system
        if (window.loginSystem) {
            window.loginSystem.setCompletedLocations(emptyLocations);
            window.loginSystem.setTotalScore(zeroScore);
            window.loginSystem.saveCurrentUserData();
        }

        updateProgressDisplay();
        updateScoreDisplay();
        clearResultMessage();

        // Hide password input group after reset
        const passwordInputGroup = document.getElementById('password-input-group');
        if (passwordInputGroup) {
            passwordInputGroup.style.display = 'none';
        }

        // Hide quiz and image upload sections after reset
        hideQuiz();
        const imageUploadSection = document.getElementById('image-upload-section');
        if (imageUploadSection) {
            imageUploadSection.style.display = 'none';
        }

        showResult(`玩家${window.loginSystem.getCurrentUser()}的進度已重置！`, 'info');

        // Track progress reset
        trackEvent('progress_reset', {
            user_id: window.loginSystem.getCurrentUser()
        });
    }
}

// Add keyboard shortcuts
document.addEventListener('keydown', function (e) {
    // Ctrl/Cmd + R to reset progress
    if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
        e.preventDefault();
        resetProgress();
    }

    // Ctrl/Cmd + P to toggle progress section
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        toggleProgressSection();
    }

    // Ctrl/Cmd + L to sign out
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        if (window.loginSystem && window.loginSystem.isSignedIn()) {
            window.loginSystem.handleSignout();
        }
    }

    // Escape to clear current selection
    if (e.key === 'Escape') {
        passwordInput.value = '';
        currentLocation = '';
        currentLocationDisplay.textContent = '請選擇位置並輸入關卡代碼';
        imageUploadSection.style.display = 'none';
        hideQuiz();

        // Hide password input group
        const passwordInputGroup = document.getElementById('password-input-group');
        if (passwordInputGroup) {
            passwordInputGroup.style.display = 'none';
        }

        cancelUpload();
        clearResultMessage();

        // Auto-expand progress section when clearing selection
        if (progressContent && progressContent.classList.contains('collapsed')) {
            progressContent.classList.remove('collapsed');
            toggleIcon.textContent = '−';
            progressContent.style.maxHeight = progressContent.scrollHeight + 'px';

            // Track progress section auto-expanded
            trackEvent('progress_section_auto_expanded', {
                action: 'escape_clear'
            });
        }
    }
});

// Add helpful tooltip for keyboard shortcuts
console.log('鍵盤快捷鍵：');
console.log('- Ctrl/Cmd + R: 重置進度');
console.log('- Ctrl/Cmd + P: 切換進度追蹤');
console.log('- Ctrl/Cmd + L: 登出');
console.log('- Escape: 清除當前選擇');
console.log('- Enter: 驗證關卡代碼');

// Test function to verify photo upload system
function testPhotoUpload() {
    console.log('Testing photo upload system...');

    // Check if localStorage is available
    if (typeof (Storage) !== "undefined") {
        console.log('✅ localStorage is available');
    } else {
        console.log('❌ localStorage is not available');
        return;
    }

    // Check existing photos
    const existingPhotos = localStorage.getItem('scavengerHuntPhotos');
    if (existingPhotos) {
        const photos = JSON.parse(existingPhotos);
        console.log(`📸 Found ${photos.length} existing photos in localStorage`);

        // Display photo statistics
        const stats = getPhotoStatistics();
        console.log('📊 Photo Statistics:');
        console.log(`Total Photos: ${stats.totalPhotos}`);
        console.log(`Total Size: ${Math.round(stats.totalSize / (1024 * 1024) * 100) / 100}MB`);
        console.log('Photos by User:', stats.photosByUser);
        console.log('Photos by Location:', stats.photosByLocation);
        console.log('Photos by Game Type:', stats.photosByGameType);

        // Show recent photos
        const recentPhotos = photos.slice(-5);
        console.log('📸 Recent 5 photos:');
        recentPhotos.forEach((photo, index) => {
            const locationText = photo.locationName ? `at ${photo.locationName}` : 'at unknown location';
            console.log(`${index + 1}. ${photo.fileName} by User ${photo.userID} ${locationText} (${Math.round(photo.size / 1024)}KB)`);
        });
    } else {
        console.log('📸 No existing photos found in localStorage');
    }

    // Check users
    const existingUsers = localStorage.getItem('scavengerHuntUsers');
    if (existingUsers) {
        const users = JSON.parse(existingUsers);
        console.log(`👥 Found ${Object.keys(users).length} users in localStorage`);

        // Show active users (users with photos)
        const activeUsers = Object.values(users).filter(user => user.lastPlayed);
        console.log(`👥 Active users: ${activeUsers.length}`);
    } else {
        console.log('👥 No users found in localStorage');
    }

    // Check if login system is available
    if (window.loginSystem) {
        console.log('✅ Login system is available');
        if (window.loginSystem.isSignedIn()) {
            console.log(`✅ User ${window.loginSystem.getCurrentUser()} is signed in`);
        } else {
            console.log('❌ No user is signed in');
        }
    } else {
        console.log('❌ Login system is not available');
    }

    // Check if Firebase is available
    if (window.db && window.storage) {
        console.log('✅ Firebase is available');
        console.log('📊 Firestore database:', window.db ? 'Connected' : 'Not connected');
        console.log('📁 Firebase Storage:', window.storage ? 'Available' : 'Not available');
    } else {
        console.log('❌ Firebase is not available');
    }

    // Check if photo upload elements exist
    const imageUploadSection = document.getElementById('image-upload-section');
    const imageInput = document.getElementById('image-input');
    const uploadBtn = document.getElementById('upload-btn');

    if (imageUploadSection) {
        console.log('✅ Photo upload section found');
        console.log(`📸 Upload section visibility: ${imageUploadSection.style.display !== 'none' ? 'visible' : 'hidden'}`);
    } else {
        console.log('❌ Photo upload section not found');
    }

    if (imageInput) console.log('✅ Image input found');
    if (uploadBtn) console.log('✅ Upload button found');
}

// Function to create a test photo (for testing purposes)
function createTestPhoto() {
    if (!window.loginSystem || !window.loginSystem.isSignedIn()) {
        alert('請先登入玩家帳號！');
        return;
    }

    // Create a simple test image using canvas
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');

    // Draw a simple test image
    ctx.fillStyle = '#3498db';
    ctx.fillRect(0, 0, 300, 200);
    ctx.fillStyle = 'white';
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Test Photo', 150, 100);
    ctx.font = '16px Arial';
    ctx.fillText(`User: ${window.loginSystem.getCurrentUser()}`, 150, 130);
    ctx.fillText(`Time: ${new Date().toLocaleString('zh-TW')}`, 150, 150);

    // Convert to base64
    const testImageData = canvas.toDataURL('image/png');

    // Create test photo object
    const testPhoto = {
        id: Date.now().toString(),
        fileName: `test_${window.loginSystem.getCurrentUser()}_${Date.now()}.png`,
        originalName: 'test_photo.png',
        userID: window.loginSystem.getCurrentUser(),
        timestamp: new Date().toISOString(),
        size: 1024, // Approximate size
        type: 'image/png',
        dataURL: testImageData,
        locationCode: currentLocation || null,
        locationName: currentLocation && locationData[currentLocation] ? locationData[currentLocation].name : '測試位置',
        gameType: currentLocation && locationData[currentLocation] ? locationData[currentLocation].gameType : '測試遊戲',
        score: currentLocation && locationData[currentLocation] ? locationData[currentLocation].score : 0
    };

    // Save to localStorage
    const existingPhotos = localStorage.getItem('scavengerHuntPhotos');
    const photos = existingPhotos ? JSON.parse(existingPhotos) : [];
    photos.push(testPhoto);
    localStorage.setItem('scavengerHuntPhotos', JSON.stringify(photos));

    console.log('✅ Test photo created and saved');
    showResult('✅ 測試照片已創建並保存！', 'success');

    // Update admin panel if open
    if (adminPanel && adminPanel.style.display !== 'none') {
        loadAllPhotos();
    }
}

// Function to close photo modal
function closePhotoModal() {
    const modal = document.getElementById('photo-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function (event) {
    const modal = document.getElementById('photo-modal');
    if (event.target === modal) {
        closePhotoModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closePhotoModal();
    }
});

// Function to toggle upload section visibility
function toggleUploadSection() {
    const imageUploadSection = document.getElementById('image-upload-section');
    if (imageUploadSection) {
        const isVisible = imageUploadSection.style.display !== 'none';
        imageUploadSection.style.display = isVisible ? 'none' : 'block';

        const button = document.querySelector('.upload-header button');
        if (button) {
            button.textContent = isVisible ? '🔧 顯示上傳' : '🔧 隱藏上傳';
        }

        console.log(`📸 Upload section ${isVisible ? 'hidden' : 'shown'}`);
        showResult(`照片上傳區域已${isVisible ? '隱藏' : '顯示'}`, 'info');
    }
}

// Function to check Firebase status
function checkFirebaseStatus() {
    const statusDisplay = document.getElementById('firebase-status-display');
    if (!statusDisplay) return;

    try {
        const connection = window.FirebaseUtils ? window.FirebaseUtils.checkConnection() : {
            firestore: !!window.db,
            storage: !!window.storage,
            analytics: !!window.analytics
        };

        const statusHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.9em;">
                <div>
                    <strong>📊 Firestore:</strong> 
                    <span style="color: ${connection.firestore ? '#27ae60' : '#e74c3c'}">
                        ${connection.firestore ? '✅ 已連接' : '❌ 未連接'}
                    </span>
                </div>
                <div>
                    <strong>📁 Storage:</strong> 
                    <span style="color: ${connection.storage ? '#27ae60' : '#e74c3c'}">
                        ${connection.storage ? '✅ 可用' : '❌ 不可用'}
                    </span>
                </div>
                <div>
                    <strong>📈 Analytics:</strong> 
                    <span style="color: ${connection.analytics ? '#27ae60' : '#e74c3c'}">
                        ${connection.analytics ? '✅ 可用' : '❌ 不可用'}
                    </span>
                </div>
                <div>
                    <strong>🌐 網路:</strong> 
                    <span style="color: ${navigator.onLine ? '#27ae60' : '#e74c3c'}">
                        ${navigator.onLine ? '✅ 在線' : '❌ 離線'}
                    </span>
                </div>
            </div>
        `;

        statusDisplay.innerHTML = statusHTML;
        console.log('🔥 Firebase status checked:', connection);

    } catch (error) {
        statusDisplay.innerHTML = '<p style="color: #e74c3c;">❌ 檢查 Firebase 狀態時發生錯誤</p>';
        console.error('❌ Error checking Firebase status:', error);
    }
}

// Location utility functions
function getLocationInfo(locationCode) {
    return locationData[locationCode] || null;
}

function getLocationCategoryInfo(category) {
    return locationCategories[category] || null;
}

function validateLocationCode(locationCode) {
    return locationData.hasOwnProperty(locationCode);
}

function getLocationsByCategory(category) {
    return Object.entries(locationData)
        .filter(([code, info]) => info.category === category)
        .map(([code, info]) => ({ code, ...info }));
}

function getLocationsByGameType(gameType) {
    return Object.entries(locationData)
        .filter(([code, info]) => info.gameType === gameType)
        .map(([code, info]) => ({ code, ...info }));
}

function getTotalLocationsByCategory() {
    const categoryCounts = {};
    Object.values(locationData).forEach(location => {
        const category = location.category || 'unknown';
        categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    });
    return categoryCounts;
}

// Function to preview photo in modal
function previewPhoto(photoIndex) {
    const allPhotos = JSON.parse(localStorage.getItem('scavengerHuntPhotos') || '[]');
    const photo = allPhotos[photoIndex];

    if (!photo) {
        console.error('Photo not found');
        return;
    }

    const modal = document.getElementById('photo-modal');
    const modalImg = document.getElementById('modal-photo');
    const modalTitle = document.getElementById('modal-photo-title');
    const modalName = document.getElementById('modal-photo-name');
    const modalUser = document.getElementById('modal-photo-user');
    const modalTime = document.getElementById('modal-photo-time');
    const modalSize = document.getElementById('modal-photo-size');
    const modalLocation = document.getElementById('modal-photo-location');
    const modalGame = document.getElementById('modal-photo-game');
    const modalScore = document.getElementById('modal-photo-score');

    if (modal && modalImg) {
        // Set image
        modalImg.src = photo.dataURL;

        // Set photo details
        modalTitle.textContent = photo.fileName;
        modalName.textContent = photo.fileName;
        modalUser.textContent = `玩家 ${photo.userID}`;
        modalTime.textContent = new Date(photo.timestamp).toLocaleString('zh-TW');
        modalSize.textContent = `${Math.round(photo.size / 1024)}KB`;

        // Enhanced location information
        const categoryInfo = photo.locationCategory && locationCategories[photo.locationCategory]
            ? locationCategories[photo.locationCategory]
            : null;
        const locationDisplay = categoryInfo
            ? `${categoryInfo.icon} ${photo.locationName || '未知位置'}`
            : (photo.locationName || '未知位置');
        modalLocation.textContent = locationDisplay;

        modalGame.textContent = photo.gameType || '未知遊戲';
        modalScore.textContent = photo.score ? `${photo.score}分` : '無分數';

        // Show modal
        modal.style.display = 'block';

        // Track preview event
        if (typeof trackEvent === 'function') {
            trackEvent('photo_previewed', {
                photo_id: photo.id,
                user_id: photo.userID,
                location_code: photo.locationCode,
                location_name: photo.locationName,
                game_type: photo.gameType
            });
        }
    }
}

// ===== QUIZ SYSTEM =====

// Quiz data for different locations
const quizData = {
    'F3C9': {
        title: '軒尼斯道籃球場問卷調查',
        description: '請回答以下關於軒尼斯道籃球場的問題',
        questions: [
            {
                id: 1,
                question: '軒尼斯道籃球場裝修後多了幾多分線顯示在籃球場上？',
                options: [
                    { id: 'a', text: '3分線', correct: false },
                    { id: 'b', text: '4分線', correct: true },
                    { id: 'c', text: '5分線', correct: false },
                    { id: 'd', text: '1分線', correct: false }
                ]
            }
        ]
    },
    'J7D1': {
        title: '灣仔海濱火車車箱展問卷調查',
        description: '請回答以下關於灣仔海濱火車車箱的問題',
        questions: [
            {
                id: 1,
                question: '灣仔海濱火車車箱展覽位置，月台上顯示的站名是？',
                options: [
                    { id: 'a', text: '灣仔站', correct: false },
                    { id: 'b', text: '會展站', correct: false },
                    { id: 'c', text: '銅鑼灣站', correct: false },
                    { id: 'd', text: '海濱站', correct: true }
                ]
            }
        ]
    },
    'N8P5': {
        title: '大坑問卷調查',
        description: '請回答以下關於大坑的問題',
        questions: [
            {
                id: 1,
                question: '每年中秋，大坑會舉行什麼傳統活動?',
                options: [
                    { id: 'a', text: '舞火龍', correct: true },
                    { id: 'b', text: '舞水龍', correct: false },
                    { id: 'c', text: '搶包山', correct: false },
                    { id: 'd', text: '舞K-POP', correct: false },
                ]
            }
        ]
    },
    'Y1F4': {
        title: '奧運五色天橋問卷調查',
        description: '請回答以下關於奧運五色天橋的問題',
        questions: [
            {
                id: 1,
                question: '奧運五色天橋梯級有以下顏色，除了？',
                options: [
                    { id: 'a', text: '黃色', correct: false },
                    { id: 'b', text: '橙色', correct: true },
                    { id: 'c', text: '藍色', correct: false },
                    { id: 'd', text: '黑色', correct: false }
                ]
            }
        ]
    },
}

// Quiz system variables
let currentQuiz = null;
let quizAnswers = {};

// Quiz DOM elements
const quizSection = document.getElementById('quiz-section');
const quizContent = document.getElementById('quiz-content');
const submitQuizBtn = document.getElementById('submit-quiz-btn');
const closeQuizBtn = document.getElementById('close-quiz-btn');
const quizProgress = document.getElementById('quiz-progress');

// Initialize quiz system
function initializeQuizSystem() {
    if (submitQuizBtn) {
        submitQuizBtn.addEventListener('click', submitQuiz);
    }
    if (closeQuizBtn) {
        closeQuizBtn.addEventListener('click', closeQuiz);
    }
}

// Show quiz for specific location
function showQuizForLocation(locationCode) {
    console.log('🔍 Showing quiz for location:', locationCode);

    if (!quizData[locationCode]) {
        console.log('❌ No quiz data for location:', locationCode);
        return;
    }

    currentQuiz = locationCode;
    quizAnswers = {};

    // Show quiz section
    if (quizSection) {
        quizSection.style.display = 'block';
    }

    // Load quiz content
    loadQuizContent(locationCode);

    // Track quiz display event
    if (typeof trackEvent === 'function') {
        trackEvent('quiz_displayed', {
            location_code: locationCode,
            location_name: locationData[locationCode]?.name || 'Unknown'
        });
    }
}

// Hide quiz section
function hideQuiz() {
    if (quizSection) {
        quizSection.style.display = 'none';
    }
    currentQuiz = null;
    quizAnswers = {};
}

// Load quiz content
function loadQuizContent(locationCode) {
    const quiz = quizData[locationCode];
    if (!quiz) return;

    // Update quiz header
    const quizHeader = document.querySelector('.quiz-section h3');
    if (quizHeader) {
        quizHeader.textContent = `📝 ${quiz.title}`;
    }

    // Update quiz description
    const quizDesc = document.querySelector('.quiz-description');
    if (quizDesc) {
        quizDesc.textContent = quiz.description;
    }

    // Show loading state
    const quizArea = document.querySelector('.quiz-area');
    if (quizArea) {
        quizArea.classList.add('loading');
        quizArea.classList.remove('ready');
        const quizText = quizArea.querySelector('.quiz-text');
        if (quizText) {
            quizText.textContent = '載入問卷中...';
        }
    }

    // Simulate loading delay
    setTimeout(() => {
        // Generate quiz HTML
        const quizHTML = generateQuizHTML(quiz);

        if (quizContent) {
            quizContent.innerHTML = quizHTML;
            quizContent.style.display = 'block';
        }

        // Update quiz area to ready state
        if (quizArea) {
            quizArea.classList.remove('loading');
            quizArea.classList.add('ready');
            const quizText = quizArea.querySelector('.quiz-text');
            if (quizText) {
                quizText.textContent = '問卷已準備就緒';
            }
        }

        // Add event listeners to quiz options
        addQuizOptionListeners();
    }, 1000);
}

// Generate quiz HTML
function generateQuizHTML(quiz) {
    let html = '';

    quiz.questions.forEach((question, index) => {
        html += `
            <div class="quiz-question" data-question-id="${question.id}">
                <h4>問題 ${index + 1}: ${question.question}</h4>
                <div class="quiz-options">
        `;

        question.options.forEach(option => {
            html += `
                <label class="quiz-option" data-option-id="${option.id}">
                    <input type="radio" name="question_${question.id}" value="${option.id}">
                    <span>${option.text}</span>
                </label>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    return html;
}

// Add event listeners to quiz options
function addQuizOptionListeners() {
    const quizOptions = document.querySelectorAll('.quiz-option');

    quizOptions.forEach(option => {
        option.addEventListener('click', function () {
            const radio = this.querySelector('input[type="radio"]');
            const questionId = this.closest('.quiz-question').dataset.questionId;
            const optionId = this.dataset.optionId;

            // Uncheck other options in the same question
            const otherOptions = this.closest('.quiz-options').querySelectorAll('.quiz-option');
            otherOptions.forEach(opt => {
                opt.classList.remove('selected');
                opt.querySelector('input[type="radio"]').checked = false;
            });

            // Check this option
            radio.checked = true;
            this.classList.add('selected');

            // Store answer
            quizAnswers[questionId] = optionId;

            console.log('📝 Quiz answer selected:', questionId, optionId);
        });
    });
}

// Submit quiz
function submitQuiz() {
    if (!currentQuiz) {
        console.log('❌ No active quiz');
        return;
    }

    const quiz = quizData[currentQuiz];
    const totalQuestions = quiz.questions.length;
    const answeredQuestions = Object.keys(quizAnswers).length;

    if (answeredQuestions < totalQuestions) {
        alert(`請回答所有問題！您已回答 ${answeredQuestions}/${totalQuestions} 題。`);
        return;
    }

    // Calculate score
    let correctAnswers = 0;
    quiz.questions.forEach(question => {
        const userAnswer = quizAnswers[question.id];
        const correctOption = question.options.find(opt => opt.correct);
        if (userAnswer === correctOption.id) {
            correctAnswers++;
        }
    });

    const score = Math.round((correctAnswers / totalQuestions) * 100);
    const isPassed = score >= 60;

    // Show results
    showQuizResults(score, correctAnswers, totalQuestions, isPassed);

    // Track quiz submission
    if (typeof trackEvent === 'function') {
        trackEvent('quiz_submitted', {
            location_code: currentQuiz,
            location_name: locationData[currentQuiz]?.name || 'Unknown',
            score: score,
            correct_answers: correctAnswers,
            total_questions: totalQuestions,
            passed: isPassed
        });
    }
}

// Show quiz results
function showQuizResults(score, correctAnswers, totalQuestions, isPassed) {
    const resultHTML = `
        <div class="quiz-results" style="text-align: center; padding: 20px; background: ${isPassed ? '#d4edda' : '#f8d7da'}; border-radius: 15px; margin: 20px 0;">
            <h3 style="color: ${isPassed ? '#155724' : '#721c24'}; margin-bottom: 15px;">
                ${isPassed ? '🎉 恭喜通過！' : '😔 未達標準'}
            </h3>
            <p style="font-size: 1.2em; margin-bottom: 10px;">
                得分: <strong>${score}分</strong>
            </p>
            <p style="margin-bottom: 10px;">
                正確答案: ${correctAnswers}/${totalQuestions}
            </p>
            <p style="font-size: 0.9em; color: #666;">
                ${isPassed ? '您已成功完成問卷調查！' : '請重新嘗試'}
            </p>
            <div style="margin-top: 20px;">
                ${!isPassed ? `
                    <button id="retry-quiz-btn" class="btn btn-warning" style="margin-right: 10px;">
                        🔄 重新答題
                    </button>
                ` : ''}
                <button id="close-quiz-btn" class="btn ${isPassed ? 'btn-success' : 'btn-secondary'}">
                    ${isPassed ? '✅ 完成問卷' : '❌ 關閉問卷'}
                </button>
            </div>
        </div>
    `;

    if (quizContent) {
        quizContent.innerHTML = resultHTML;
    }

    // Hide submit button after submission
    if (submitQuizBtn) {
        submitQuizBtn.style.display = 'none';
    }

    // Add event listeners for retry and close buttons
    setTimeout(() => {
        const retryBtn = document.getElementById('retry-quiz-btn');
        const closeBtn = document.getElementById('close-quiz-btn');

        if (retryBtn) {
            retryBtn.addEventListener('click', retryQuiz);
        }
        if (closeBtn) {
            closeBtn.addEventListener('click', closeQuiz);
        }
    }, 100);
}

// Cancel quiz
function closeQuiz() {
    if (confirm('確定要關閉問卷嗎？您將需要重新選擇位置來再次嘗試。')) {
        hideQuiz();
    }
}

// Retry quiz (for failed attempts)
function retryQuiz() {
    console.log('🔄 Retrying quiz for location:', currentQuiz);

    // Reset quiz answers
    quizAnswers = {};

    // Reload quiz content
    loadQuizContent(currentQuiz);

    // Show submit button again
    if (submitQuizBtn) {
        submitQuizBtn.style.display = 'block';
    }

    // Track retry event
    if (typeof trackEvent === 'function') {
        trackEvent('quiz_retry', {
            location_code: currentQuiz,
            location_name: locationData[currentQuiz]?.name || 'Unknown'
        });
    }
}

// Close quiz (for failed attempts)
function closeQuiz() {
    console.log('❌ Closing quiz for location:', currentQuiz);

    if (confirm('確定要關閉問卷嗎？您將需要重新選擇位置來再次嘗試。')) {
        hideQuiz();

        // Track close event
        if (typeof trackEvent === 'function') {
            trackEvent('quiz_closed', {
                location_code: currentQuiz,
                location_name: locationData[currentQuiz]?.name || 'Unknown'
            });
        }
    }
}

// Toggle quiz section (for admin use)
function toggleQuizSection() {
    if (quizSection) {
        const isVisible = quizSection.style.display !== 'none';
        quizSection.style.display = isVisible ? 'none' : 'block';
    }
}

// Initialize quiz system when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeQuizSystem();
});

// Test function to verify Firebase score retrieval
async function testFirebaseScoreRetrieval() {
    console.log('🧪 Testing Firebase score retrieval...');

    const currentUser = window.loginSystem ? window.loginSystem.getCurrentUser() : null;

    if (!currentUser) {
        console.log('❌ No current user, cannot test Firebase score retrieval');
        return;
    }

    if (typeof getUserScoreFromFirebase !== 'function') {
        console.log('❌ getUserScoreFromFirebase function not available');
        return;
    }

    try {
        const firebaseScore = await getUserScoreFromFirebase(currentUser);
        console.log(`✅ Firebase score test successful for user ${currentUser}: ${firebaseScore}分`);

        // Compare with local score
        const localScore = getTotalScore();
        console.log(`📊 Local score: ${localScore}分, Firebase score: ${firebaseScore}分`);

        if (firebaseScore !== localScore) {
            console.log('⚠️ Score mismatch detected - Firebase score will be used for display');
        }

    } catch (error) {
        console.error('❌ Firebase score retrieval test failed:', error);
    }
}
