const { app, BrowserWindow, ipcMain } = require('electron');

let mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

app.on('window-all-closed', () => {
    app.quit();    
});

ipcMain.on('open-about-window', () => {
    let aboutWindow = new BrowserWindow({
        width: 300,
        height: 200
    });

    aboutWindow.loadURL(`file://${__dirname}/app/about.html`);
})