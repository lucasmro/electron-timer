const data = require('./data');

module.exports = {
    buildTemplate() {
        let template = [
            {
                'label':'Activities'
            },
            {
                type: 'separator'
            }
        ];

        let activityNames = data.getActivityNames();
        activityNames.forEach((activityName) => {
            let menuItem = {
                label: activityName,
                type: 'radio'
            };

            template.push(menuItem);
        })

        return template;
    }
}