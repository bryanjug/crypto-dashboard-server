require("events").EventEmitter.prototype._maxListeners = 700;
require("events").defaultMaxListeners = 700;
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 4000;

server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log('JSON Server is running')
})

process.on("warning", function (err) {
	if ("MaxListenersExceededWarning" == err.name) {
		console.log("o kurwa");
		process.exit(1); 
	}
});
