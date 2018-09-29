const { ipcRenderer, shell } = require('electron');
const process = require('process');

let linkClose = document.querySelector('#link-close');
let linkGitHub = document.querySelector('#link-github');
let electronVersion = document.querySelector('#electron-version');

window.onload = function() {
    electronVersion.textContent = process.versions.electron;
}

linkClose.addEventListener('click', function() {
    ipcRenderer.send('close-about-window');
})

linkGitHub.addEventListener('click', function() {
    shell.openExternal('https://github.com/lucasmro/');
})
