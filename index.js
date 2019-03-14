const runLightHouse = require('./src/lighthouse/lighthouse');
const CONFIG = require('./src/lighthouse/lighthouse.conf');

const url = process.argv[2] || 'https://developers.google.com/web/tools/lighthouse/';

runLightHouse(url, CONFIG).then(results => {
    console.log(results);
});