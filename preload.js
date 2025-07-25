const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  selectDirectory: () => ipcRenderer.invoke('select-directory'),
  getPhotographers: (rootPath) => ipcRenderer.invoke('get-photographers', rootPath),
  getImages: (folderPath) => ipcRenderer.invoke('get-images', folderPath),
  getStoredFolder: () => ipcRenderer.invoke('get-stored-folder'),
  clearStoredFolder: () => ipcRenderer.invoke('clear-stored-folder'),
  getTheme: () => ipcRenderer.invoke('get-theme'),
  setTheme: (theme) => ipcRenderer.invoke('set-theme', theme),
  getShowHex: () => ipcRenderer.invoke('get-show-hex'),
  setShowHex: (showHex) => ipcRenderer.invoke('set-show-hex', showHex),
  getEyedropperActive: () => ipcRenderer.invoke('get-eyedropper-active'),
  setEyedropperActive: (active) => ipcRenderer.invoke('set-eyedropper-active', active),
  getHistogramActive: () => ipcRenderer.invoke('get-histogram-active'),
  setHistogramActive: (active) => ipcRenderer.invoke('set-histogram-active', active),
  revealInFinder: (filePath) => ipcRenderer.invoke('reveal-in-finder', filePath)
});