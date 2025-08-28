// Firebase Configuration
// 請將此配置替換為您的實際 Firebase 項目配置

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

        console.log('✅ Firebase initialized successfully');
        return true;
    } catch (error) {
        console.error('❌ Firebase initialization error:', error);
        return false;
    }
}

// Firebase utility functions
const FirebaseUtils = {
    // Upload photo to Firestore (Base64 format)
    async uploadPhoto(photo, file) {
        try {
            if (!db) {
                console.log('⚠️ Firebase not available, skipping upload');
                return false;
            }

            // Save photo data to Firestore (including Base64)
            const photoData = {
                ...photo,
                uploadedAt: firebase.firestore.FieldValue.serverTimestamp(),
                firebaseId: photo.id
            };

            // Keep the Base64 data in Firestore - use userID as document ID
            await db.collection('photos').doc(photo.userID).set(photoData);
            console.log('✅ Photo saved to Firestore (Base64 format)');

            return true;

        } catch (error) {
            console.error('❌ Error uploading to Firebase:', error);
            return false;
        }
    },

    // Load photos from Firestore
    async loadPhotos() {
        try {
            if (!db) {
                console.log('⚠️ Firebase not available');
                return [];
            }

            const snapshot = await db.collection('photos').get();
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
    },

    // Delete photo from Firebase
    async deletePhoto(userId) {
        try {
            if (!db) {
                console.log('⚠️ Firebase not available');
                return false;
            }

            // Delete from Firestore using userID
            await db.collection('photos').doc(userId).delete();

            console.log('✅ Photo deleted from Firebase');
            return true;

        } catch (error) {
            console.error('❌ Error deleting photo from Firebase:', error);
            return false;
        }
    },

    // Check Firebase connection
    checkConnection() {
        return {
            firestore: !!db,
            analytics: !!analytics
        };
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { firebaseConfig, initializeFirebase, FirebaseUtils };
} else {
    window.firebaseConfig = firebaseConfig;
    window.initializeFirebase = initializeFirebase;
    window.FirebaseUtils = FirebaseUtils;
}
