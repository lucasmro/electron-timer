const { ipcRenderer } = require('electron');
const timer = require('./timer');
const data = require('../../data');

let linkAbout = document.querySelector('#link-about');
let buttonPlay = document.querySelector('.play-button')
let time = document.querySelector('.time');
let activity = document.querySelector('.activity');
let btnAddActivity = document.querySelector('.button-add-activity');
let txtNewActivity = document.querySelector('.text-new-activity');

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

ipcRenderer.on('activity-changed', (event, activityName) =>{
    data.getActivityData(activityName)
        .then((data)=>{
            time.textContent = data.duration;
        })
    activity.textContent = activityName;
});

btnAddActivity.addEventListener('click', function() {
    let newActivity = txtNewActivity.value;
    activity.textContent = newActivity;
    time.textContent = '00:00:00';
    txtNewActivity.value = '';
    ipcRenderer.send('activity-added', newActivity);
});