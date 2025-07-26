# Local Photo Database

A lightweight, desktop image browser designed specifically for organizing and viewing photographer portfolios. Built with Electron for cross-platform compatibility.

## Features

### 🖼️ Image Organization
- **Photographer-based Structure**: Organizes images by photographer directories
- **Fast Grid View**: Quickly browse through image collections
- **Full-Screen Viewer**: Immersive image viewing experience
- **Keyboard Navigation**: Arrow keys for easy browsing

### 🔍 Analysis Tools
- **Eyedropper Tool**: Real-time color sampling with RGB/Hex values
- **Histogram Display**: Live luminosity distribution analysis
- **Interactive Histogram**: Vertical line tracking showing current pixel's luminosity value
- **Search Functionality**: Find photographers quickly

### 🎨 User Experience
- **Light/Dark Theme**: Automatic system theme detection with manual override
- **Modern UI**: Clean, photographer-focused interface with SVG icons
- **Responsive Design**: Adapts to different screen sizes
- **Persistent Settings**: Remembers your preferences between sessions

## Usage

### Initial Setup
1. Launch the application
2. Select your photography folder containing photographer directories
3. Browse through your organized photo collection

### Folder Structure
The application expects your photos to be organized like this:
```
Photography Folder/
├── Photographer 1/
│   ├── image1.jpg
│   ├── image2.png
│   └── ...
├── Photographer 2/
│   ├── photo1.jpg
│   └── ...
└── ...
```

### Tools & Features

#### Eyedropper Tool
- Click the eyedropper icon (👁️) to activate
- Hover over any pixel in an image to see:
  - RGB values
  - Luminosity value
  - Hex color code

#### Histogram
- Click the histogram icon (📊) to display luminosity distribution
- When used with eyedropper, shows a red vertical line indicating current pixel's luminosity
- Includes grid lines for easy reference

#### Navigation
- **Arrow Keys**: Navigate between images
- **Back Button**: Return to photographer grid
- **Search**: Filter photographers by name
- **Escape**: Close modals and viewers

#### Preferences
- **Theme Selection**: Auto (system), Light, or Dark mode
- **Folder Management**: Change or reset photography folder
- **Hex Display**: Toggle hex values in eyedropper tool

## Technical Details

### Key Features Implementation
- **Real-time Color Sampling**: Uses HTML5 Canvas ImageData API
- **Histogram Generation**: ITU-R BT.709 luminosity calculation
- **Theme System**: CSS custom properties with JavaScript switching
- **Persistent Storage**: Electron Store for user preferences

## File Format Support

Supports common image formats:
- JPEG (.jpg, .jpeg)
- PNG (.png)
- GIF (.gif)
- WebP (.webp)
- TIFF (.tiff, .tif)
- BMP (.bmp)

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` / `→` | Navigate between images |
| `Escape` | Close image viewer/modals |
| `Space` | Toggle eyedropper |
| `H` | Toggle histogram |


## Development

### Project Structure
```
photo-database-local-v4/
├── css/
│   ├── base.css          # Global styles and variables
│   ├── components.css    # UI component styles
│   └── layout.css        # Layout and positioning
├── icons/                # SVG icon collection
├── app.js               # Main application logic
├── main.js              # Electron main process
├── preload.js           # IPC bridge
├── index.html           # Application UI
└── package.json         # Dependencies and scripts
```


## To-Do

- [ ] Consolidate inspection elements to single toggle
- [x] Keyboard shortcuts
- [ ] Refresh button
- [ ] Image transitions
- [ ] Click to store RGB values
- [ ] Grid spacing options in Preferences
- [ ] Colour wheel overlay
- [x] Wrap image view behaviour

## Possible To-Do

- [ ] Local storage for image notes, favourites, ordering

*A tool by photographers, for photographers* 🤝