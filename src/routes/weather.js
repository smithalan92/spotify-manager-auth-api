const server = require('../index');
const data = require('../data');

server.get('/api/weather/:cityId', async (req, res) => {
    try {
        const { currently } = await data.weather.getWeatherForCity(req.params.cityId)

        const rainChance = currently.precipProbability * 100 + '%'
        const temperature = Number(currently.temperature).toFixed(0) + '°c'

        return res.send({
            summary: currently.summary,
            icon: currently.icon,
            temp: temperature,
            chanceOfRain: rainChance,
        });
    }  catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
