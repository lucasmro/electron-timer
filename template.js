const data = require('./data');

module.exports = {
    buildTemplate(win) {
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
                type: 'radio',
                click: () => {
                    win.send('activity-changed', activityName);
                }
            };

            template.push(menuItem);
        })

        return template;
    }
}