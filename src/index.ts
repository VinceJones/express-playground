import express = require("express");
import * as path from 'path';
import loggerService from './service/LoggerService';
import routeService from './service/RouteService'

const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(loggerService.handleRequest);

app.listen(port, () => console.log(`Listening on port ${port}`));

routeService.buildRoutes(app, path.join(__dirname, '../'));
