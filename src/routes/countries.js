const server = require('../index');
const data = require('../data');

server.get('/api/countries', async (req, res) => {
    try {
        const results = await data.countries.getCountries({
            searchTerm: req.query.searchTerm,
            offset: req.query.offset,
            limit: req.query.limit,
        });

        return res.json({
            countries: results
        });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
