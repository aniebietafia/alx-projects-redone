export class AppController {
	static getHomepage(req, res) {
		res.writeHead(200);
		res.send("Hello Holberton School!");
	}
}