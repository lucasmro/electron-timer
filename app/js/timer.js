const { ipcRenderer } = require('electron');
const moment = require('moment');

let seconds;
let timer;
let time;

module.exports = {
    start(el) {
        time = moment.duration(el.textContent);
        seconds = time.asSeconds();

        clearInterval(timer);

        timer = setInterval(() => {
            seconds++;
            el.textContent = this.secondsToTime(seconds);
        }, 1000);
    },
    stop(activity) {
        clearInterval(timer);
        let activityDuration = this.secondsToTime(seconds);
        ipcRenderer.send('activity-stopped', activity, activityDuration);
    },
    secondsToTime(seconds) {
        return moment()
            .startOf('day')
            .seconds(seconds)
            .format('HH:mm:ss');
    }
}
