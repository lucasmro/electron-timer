const { ipcRenderer } = require('electron');

let linkClose = document.querySelector('#link-close');

linkClose.addEventListener('click', function() {
    ipcRenderer.send('close-about-window');
})