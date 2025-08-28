# Login System for STEM by Me Scavenger Hunt

This file contains the extracted login functionality from the main `script.js` file. The login system handles user authentication, user management, and session management for the scavenger hunt game.

## Features

- **User Authentication**: Sign in/out functionality for players
- **User Groups**: Junior (101-150) and Senior (201-250) groups
- **Progress Tracking**: Saves and loads user progress automatically
- **localStorage Integration**: Persistent data storage
- **Analytics Tracking**: Firebase Analytics integration
- **Input Validation**: Validates user IDs and input formats

## Files

- `login.js` - Contains all login-related functionality
- `script.js` - Main game script (needs to be updated to use the login system)

## How to Use

### 1. Include the Login Script

Add the login.js file to your HTML before the main script.js:

```html
<script src="login.js"></script>
<script src="script.js"></script>
```

### 2. Access Login System Functions

The login system exports its functions through `window.loginSystem`:

```javascript
// Get current user
const currentUser = window.loginSystem.getCurrentUser();

// Check if user is signed in
const isSignedIn = window.loginSystem.isSignedIn();

// Get user data
const allUsers = window.loginSystem.getAllUsers();
const completedLocations = window.loginSystem.getCompletedLocations();
const totalScore = window.loginSystem.getTotalScore();

// Update user data
window.loginSystem.setCompletedLocations(newLocations);
window.loginSystem.setTotalScore(newScore);
```

### 3. Required HTML Elements

The login system expects these HTML elements to exist:

```html
<!-- User ID input -->
<input type="text" id="user-id-input" placeholder="輸入玩家編號">

<!-- Sign in button -->
<button id="signin-btn">登入</button>

<!-- Sign out button -->
<button id="signout-btn">登出</button>

<!-- Current user display -->
<div id="current-user-display" style="display: none;">
    當前玩家: <span id="display-user-id"></span>
</div>

<!-- User signin form -->
<div class="user-signin-form">
    <!-- Sign in form content -->
</div>
```

## Functions

### Core Functions

- `initializeUsers()` - Initialize the user system and create default users
- `setupUserSigninListeners()` - Set up event listeners for login functionality
- `handleSignin()` - Handle user sign in process
- `handleSignout()` - Handle user sign out process
- `loadCurrentUserData()` - Load user data from localStorage
- `saveCurrentUserData()` - Save user data to localStorage
- `updateUserDisplay()` - Update the UI to reflect login state

### User Management

- `getCurrentUser()` - Get the currently signed in user ID
- `isSignedIn()` - Check if a user is currently signed in
- `getAllUsers()` - Get all user data
- `getCompletedLocations()` - Get current user's completed locations
- `getTotalScore()` - Get current user's total score

## User Groups

The system supports two user groups:

- **Junior Group**: User IDs 101-150
- **Senior Group**: User IDs 201-250

## Data Storage

User data is stored in localStorage under the key `scavengerHuntUsers` with the following structure:

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
  }
  // ... more users
}
```

## Integration with Main Script

To integrate this with your main script.js, you'll need to:

1. Remove the login-related functions from script.js
2. Update script.js to use `window.loginSystem` functions
3. Ensure the `showResult` function is available globally

### Example Integration

```javascript
// In script.js, replace direct variable access with:
const currentUser = window.loginSystem.getCurrentUser();
const isSignedIn = window.loginSystem.isSignedIn();

// When updating progress:
window.loginSystem.setCompletedLocations(completedLocations);
window.loginSystem.setTotalScore(totalScore);
window.loginSystem.saveCurrentUserData();
```

## Dependencies

- Firebase Analytics (optional) - for tracking user events
- localStorage API - for data persistence
- DOM elements with specific IDs (see Required HTML Elements)

## Error Handling

The system includes error handling for:
- Invalid user IDs
- Missing localStorage support
- Data save/load failures
- Missing DOM elements

## Analytics Events

The system tracks these events (if Firebase Analytics is available):
- `user_signed_in` - When a user signs in
- `user_signed_out` - When a user signs out
- `page_view` - When the page loads

## Browser Compatibility

- Modern browsers with localStorage support
- ES6+ features (arrow functions, const/let, template literals)
- DOM manipulation APIs
