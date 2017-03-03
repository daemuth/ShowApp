const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const showappmenu = require('./js/showappmenu');


var mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        title: "ShowApp " + app.getVersion(),
        backgroundColor: "#333333",
        width: 1000,
        height: 800
    })

    showappmenu.createMenu();

    mainWindow.loadURL('file://' + __dirname + '/index.html');
})