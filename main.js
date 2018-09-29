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

let aboutWindow = null;
ipcMain.on('open-about-window', () => {
    if (aboutWindow == null) {
        aboutWindow = new BrowserWindow({
            width: 300,
            height: 200
        });

        aboutWindow.on('closed', () => {
            aboutWindow = null;
        })
    }

    aboutWindow.loadURL(`file://${__dirname}/app/about.html`);
})