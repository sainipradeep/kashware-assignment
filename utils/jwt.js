const expressJwt = require('express-jwt');
const config = require('./../config/index');

module.exports = jwt;

function jwt() {
    const secret = config.auth.jwt_secret;
    return expressJwt({
        secret: secret,
        isRevoked
    })
        .unless({
            path: [
                '/v1/users/login',
                '/swagger.json'
            ]
        });
}




async function isRevoked(req, payload, done) {
    try {

        if (payload.data.username != config.username) {
            done(new Error("User not found.............id", payload));
            return;
        }
        return done(null, false);

    } catch (e) {
        return done(new Error('UnauthorizedError'));
    }

};



