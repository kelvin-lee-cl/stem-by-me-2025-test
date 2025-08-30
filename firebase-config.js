// Firebase Configuration for Games
// 統一的 Firebase 配置檔案，供遊戲1-6使用

const firebaseConfig = {
    apiKey: "AIzaSyD5x_L2yAP9ndQJRBeC31Z6nNrh4okt9uo",
    authDomain: "stem-by-me-app.firebaseapp.com",
    projectId: "stem-by-me-app",
    storageBucket: "stem-by-me-app.firebasestorage.app",
    messagingSenderId: "216736327145",
    appId: "1:216736327145:web:e01721f8e0c6a960a19778",
    measurementId: "G-WWSS5PJVP1"
};

// Initialize Firebase
let db, analytics;

function initializeFirebase() {
    try {
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
        analytics = firebase.analytics();

        // Make Firebase available globally
        window.db = db;
        window.analytics = analytics;
        window.firebase = firebase;

        console.log('✅ Firebase initialized successfully for games');
        return true;
    } catch (error) {
        console.error('❌ Firebase initialization error:', error);
        return false;
    }
}

// Unified score upload function for games
async function uploadScoreToFirebase(gameInfo, score, status, gameTime = null) {
    try {
        if (!window.db) {
            console.log('⚠️ Firebase not available, skipping score upload');
            return false;
        }

        console.log('🚀 Starting Firebase score upload for game:', gameInfo.gameId);

        // Create score data object with unified format
        const scoreData = {
            playerName: gameInfo.playerName || '玩家',
            userID: gameInfo.userID || 'unknown',
            gameId: gameInfo.gameId,
            score: score,
            totalScore: gameInfo.totalScore || score,
            status: status, // 'win' or 'lose'
            gameTime: gameTime || Math.floor(Math.random() * 300) + 60, // Random game time between 60-360 seconds
            timestamp: window.firebase.firestore.FieldValue.serverTimestamp(),
            locationCode: gameInfo.locationCode || gameInfo.gameId,
            locationName: gameInfo.locationName || gameInfo.gameName,
            gameType: gameInfo.gameType || '開發者遊戲挑戰',
            locationDescription: gameInfo.locationDescription || gameInfo.gameDescription,
            locationAddress: gameInfo.locationAddress || '灣仔海濱',
            locationCategory: gameInfo.locationCategory || 'entertainment',
            coordinates: gameInfo.coordinates || { lat: 22.2783, lng: 114.1747 }
        };

        // Save score data to Firestore with error handling for index issues
        try {
            await window.db.collection('gameScores').add(scoreData);
            console.log('✅ Score saved to Firestore with unified format');
        } catch (firestoreError) {
            // Handle index-related errors gracefully
            if (firestoreError.message && firestoreError.message.includes('index')) {
                console.warn('⚠️ Firebase index not ready, score upload skipped:', firestoreError.message);
                console.log('💡 To fix this, create the required index in Firebase Console');
                return false;
            } else {
                throw firestoreError; // Re-throw non-index errors
            }
        }

        // Track Firebase score upload
        if (window.analytics) {
            window.analytics.logEvent('score_uploaded_to_firebase', {
                user_id: scoreData.userID,
                game_id: scoreData.gameId,
                score: scoreData.score,
                total_score: scoreData.totalScore,
                status: scoreData.status
            });
        }

        return true;

    } catch (error) {
        console.error('❌ Error uploading score to Firebase:', error);
        return false;
    }
}

// Get player name from checkpiont.html login system
function getPlayerName() {
    if (window.loginSystem && window.loginSystem.getCurrentUser()) {
        return `玩家${window.loginSystem.getCurrentUser()}`;
    }
    return '玩家';
}

// Get user score from Firebase
async function getUserScoreFromFirebase(userID) {
    try {
        if (!window.db) {
            console.log('⚠️ Firebase not available, cannot get user score');
            return 0;
        }

        if (!userID) {
            console.log('⚠️ No userID provided, cannot get user score');
            return 0;
        }

        console.log(`🔄 Getting Firebase score for user: ${userID}`);

        // Get user's scores from Firebase
        const scoresSnapshot = await window.db.collection('gameScores')
            .where('userID', '==', userID)
            .get();

        // Calculate total score
        let totalScore = 0;
        scoresSnapshot.forEach(doc => {
            const data = doc.data();
            totalScore += data.score || 0;
        });

        console.log(`✅ Firebase score for user ${userID}: ${totalScore}`);
        return totalScore;

    } catch (error) {
        console.error('❌ Error getting user score from Firebase:', error);
        return 0;
    }
}

// Make getUserScoreFromFirebase available globally
window.getUserScoreFromFirebase = getUserScoreFromFirebase;

// Get user ID from checkpiont.html login system
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
