const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('app', {
  isElectron: true,
  platform: process.platform,
  version: process.versions.electron
});
