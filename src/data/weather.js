const db = require('../db');
const squel = require('squel');
const axios = require('axios');

async function getWeatherForCity(cityId, { exclude, units} = { exclude: 'minutely,hourly,daily,alerts,flags', units: 'si' }) {
    const expression = squel.select()
        .fields(['lat', 'lng'])
        .from('cities')
        .where('id = ?', cityId);

    const [{ lat, lng }] = await db.runQuery(expression.toString());

    if (!lat || !lng ) {
        throw new Error('City not found');
    }

    const { data } = await axios.get(`https://api.darksky.net/forecast/${process.env.DARKSKY_API_TOKEN}/${lat},${lng}`, {
        params: {
            exclude,
            units,
        },
    });

    return data;
}

module.exports = {
    getWeatherForCity,
};
