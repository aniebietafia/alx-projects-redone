import http from "node:http";
import express from "express";

const app = express();

const PORT = 1245;

app.get("/", () => {
	console.log('Hello Holberton School!');
});

const server = http.createServer(app);

server.listen(PORT, function() {
	console.log("Server listening on port: " + PORT);
});

export default app;