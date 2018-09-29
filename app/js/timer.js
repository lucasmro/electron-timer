const moment = require('moment');

let seconds;
let timer;

module.exports = {
    start(el) {
        let time = moment.duration(el.textContent);
        seconds = time.asSeconds();
        clearInterval(timer);
        timer = setInterval(() => {
            seconds++;
            el.textContent = this.secondsToTime(seconds);
        }, 1000);
    },
    stop() {
        clearInterval(timer);
    },
    secondsToTime(seconds) {
        return moment()
            .startOf('day')
            .seconds(seconds)
            .format('HH:mm:ss');
    }
}
