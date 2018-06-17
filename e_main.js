const electron = require('electron')

const {app, BrowserWindow} = require('electron')
  
  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({ width:820,height:660,resizable :false})
    win.webContents.openDevTools()

    // and load the index.html of the app.
    win.loadFile('index.html')
  }
  
  app.on('ready', createWindow)
