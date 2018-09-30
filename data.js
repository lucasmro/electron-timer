const jsonfile = require('jsonfile-promised');
const fs = require('fs');

module.exports = {
    save(activity, duration) {
        let filename = __dirname + '/data/' + activity + '.json';

        if (fs.existsSync(filename)) {
            // Save data
        } else {
            this.createActivityFile(filename, {})
                .then(() => {
                    // Save data
                });
        }
    },
    createActivityFile(filename, content) {
        return jsonfile.writeFile(filename, content)
            .then(() => {
                console.log('Created')
            })
            .catch((err) => {
                console.log(err);
            });
    }
}