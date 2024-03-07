import http from "node:http";

const PORT = 1245;

function handleRequests(req, res) {
	res.setHeader("Content-Type", "text/html");
	res.end("Hello Holberton School!");
}

const app = http.createServer(handleRequests);

app.listen(PORT, function() {
	console.log('Server running on port: ' + PORT);
})

export default app;