const bunyan = require('bunyan');

const logger = bunyan.createLogger({name: 'Procrastinator-App'});
module.exports = logger;
