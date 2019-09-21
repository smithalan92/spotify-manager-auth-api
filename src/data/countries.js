const db = require('../db');
const squel = require('squel');

async function getCountries({ searchTerm, offset, limit}) {
    let expression = squel.select()
        .fields(['id', 'name'])
        .from('countries')
        .order("name");

    if (searchTerm) {
        expression = expression.where(`UPPER(name) LIKE UPPER(?)`, `${searchTerm}%`);
    }

    if (offset) {
        expression = expression.offset(offset);
    }

    if (limit) {
        expression = expression.limit(limit)
    }

    const results = await db.runQuery(expression.toString());

    return results;
};

module.exports = {
    getCountries,
};
