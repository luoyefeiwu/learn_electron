const btn = this.document.querySelector('#btn')
const BrowserWindow = require('electron').remote.BrowserWindow

window.onload = function () {
    btn.onclick = () => {
        newWin = new BrowserWindow({
            width: 500,
            height: 500,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true
            }
        }
        )
        newWin.loadFile('yellow.html')
        newWin.on('close', () => { win = null })
    }
}