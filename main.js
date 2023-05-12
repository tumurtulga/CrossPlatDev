'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        userContentSize: true,
        width: 800,
        height: 600,
        resizable: false,
        fullscreen: false,
    });
    mainWindow.loadURL(`file://` + __dirname + `/../portfolio/node_modules/startbootstrap-agency/dist/index.html`);
    mainWindow.on('closed', () => { mainWindow = null; });
});