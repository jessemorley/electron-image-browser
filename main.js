const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const path = require('path');
const fs = require('fs').promises;
const Store = require('electron-store');

// Shared constants
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.tiff'];

const store = new Store();

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    titleBarStyle: 'hiddenInset',
    trafficLightPosition: { x: 20, y: 20 },
    backgroundColor: '#ffffff',
    show: false
  });

  mainWindow.loadFile('index.html');

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  if (process.argv.includes('--dev')) {
    mainWindow.webContents.openDevTools();
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// IPC handlers
ipcMain.handle('select-directory', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory']
  });
  
  if (!result.canceled && result.filePaths.length > 0) {
    const selectedPath = result.filePaths[0];
    store.set('selectedFolder', selectedPath);
    return selectedPath;
  }
  return null;
});

ipcMain.handle('get-stored-folder', () => {
  return store.get('selectedFolder', null);
});

ipcMain.handle('clear-stored-folder', () => {
  store.delete('selectedFolder');
  return true;
});

ipcMain.handle('get-theme', () => {
  return store.get('theme', 'auto');
});

ipcMain.handle('set-theme', (event, theme) => {
  store.set('theme', theme);
  return true;
});

ipcMain.handle('get-show-hex', () => {
  return store.get('showHex', false);
});

ipcMain.handle('set-show-hex', (event, showHex) => {
  store.set('showHex', showHex);
  return true;
});

ipcMain.handle('get-eyedropper-active', () => {
  return store.get('eyedropperActive', false);
});

ipcMain.handle('set-eyedropper-active', (event, active) => {
  store.set('eyedropperActive', active);
  return true;
});

ipcMain.handle('get-histogram-active', () => {
  return store.get('histogramActive', false);
});

ipcMain.handle('set-histogram-active', (event, active) => {
  store.set('histogramActive', active);
  return true;
});

ipcMain.handle('get-gallery-style', () => {
  return store.get('galleryStyle', 'default');
});

ipcMain.handle('set-gallery-style', (event, galleryStyle) => {
  store.set('galleryStyle', galleryStyle);
  return true;
});

ipcMain.handle('reveal-in-finder', (event, filePath) => {
  shell.showItemInFolder(filePath);
  return true;
});

ipcMain.handle('get-photographers', async (event, rootPath) => {
  try {
    const items = await fs.readdir(rootPath, { withFileTypes: true });
    const photographers = [];
    
    for (const item of items) {
      if (item.isDirectory()) {
        const photographerPath = path.join(rootPath, item.name);
        const previewImage = await getPreviewImage(photographerPath);
        
        photographers.push({
          name: item.name,
          path: photographerPath,
          previewImage: previewImage
        });
      }
    }
    
    return photographers;
  } catch (error) {
    console.error('Error reading photographers:', error);
    return [];
  }
});

ipcMain.handle('get-images', async (event, folderPath) => {
  try {
    const items = await fs.readdir(folderPath, { withFileTypes: true });
    const images = [];
    
    for (const item of items) {
      if (item.isFile()) {
        const ext = path.extname(item.name).toLowerCase();
        if (IMAGE_EXTENSIONS.includes(ext)) {
          images.push({
            name: item.name,
            path: path.join(folderPath, item.name)
          });
        }
      }
    }
    
    return images;
  } catch (error) {
    console.error('Error reading images:', error);
    return [];
  }
});

async function getPreviewImage(folderPath) {
  try {
    const items = await fs.readdir(folderPath, { withFileTypes: true });
    
    for (const item of items) {
      if (item.isFile()) {
        const ext = path.extname(item.name).toLowerCase();
        if (IMAGE_EXTENSIONS.includes(ext)) {
          return path.join(folderPath, item.name);
        }
      }
    }
    return null;
  } catch (error) {
    return null;
  }
}