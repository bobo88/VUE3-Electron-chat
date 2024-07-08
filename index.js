const { app, BrowserWindow } = require('electron')
const path = require('path')
const waitOn = require('wait-on')

async function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // 如果有 preload.js
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  const isDev = (await import('electron-is-dev')).default

  if (isDev) {
    // 等待开发服务器启动
    // await waitOn({ resources: ['http://localhost:3002'] })
    win.loadURL('http://localhost:3002/#/')
    win.webContents.openDevTools()
  } else {
    // 加载生产构建文件
    win.loadFile(path.join(__dirname, 'dist', 'index.html'))
    win.webContents.openDevTools()
  }
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
