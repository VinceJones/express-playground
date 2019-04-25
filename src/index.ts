import express = require('express');
import * as path from 'path';
import loggerService from './service/LoggerService';
import routeService from './service/RouteService'

const port = process.env.PORT || 5000;
const server = express();

server.use(loggerService.handleRequest);
server.listen(port, () => console.log(`Listening on port ${port}`));

routeService.buildRoutes(server, path.join(__dirname, '../'));
