# Photo Database Local v4

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

## Screenshots

*Add screenshots of your application here*

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/photo-database-local.git
   cd photo-database-local
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

### Development Mode
```bash
npm run dev
```

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

### Built With
- **Electron** - Desktop application framework
- **JavaScript** - Core application logic
- **HTML5 Canvas** - Image processing and histogram generation
- **CSS3** - Modern styling with dark mode support
- **Sharp** - High-performance image processing

### Architecture
- `main.js` - Electron main process
- `app.js` - Application logic and UI handling
- `preload.js` - Secure IPC communication
- `css/` - Modular stylesheets (base, layout, components)
- `icons/` - SVG icon collection

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

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

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

### Code Style
- Modern JavaScript (ES6+)
- Modular CSS architecture
- Semantic HTML structure
- Progressive enhancement

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Jesse Morley**

## Acknowledgments

- Icons from the included SVG icon set
- Built with Electron framework
- Image processing powered by Sharp

---

*A tool by photographers, for photographers* 📸