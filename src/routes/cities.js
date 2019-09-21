const server = require('../index');
const data = require('../data');


server.get('/api/countries/:countryId/cities', async (req, res) => {
    try {
        const results = await data.cities.getCitiesForCountry({
            countryId: req.params.countryId,
            searchTerm: req.query.searchTerm,
            offset: req.query.offset,
            limit: req.query.limit,
        });

        return res.json({
            cities: results
        });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
