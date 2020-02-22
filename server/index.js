const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const Card = require("./models/card")
const logger = require('./logger');
const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'DEV';

app.use(cors());

app.get('/', (req, res) => {
    res.send('ok')
})

app.get('/api/cards', async (req, res) => {
    const limit = req.query.limit || 100;
    const offset = req.query.offset || 0;

    const cards = await Card.find({}).limit(limit).skip(offset);
    res.send(cards);
});

if (env === 'DEV') {
    app.listen(port, () => logger.info(`Listening on port ${port}!`));
} else {
    module.exports.handler = serverless(app);
}
