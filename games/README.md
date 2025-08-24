# GDevelop Games Integration Guide

## 📁 Folder Structure

```
games/
├── game1/
│   ├── index.html          # GDevelop exported HTML file
│   ├── game.js             # GDevelop game logic
│   ├── assets/             # Game assets (images, sounds, etc.)
│   └── libs/               # GDevelop libraries
├── game2/
│   └── ... (same structure)
├── game3/
│   └── ... (same structure)
└── README.md               # This file
```

## 🎮 How to Add GDevelop Games

### Step 1: Export Your GDevelop Game
1. Open your GDevelop project
2. Go to **File → Export → Export for Web (HTML5)**
3. Choose a destination folder (e.g., `games/game1/`)
4. Click **Export**

### Step 2: Place Files in Correct Location
- Copy the exported files to the corresponding game folder
- Ensure the main HTML file is named `index.html`
- Keep all assets and libraries in their respective folders

### Step 3: Update Game Page
- The game pages are already configured to load from `games/game1/index.html`
- Each game page will automatically load the corresponding GDevelop game

## 🔧 Configuration Options

### Method 1: Iframe Embed (Current Setup)
```html
<iframe 
    class="gdevelop-game-frame"
    src="games/game1/index.html"
    title="GDevelop Game 1"
    allowfullscreen>
</iframe>
```

### Method 2: Direct Integration
If you want to integrate the game directly without iframe:

1. Copy the GDevelop game files to your game page
2. Include the necessary scripts and styles
3. Initialize the game in your page

### Method 3: External Hosting
You can also host your GDevelop games on external platforms:
- itch.io
- GitHub Pages
- Netlify
- Vercel

Then update the iframe src to point to the external URL.

## 🎯 Game Features

Each game page includes:
- ✅ Responsive design
- ✅ Fullscreen mode
- ✅ Reload functionality
- ✅ Game instructions
- ✅ Loading states
- ✅ Error handling

## 📱 Mobile Optimization

Games are automatically optimized for:
- Touch controls
- Responsive layouts
- Mobile-friendly interfaces

## 🚀 Performance Tips

1. **Optimize Assets**: Compress images and audio files
2. **Minimize Dependencies**: Only include necessary libraries
3. **Use CDN**: Consider hosting large files on CDN
4. **Lazy Loading**: Load games only when needed

## 🔗 Useful Links

- [GDevelop Documentation](https://docs.gdevelop-app.com/)
- [GDevelop Export Guide](https://docs.gdevelop-app.com/gdevelop5/publishing/web)
- [HTML5 Game Optimization](https://docs.gdevelop-app.com/gdevelop5/publishing/web/optimize-html5-games)
