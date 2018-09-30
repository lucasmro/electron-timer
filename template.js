const data = require('./data');

module.exports = {
    initializedTemplate: null,
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

        this.initializedTemplate = template;

        return template;
    },
    addActivityToTray(activity, win){
        this.initializedTemplate.push({
            label: activity,
            type: 'radio',
            checked: true,
            click: () => {
                win.send('activity-added', activity);
            }
        })

        return this.initializedTemplate;
    }
}