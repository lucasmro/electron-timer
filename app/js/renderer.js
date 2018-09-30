const { ipcRenderer } = require('electron');
const timer = require('./timer');
const data = require('../../data');

let linkAbout = document.querySelector('#link-about');
let buttonPlay = document.querySelector('.play-button')
let time = document.querySelector('.time');
let activity = document.querySelector('.activity');

window.onload = () => {
    data.getActivityData(activity.textContent)
        .then((data) => {
            time.textContent = data.duration;
        });
}

linkAbout.addEventListener('click' , function() {
    ipcRenderer.send('open-about-window');
});

let imgs = ['img/play-button.svg', 'img/stop-button.svg'];
let play = false;
buttonPlay.addEventListener('click', function() {
    if (play) {
        timer.stop(activity.textContent);
        play = false;
    } else {
        timer.start(time);
        play = true;
    }

    imgs = imgs.reverse();
    buttonPlay.src = imgs[0];
})
