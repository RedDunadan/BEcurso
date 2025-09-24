const fs = require('fs');
const DB_File = './db.json';

function loadDB() {
    if (!fs.existsSync(DB_File)) return [];
    const rawData = fs.readFileSync(DB_File, 'utf-8');
    return rawData ? JSON.parse(rawData) : [];
}

function saveDB(data) {
    fs.writeFileSync(DB_File, JSON.stringify(data, null, 2));
}

module.exports = { loadDB, saveDB };