import http from "node:http";
import countStudents from "./3-read_file_async.js";

const PORT = 1245;

async function handleRequests(req, res) {
	
	const url = req.url;

	if (url === "/") {
		res.setHeader('Content-Type', "text/plain");
		res.writeHead(200);
		return res.end("Hello Holberton School!");
	} else if (url === "/students") {
		res.setHeader('Content-Type', "text/plain");
		res.writeHead(200);
		res.end("This is the list of our students.")
		await countStudents(process.argv[2]);
		return res.end();
	}
}

const app = http.createServer(handleRequests);

app.listen(PORT, () => {
	console.log('Server listening on port: ' + PORT);
})

export default app;