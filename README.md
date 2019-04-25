# Express Playground

## Description
The goal of this project is to create a playground for node and express .

### Tasks
- create a small Express app
- this should provide a collection of RESTful routes for a single resource (GET, PUT, POST, DELETE)
- this resource should be called `Post`
- these routes should be reachable via curl/postman
- there doesn’t need to be a backing db, just routes that respond appropriately to http verb
- this should implement a middleware that logs out `req.headers` and `req.body`

*bonus points*
- typescript
- tests
- implementing a logger of some sort

### Setup
* ```npm install```
* ```npm run build```
* ```npm run start```
* Use postman to hit endpoints.

### Adding Routes
* Routes are auto loaded based on what is in the routes folder.
* Add a class that adheres to the RoutesInterface by implementing the register method and a route parameter.
* Export a new instance of your route.