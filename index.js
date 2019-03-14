const runLightHouse = require('./src/lighthouse/lighthouse');

const CONFIG = require('./src/lighthouse/lighthouse.conf');


runLightHouse('https://www.iberia.com', CONFIG).then(results => {
    console.log(results);
});