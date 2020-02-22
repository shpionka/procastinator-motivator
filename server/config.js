module.exports = {
    DEV: {
        mongodb: {
            uri: 'mongodb://localhost/procrastinator-motivator-dev',
        },
    },
    PROD: {
        mongodb: {
            uri: process.env.DB_CONNECTION_STRING,
        },
    }
};
