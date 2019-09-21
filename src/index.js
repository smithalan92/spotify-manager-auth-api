const express = require('express');
const rateLimit = require("express-rate-limit");

const app = express();

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 20 // limit each IP to 100 requests per windowMs
});

// Port the API should run on, PM2_USAGE is set on production
app.port = 3000;

 //  apply to all requests
 app.use(limiter);

// Set Cors Headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    return next();
});

// Handle options requests
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        return res.end();
    }
    return next();
});

// Create a new router
const router = express.Router();

// Export the router so other classes can add routes
module.exports = router;

// Register our routes
require('./routes/index'); //eslint-disable-line

// Use the router
app.use('/', router);

require('./db');

// Start the server
app.listen(app.port, () => {
    console.log('App: Listening on port ', app.port);
});
