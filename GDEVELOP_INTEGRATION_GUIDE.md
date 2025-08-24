# 🎮 GDevelop Games Integration Guide

## 📋 Overview

This guide explains how to integrate GDevelop games into your HTML website. GDevelop is a no-code game development platform that exports HTML5 games.

## 🚀 Quick Start

### Step 1: Export Your GDevelop Game
1. Open GDevelop
2. Open your game project
3. Go to **File → Export → Export for Web (HTML5)**
4. Choose export settings:
   - **Export path**: `games/game1/` (or game2, game3, etc.)
   - **Game name**: Your game name
   - **Orientation**: Landscape or Portrait
   - **Scale mode**: Linear or Nearest
5. Click **Export**

### Step 2: File Structure
After export, you should have:
```
games/game1/
├── index.html          # Main game file
├── game.js             # Game logic
├── assets/             # Images, sounds, etc.
├── libs/               # GDevelop libraries
└── README.txt          # Export info
```

### Step 3: Test Your Game
1. Open `games/game1/index.html` in a browser
2. Verify the game works correctly
3. Check for any missing assets or errors

## 🔧 Integration Methods

### Method 1: Iframe Embed (Recommended)
```html
<iframe 
    class="gdevelop-game-frame"
    src="games/game1/index.html"
    title="GDevelop Game 1"
    allowfullscreen>
</iframe>
```

**Pros:**
- ✅ Simple to implement
- ✅ Isolated game environment
- ✅ Easy to maintain
- ✅ Works with all GDevelop exports

**Cons:**
- ❌ Limited communication with parent page
- ❌ May have performance overhead

### Method 2: Direct Integration
```html
<!-- Include GDevelop libraries -->
<script src="games/game1/libs/gd.js"></script>
<script src="games/game1/libs/pixi.js"></script>

<!-- Game container -->
<div id="game-container"></div>

<!-- Initialize game -->
<script src="games/game1/game.js"></script>
```

**Pros:**
- ✅ Full control over game
- ✅ Better performance
- ✅ Can communicate with parent page

**Cons:**
- ❌ More complex setup
- ❌ May require code modifications

### Method 3: External Hosting
```html
<iframe 
    src="https://your-game-url.com/game.html"
    allowfullscreen>
</iframe>
```

**Platforms:**
- itch.io
- GitHub Pages
- Netlify
- Vercel
- GDevelop Cloud

## 🎯 Advanced Features

### 1. Fullscreen Mode
```javascript
function fullscreenGame() {
    const gameFrame = document.querySelector('.gdevelop-game-frame');
    if (gameFrame.requestFullscreen) {
        gameFrame.requestFullscreen();
    }
}
```

### 2. Game Communication
```javascript
// Send message to game
gameFrame.contentWindow.postMessage({
    type: 'pause',
    data: {}
}, '*');

// Receive message from game
window.addEventListener('message', (event) => {
    if (event.data.type === 'score') {
        updateScore(event.data.score);
    }
});
```

### 3. Loading States
```html
<div class="game-container">
    <div class="loading-spinner" id="loading">
        <div class="spinner"></div>
        <p>載入遊戲中...</p>
    </div>
    <iframe 
        id="game-frame"
        src="games/game1/index.html"
        onload="hideLoading()">
    </iframe>
</div>
```

### 4. Responsive Design
```css
.gdevelop-game-frame {
    width: 100%;
    height: 600px;
    border: none;
    border-radius: 10px;
}

@media (max-width: 768px) {
    .gdevelop-game-frame {
        height: 400px;
    }
}

@media (max-width: 480px) {
    .gdevelop-game-frame {
        height: 300px;
    }
}
```

## 🎮 Game Controls

### Keyboard Controls
```javascript
// Common GDevelop keyboard mappings
const controls = {
    'ArrowUp': 'up',
    'ArrowDown': 'down', 
    'ArrowLeft': 'left',
    'ArrowRight': 'right',
    ' ': 'space',
    'Enter': 'enter',
    'Escape': 'escape'
};
```

### Touch Controls
```javascript
// Mobile touch support
if ('ontouchstart' in window) {
    // Add touch controls
    addTouchControls();
}
```

## 📱 Mobile Optimization

### 1. Viewport Settings
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
```

### 2. Touch-Friendly Controls
```css
.game-controls {
    touch-action: manipulation;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
}
```

### 3. Performance Optimization
```javascript
// Reduce frame rate on mobile
if (window.innerWidth < 768) {
    // Lower quality settings
    gameSettings.quality = 'low';
    gameSettings.frameRate = 30;
}
```

## 🔧 Troubleshooting

### Common Issues

#### 1. Game Not Loading
- Check file paths are correct
- Verify all assets are present
- Check browser console for errors
- Ensure web server is running

#### 2. Performance Issues
- Optimize game assets
- Reduce game resolution
- Use CDN for libraries
- Enable hardware acceleration

#### 3. Mobile Issues
- Test on actual devices
- Check touch controls
- Verify viewport settings
- Test different screen sizes

#### 4. Cross-Origin Issues
```html
<!-- Add to iframe -->
<iframe 
    src="games/game1/index.html"
    allow="fullscreen"
    allowfullscreen>
</iframe>
```

### Debug Tools
```javascript
// Add to game page for debugging
window.addEventListener('message', (event) => {
    console.log('Game message:', event.data);
});

// Check if game loaded
document.querySelector('iframe').addEventListener('load', () => {
    console.log('Game loaded successfully');
});
```

## 📊 Analytics Integration

### Track Game Performance
```javascript
// Google Analytics
gtag('event', 'game_start', {
    'game_name': 'Game 1',
    'user_id': userId
});

// Custom tracking
function trackGameEvent(event, data) {
    fetch('/api/game-events', {
        method: 'POST',
        body: JSON.stringify({
            event: event,
            game: 'game1',
            data: data,
            timestamp: Date.now()
        })
    });
}
```

## 🎨 Customization

### Game Styling
```css
.gdevelop-game-container {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
}

.gdevelop-game-frame {
    border: 3px solid #fff;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}
```

### Loading Animation
```css
.loading-spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #667eea;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```

## 🔗 Useful Resources

- [GDevelop Documentation](https://docs.gdevelop-app.com/)
- [GDevelop Export Guide](https://docs.gdevelop-app.com/gdevelop5/publishing/web)
- [HTML5 Game Optimization](https://docs.gdevelop-app.com/gdevelop5/publishing/web/optimize-html5-games)
- [GDevelop Community](https://forum.gdevelop-app.com/)

## 📝 Example Implementation

See the updated `game1.html` file for a complete example of GDevelop integration with:
- Responsive design
- Loading states
- Fullscreen support
- Game controls
- Error handling
- Mobile optimization

## 🎯 Next Steps

1. Export your GDevelop games
2. Place them in the `games/` folder
3. Test each game individually
4. Update game pages with proper paths
5. Add custom styling and features
6. Test on different devices
7. Optimize for performance
8. Add analytics tracking
