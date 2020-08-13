const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const http = require('http');
var swaggerJSDoc = require('swagger-jsdoc');
const Logger = require('./utils/logger.js');
const logger = new Logger();
const app = express();
const config = require('./config/index')
app.set('config', config.app);
app.use(bodyParser.json());
const router = require('./routes');

app.use(compression());
app.use(function (req, res, next) {
    //set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

process.on('SIGINT', () => {
    logger.log('stopping the server', 'info');
    process.exit();
});



app.use((req, res, next) => {
    next();
});


router(app);

app.use((req, res, next) => {
    logger.log('the url you are trying to reach is not hosted on our server', 'error');
    next();
});


let port = 3000

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    switch (error.code) {
        case 'EACCES':
            process.exit(1);
            break;
        case 'EADDRINUSE':
            process.exit(1);
            break;
        default:
            throw error;
    }
}



// swagger definition
var swaggerDefinition = {
    info: {
        title: 'Node Swagger API',
        version: '1.0.0',
        description: 'Demonstrating how to describe a RESTful API with Swagger',
    },
    host: 'localhost:3000',
    // host: 'localhost:3008',
    basePath: '/',
    schemes: ["http"],
    securityDefinitions: {
        Bearer: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
        }
    }
};


// options for the swagger docs
var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: [__dirname + '/routes/api/v1/api/*.js'], // pass all in array

};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);





const server = http.createServer(app);


app.get('/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

function onListening() {
    const addr = server.address();
    // const bind = typeof addr === 'string' ? `Pipe ${port}` : `Port ${port}`;
}



server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
