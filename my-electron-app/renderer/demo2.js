const btn = this.document.querySelector('#btn')
//const { BrowserWindow } = require('electron').remote
const { BrowserWindow } = require('electron')

window.onload = function () {
    btn.onclick = () => {
        newWin = new BrowserWindow({
            width: 500,
            height: 500,
            webPreferences: {
                ontextIsolation: false,
                nodeIntegration: true, // 是否集成 Nodejs
                enableRemoteModule: true
            }
        }
        )
        newWin.loadFile('yellow.html')
        newWin.on('close', () => { newWin = null })
    }
}