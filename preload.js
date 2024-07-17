const { contextBridge, ipcRenderer } = require('electron')
const remote = require('@electron/remote')
const { BrowserWindow } = remote

console.log(
  'preload.js loaded ~~~~~~~~ 你看我在哪里展示（主进程 OR 渲染进程），就表示我是属于哪个进程。'
)

// 仅在 contextIsolation 启用时使用 contextBridge
contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    send: (channel, ...args) => ipcRenderer.send(channel, ...args),
    on: (channel, listener) => ipcRenderer.on(channel, listener),
    once: (channel, listener) => ipcRenderer.once(channel, listener),
    removeListener: (channel, listener) =>
      ipcRenderer.removeListener(channel, listener)
  },
  createWindow: () => {
    let winNew = new BrowserWindow({
      width: 1000,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    })
    winNew.loadURL('https://www.baidu.com')
  }
})

// // 你可以选择是否通过 contextBridge 暴露 API
// contextBridge.exposeInMainWorld('electronAPI', {
//   // 这里可以添加其他暴露给渲染进程的 API
// })

// window.addEventListener('DOMContentLoaded', () => {
//   const replaceText = (selector, text) => {
//     const element = document.getElementById(selector)
//     if (element) element.innerText = text
//   }

//   for (const dependency of ['chrome', 'node', 'electron']) {
//     replaceText(`${dependency}-version`, process.versions[dependency])
//   }
// })
