'use strict';

const electron = require('electron');
const ejse = require('ejs-electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('ready', function () {
    mainWindow = new BrowserWindow({

    });
    mainWindow.loadURL(`file://` + __dirname + `/views/index.ejs`);
    mainWindow.on('closed', () => { mainWindow = null; });
});