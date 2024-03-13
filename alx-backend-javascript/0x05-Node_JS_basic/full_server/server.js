import http from "node:http";
import express from "express";

import router from "./routes/index.js";

const app = express();

const PORT = 1245;

app.use(router);

const server = http.createServer(app);

server.listen(PORT, function() {
	console.log("Server started on port: " + PORT);
})

export default app;