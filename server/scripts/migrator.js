const csv = require('csv-parser');
const fs = require('fs');

const Card = require("../models/card");
const Category = require('../constants/category');

async function dropCollection() {
    //if (process.env.NODE_ENV === 'dev'){
        await Card.collection.drop();
    //}
}

async function uspertCards(cards, category) {
    await Promise.all(cards.map(async (card) => {
        const dbCard = new Card(card)
        dbCard.category = category;
        await dbCard.save();
    }))
}

async function parseFunContent() {
    const cards =  await parseCSVIntoArray(__dirname + '/fun-content.csv');
    console.log(JSON.stringify(cards, null, 2))
    return cards;
}

async function parseMotivationalContent() {
    return await parseCSVIntoArray(__dirname + '/motivational-content.csv');
}

function parseCSVIntoArray(filePath) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                results.push(row);
            })
            .on('end', () => {
                resolve(results);
            }).on('error', (e) => {
            console.error('Could not parse file ' + filePath, e);
            reject(e)
        });
    })
}
dropCollection()
    .then(() => parseFunContent())
    .then((cards) => uspertCards(cards, Category.FUN_CATEGORY))
    .then(() => console.log("Saved fun cards"))
    .then(() => parseMotivationalContent())
    .then((cards) => uspertCards(cards, Category.MOTIVATION_CATEGORY))
    .then(() => console.log("Saved motivational cards"))
    .catch((e) => console.error('Error', e))
    .finally(() => process.exit(0))

