// Login System for STEM by Me Scavenger Hunt
// Extracted from main script.js

// User sign-in elements
const userIdInput = document.getElementById('user-id-input');
const signinBtn = document.getElementById('signin-btn');
const signoutBtn = document.getElementById('signout-btn');
const currentUserDisplay = document.getElementById('current-user-display');
const displayUserId = document.getElementById('display-user-id');
const userSigninForm = document.querySelector('.user-signin-form');

// User management
let currentUser = null;
let allUsers = {};
let isSignedIn = false;

// Progress tracking (shared with main script)
let completedLocations = [];
let totalScore = 0;

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

// Initialize users system
function initializeUsers() {
    // Check if users already exist in localStorage
    const existingUsers = localStorage.getItem('scavengerHuntUsers');

    if (!existingUsers) {
        // Create users for Junior group (101-150) and Senior group (201-250)
        allUsers = {};

        // Junior group: 101-150
        for (let i = 101; i <= 150; i++) {
            const userId = i.toString().padStart(3, '0'); // 101, 102, ..., 150
            allUsers[userId] = {
                id: userId,
                name: `玩家${userId}`,
                group: 'Junior',
                completedLocations: [],
                totalScore: 0,
                createdAt: new Date().toISOString(),
                lastPlayed: null
            };
        }

        // Senior group: 201-250
        for (let i = 201; i <= 250; i++) {
            const userId = i.toString().padStart(3, '0'); // 201, 202, ..., 250
            allUsers[userId] = {
                id: userId,
                name: `玩家${userId}`,
                group: 'Senior',
                completedLocations: [],
                totalScore: 0,
                createdAt: new Date().toISOString(),
                lastPlayed: null
            };
        }

        // Save to localStorage
        localStorage.setItem('scavengerHuntUsers', JSON.stringify(allUsers));
        console.log('Created 100 users successfully! (50 Junior + 50 Senior)');
    } else {
        // Load existing users
        allUsers = JSON.parse(existingUsers);

        // Update existing users to include group information and fix names if not present
        let updated = false;
        Object.keys(allUsers).forEach(userId => {
            if (!allUsers[userId].group) {
                const userIdNum = parseInt(userId);
                if (userIdNum >= 101 && userIdNum <= 150) {
                    allUsers[userId].group = 'Junior';
                } else if (userIdNum >= 201 && userIdNum <= 250) {
                    allUsers[userId].group = 'Senior';
                } else {
                    // For any existing users outside the new range, assign to Junior
                    allUsers[userId].group = 'Junior';
                }
                updated = true;
            }

            // Fix any user names that contain "測試" to use "玩家" format
            if (allUsers[userId].name && allUsers[userId].name.includes('測試')) {
                allUsers[userId].name = `玩家${userId}`;
                updated = true;
                console.log(`🔧 Fixed user ${userId} name from test format to unified format`);
            }

            // Ensure all users have the correct "玩家" format name
            if (!allUsers[userId].name || !allUsers[userId].name.startsWith('玩家')) {
                allUsers[userId].name = `玩家${userId}`;
                updated = true;
                console.log(`🔧 Updated user ${userId} name to unified format`);
            }
        });

        if (updated) {
            localStorage.setItem('scavengerHuntUsers', JSON.stringify(allUsers));
            console.log('Updated existing users with group information');
        }
    }

    // Start with no user signed in
    currentUser = null;
    isSignedIn = false;
}

// Setup event listeners for login functionality
function setupUserSigninListeners() {
    // Only set up listeners if we're on the login page (index.html)
    if (signinBtn && signoutBtn && userIdInput) {
        // Sign in button
        signinBtn.addEventListener('click', handleSignin);

        // Sign out button
        signoutBtn.addEventListener('click', handleSignout);

        // Enter key on input
        userIdInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                handleSignin();
            }
        });

        // Input validation
        userIdInput.addEventListener('input', function () {
            this.value = this.value.replace(/[^0-9]/g, ''); // Only allow numbers
            if (this.value.length > 3) {
                this.value = this.value.slice(0, 3); // Max 3 digits
            }
        });

        console.log('✅ Login event listeners set up successfully');
    } else {
        console.log('ℹ️ Login elements not found (probably on game.html), skipping event listeners');
    }
}

// Handle user sign in
async function handleSignin() {
    const signinBtn = document.getElementById('signin-btn');

    // Show loading state
    signinBtn.classList.add('loading');
    signinBtn.disabled = true;

    try {
        const userId = userIdInput.value.trim();

        if (!userId) {
            showResult('請輸入玩家編號！', 'error');
            return;
        }

        // Pad with zeros if needed
        const paddedUserId = userId.padStart(3, '0');

        // Validate user ID range for Junior (101-150) and Senior (201-250) groups
        const userIdNum = parseInt(paddedUserId);
        if ((userIdNum < 101 || userIdNum > 150) && (userIdNum < 201 || userIdNum > 250)) {
            showResult('玩家編號必須在 101-150 (Junior組) 或 201-250 (Senior組) 之間！', 'error');
            return;
        }

        // Check if user exists
        if (!allUsers[paddedUserId]) {
            showResult('玩家不存在！', 'error');
            return;
        }

        // Simulate loading delay for better UX
        await new Promise(resolve => setTimeout(resolve, 800));

        // Sign in the user
        currentUser = paddedUserId;
        isSignedIn = true;

        // Save login state to localStorage
        localStorage.setItem('currentUser', currentUser);
        localStorage.setItem('isSignedIn', 'true');

        loadCurrentUserData();

        // Update UI
        updateUserDisplay();

        // Clear input
        userIdInput.value = '';

        // Get user group
        const userGroup = allUsers[paddedUserId].group || 'Unknown';

        // Show success message with group information
        showResult(`歡迎回來，玩家${paddedUserId} (${userGroup}組)！現在可以上傳照片了。`, 'success');

        // Track sign in
        trackEvent('user_signed_in', {
            user_id: paddedUserId,
            user_group: userGroup,
            user_score: totalScore,
            user_completed_locations: completedLocations.length
        });

        console.log(`User ${paddedUserId} (${userGroup}) signed in successfully`);
        console.log('Photo upload section should now be visible');

    } catch (error) {
        console.error('Sign in error:', error);
        showResult('登入時發生錯誤，請重試！', 'error');
    } finally {
        // Hide loading state
        signinBtn.classList.remove('loading');
        signinBtn.disabled = false;
    }
}

// Handle user sign out
async function handleSignout() {
    const signoutBtn = document.getElementById('signout-btn');

    // Show loading state
    signoutBtn.classList.add('loading');
    signoutBtn.disabled = true;

    try {
        if (currentUser) {
            // Save current user data before signing out
            saveCurrentUserData();

            // Track sign out
            trackEvent('user_signed_out', {
                user_id: currentUser,
                user_score: totalScore,
                user_completed_locations: completedLocations.length
            });
        }

        // Simulate loading delay for better UX
        await new Promise(resolve => setTimeout(resolve, 600));

        // Reset user state
        currentUser = null;
        isSignedIn = false;
        completedLocations = [];
        totalScore = 0;

        // Clear login state from localStorage
        clearLoginState();

        // Update UI
        updateUserDisplay();

        // Clear any current game state
        if (typeof passwordInput !== 'undefined') {
            passwordInput.value = '';
        }
        if (typeof cancelUpload !== 'undefined') {
            cancelUpload();
        }
        if (typeof clearResultMessage !== 'undefined') {
            clearResultMessage();
        }
        if (typeof currentLocationDisplay !== 'undefined') {
            currentLocationDisplay.textContent = '請輸入密碼以開始遊戲';
        }

        // Hide quiz and image upload sections on signout
        if (typeof hideQuiz === 'function') {
            hideQuiz();
        }
        const imageUploadSection = document.getElementById('image-upload-section');
        if (imageUploadSection) {
            imageUploadSection.style.display = 'none';
        }

        showResult('已登出！請重新登入以繼續遊戲。', 'info');

        console.log('User signed out');

    } catch (error) {
        console.error('Sign out error:', error);
        showResult('登出時發生錯誤，請重試！', 'error');
    } finally {
        // Hide loading state
        signoutBtn.classList.remove('loading');
        signoutBtn.disabled = false;
    }
}

// Load current user data from localStorage
function loadCurrentUserData() {
    if (currentUser && allUsers[currentUser]) {
        completedLocations = allUsers[currentUser].completedLocations || [];
        totalScore = allUsers[currentUser].totalScore || 0;

        console.log(`Loaded data for user ${currentUser}: ${completedLocations.length} locations, ${totalScore} points`);
    } else {
        completedLocations = [];
        totalScore = 0;
    }
}

// Save current user data to localStorage
function saveCurrentUserData() {
    if (currentUser && allUsers[currentUser]) {
        allUsers[currentUser].completedLocations = completedLocations;
        allUsers[currentUser].totalScore = totalScore;
        allUsers[currentUser].lastPlayed = new Date().toISOString();

        // Add completion timestamp for each location
        if (!allUsers[currentUser].locationTimestamps) {
            allUsers[currentUser].locationTimestamps = {};
        }

        // Save to localStorage
        try {
            localStorage.setItem('scavengerHuntUsers', JSON.stringify(allUsers));
            console.log(`Progress saved for user ${currentUser}: ${completedLocations.length} locations, ${totalScore} points`);
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            showResult('⚠️ 保存進度時出現錯誤，請重試！', 'error');
        }
    }
}

// Update user display UI
function updateUserDisplay() {
    // Only update UI if we're on the login page (index.html)
    if (userSigninForm && currentUserDisplay && displayUserId) {
        if (isSignedIn && currentUser) {
            // Show signed in state
            userSigninForm.style.display = 'none';
            currentUserDisplay.style.display = 'flex';
            displayUserId.textContent = currentUser;

            // Note: Photo upload section will be shown after code verification, not automatically on sign in
            console.log('✅ User signed in, photo upload section will be shown after code verification');
        } else {
            // Show sign in form
            userSigninForm.style.display = 'flex';
            currentUserDisplay.style.display = 'none';

            // Hide photo upload section when not signed in
            const imageUploadSection = document.getElementById('image-upload-section');
            if (imageUploadSection) {
                imageUploadSection.style.display = 'none';
                console.log('❌ Photo upload section is hidden (not signed in)');
            }
        }
    } else {
        console.log('ℹ️ Login UI elements not found (probably on game.html), skipping UI update');
    }
}

// Helper function to show result messages (needs to be implemented in main script)
function showResult(message, type) {
    // This function should be implemented in the main script
    // For now, we'll use console.log as a fallback
    console.log(`[${type.toUpperCase()}] ${message}`);

    // Try to use the main script's showResult function if available
    // But avoid infinite recursion by checking if it's not the same function
    if (typeof window.showResult === 'function' && window.showResult !== showResult) {
        window.showResult(message, type);
    }
}

// Export functions for use in main script
window.loginSystem = {
    initializeUsers,
    setupUserSigninListeners,
    handleSignin,
    handleSignout,
    loadCurrentUserData,
    saveCurrentUserData,
    updateUserDisplay,
    restoreLoginState,
    clearLoginState,
    getCurrentUser: () => currentUser,
    isSignedIn: () => isSignedIn,
    getAllUsers: () => allUsers,
    getCompletedLocations: () => completedLocations,
    getTotalScore: () => totalScore,
    setCompletedLocations: (locations) => { completedLocations = locations; },
    setTotalScore: (score) => { totalScore = score; }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, initializing login system...');

    initializeUsers();
    setupUserSigninListeners();

    // Try to restore login state from localStorage (after users are initialized)
    const restored = restoreLoginState();

    updateUserDisplay();

    console.log('✅ Login system initialized');

    // Dispatch a custom event to notify that login system is ready
    window.dispatchEvent(new CustomEvent('loginSystemReady'));
});

// Function to restore login state from localStorage
function restoreLoginState() {
    try {
        console.log('🔄 Attempting to restore login state...');

        // Check if there's a stored current user
        const storedCurrentUser = localStorage.getItem('currentUser');
        const storedIsSignedIn = localStorage.getItem('isSignedIn');

        console.log('Stored user:', storedCurrentUser, 'Stored isSignedIn:', storedIsSignedIn);

        if (storedCurrentUser && storedIsSignedIn === 'true') {
            // Verify the user still exists in allUsers
            if (allUsers[storedCurrentUser]) {
                currentUser = storedCurrentUser;
                isSignedIn = true;
                loadCurrentUserData();
                updateUserDisplay();
                console.log(`✅ Restored login state for user: ${currentUser}`);
                return true;
            } else {
                console.log('❌ Stored user no longer exists, clearing login state');
                clearLoginState();
                return false;
            }
        } else {
            console.log('No stored login state found');
            return false;
        }
    } catch (error) {
        console.error('Error restoring login state:', error);
        clearLoginState();
        return false;
    }
}

// Function to clear login state
function clearLoginState() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isSignedIn');
    currentUser = null;
    isSignedIn = false;
    completedLocations = [];
    totalScore = 0;
}
