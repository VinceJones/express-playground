import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import loggerService from "./service/LoggerService";
import routeService from "./service/RouteService";

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(loggerService.handleRequest);

routeService.buildRoutes(app, path.join(__dirname, "../"));

app.listen(port, () => console.log(`Listening on port ${port}`));
