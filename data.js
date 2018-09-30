const jsonfile = require('jsonfile-promised');
const fs = require('fs');

module.exports = {
    save(activity, duration) {
        let filename = __dirname + '/data/' + activity + '.json';

        if (fs.existsSync(filename)) {
            this.writeData(filename, duration);
        } else {
            this.createActivityFile(filename, {})
                .then(() => {
                    this.writeData(filename, duration);
                });
        }
    },
    writeData(filename, activityDuration) {
        let data = {
            updatedAt: new Date().toString(),
            duration: activityDuration
        }

        jsonfile.writeFile(filename, data);
    },
    createActivityFile(filename, content) {
        return jsonfile.writeFile(filename, content)
            .then(() => {
                console.log('Created')
            })
            .catch((err) => {
                console.log(err);
            });
    },
    getActivityData(activityName) {
        let filename = __dirname + '/data/' + activityName + '.json';

        return jsonfile.readFile(filename);
    },
    getActivityNames() {
        let files = fs.readdirSync(__dirname + '/data');

        return files.map((file) => {
            return file.substr(0, file.lastIndexOf('.'));
        });
    }
}