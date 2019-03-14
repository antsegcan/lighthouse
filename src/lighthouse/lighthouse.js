const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

module.exports = function (url, opts, config = null) {
    return chromeLauncher.launch().then(chrome => {
        opts.port = chrome.port;
        return lighthouse(url, opts, config).then(results => {
            return chrome.kill().then(() => results.lhr);
        });
    });
}