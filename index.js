const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const waitOn = require('wait-on')

async function createWindow() {
  const win = new BrowserWindow({
    width: 1110, // 宽度
    height: 950, // 高度
    // x: 100, // 窗口的横坐标
    // y: 100, // 窗口的纵坐标
    useContentSize: false, // 使用内容大小设置窗口的宽高
    center: true, // 窗口在屏幕中心创建
    minWidth: 800, // 窗口的最小宽度
    minHeight: 600, // 窗口的最小高度
    maxWidth: 1920, // 窗口的最大宽度
    maxHeight: 1080, // 窗口的最大高度
    resizable: true, // 是否允许调整窗口大小
    movable: true, // 是否允许窗口移动
    minimizable: true, // 是否允许窗口最小化
    maximizable: true, // 是否允许窗口最大化
    closable: true, // 是否允许窗口关闭
    focusable: true, // 窗口是否可以聚焦
    alwaysOnTop: false, // 窗口是否始终置顶
    fullscreen: false, // 窗口是否全屏
    fullscreenable: true, // 窗口是否可以全屏
    simpleFullscreen: false, // macOS - 窗口是否可以使用简单全屏
    skipTaskbar: false, // 窗口是否显示在任务栏中
    kiosk: false, // 是否启用 kiosk 模式
    title: 'My Electron App', // 窗口标题
    icon: path.join(__dirname, 'assets', 'icon.png'), // 窗口图标
    show: true, // 窗口是否在创建时显示
    frame: false, // 是否创建无边框窗口
    parent: null, // 窗口的父窗口
    modal: false, // 是否创建一个模态窗口
    acceptFirstMouse: false, // 窗口是否接受第一个鼠标点击事件
    disableAutoHideCursor: false, // 窗口是否在打字时自动隐藏光标
    autoHideMenuBar: false, // 是否自动隐藏菜单栏
    enableLargerThanScreen: false, // 是否允许窗口大小大于屏幕大小
    backgroundColor: '#fff', // 窗口背景颜色
    hasShadow: true, // macOS - 窗口是否有阴影
    opacity: 1.0, // 窗口的不透明度
    transparent: false, // 窗口是否透明
    titleBarStyle: 'hiddenInset', // macOS - 窗口的标题栏样式 ('default', 'hidden', 'hiddenInset', 'customButtonsOnHover')
    trafficLightPosition: { x: 3, y: 5 },
    thickFrame: true, // Windows - 窗口是否有厚边框
    vibrancy: null, // macOS - 窗口的视觉效果 ('appearance-based', 'light', 'dark', 'titlebar', 'selection', 'menu', 'popover', 'sidebar', 'medium-light', 'ultra-dark', 'header', 'sheet', 'window', 'hud', 'fullscreen-ui', 'tooltip', 'content', 'under-window', 'under-page')
    zoomToPageWidth: false, // macOS - 窗口是否根据页面内容缩放
    tabbingIdentifier: null, // macOS - 窗口的分组标签标识符
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // 预加载脚本路径
      nodeIntegration: true, // 是否启用 Node.js 集成
      contextIsolation: true, // 是否启用上下文隔离
      enableRemoteModule: true, // 是否启用 remote 模块
      spellcheck: false, // 是否启用拼写检查
      sandbox: false, // 是否启用沙盒模式
      webSecurity: true, // 是否启用网页安全
      allowRunningInsecureContent: false, // 是否允许在 HTTPS 页面中运行 HTTP URL
      devTools: true, // 是否启用 DevTools
      defaultEncoding: 'utf-8', // 默认字符编码
      backgroundThrottling: true, // 当窗口失去焦点时是否暂停动画和计时器
      offscreen: false, // 是否启用离屏渲染
      preload: path.join(__dirname, 'preload.js'), // 预加载脚本路径
      partition: null, // 指定会话分区
      zoomFactor: 1.0, // 默认缩放因子
      disableHtmlFullscreenWindowResize: false, // 是否禁用 HTML 全屏
      webviewTag: false, // 是否启用 <webview> 标签
      nativeWindowOpen: false, // 是否启用原生窗口打开
      webgl: true, // 是否启用 WebGL
      plugins: false, // 是否启用插件
      experimentalFeatures: false, // 是否启用实验性功能
      safeDialogs: false, // 是否启用安全对话框
      safeDialogsMessage: '', // 安全对话框消息
      navigateOnDragDrop: false, // 是否在拖放时导航
      autoplayPolicy: 'no-user-gesture-required', // 自动播放策略 ('no-user-gesture-required', 'user-gesture-required', 'document-user-activation-required')
      defaultFontFamily: {
        standard: 'Arial', // 标准字体
        serif: 'Times New Roman', // 衬线字体
        sansSerif: 'Arial', // 无衬线字体
        monospace: 'Courier New' // 等宽字体
      },
      defaultFontSize: 16, // 默认字体大小
      defaultMonospaceFontSize: 13 // 默认等宽字体大小
    }
  })

  // 监听渲染进程发送的消息
  ipcMain.on('message-from-renderer', (event, arg) => {
    console.log('渲染进程传递过来的数据: ', arg) // 打印消息
    // 向渲染进程发送消息
    event.sender.send('message-from-main', '主进程收到消息: ' + arg)
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
    // win.webContents.openDevTools()
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
