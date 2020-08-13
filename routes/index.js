'use strict';

const ApiV1 = require('./api/v1');
const jwt  = require('./../utils/jwt')
module.exports = (app) => {
    // Load API Routes
    app.use(jwt());
    app.use('/v1', new ApiV1(app));
    // --------
    // Load other routes
    // --------
    
    app.get('/health_check', (req, res) => {
        res.sendStatus(200);
    });
};