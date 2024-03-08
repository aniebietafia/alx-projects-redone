import express from "express";
import countStudents from "./3-read_file_async.js";

const app = express();

const PORT = 1245;

app.get("/", function (req, res) {
	res.send("Hello Holberton School!");
});

app.get("/students", async (req, res) => {
	try {
		const students = await countStudents(process.argv[2]);
		res.send("This is the list of our students\n", students);
	} catch (e) {
		res.send(e.message);
	}
})

app.listen(PORT, () => {
	console.log("Server listening on port: " + PORT);
})

export default app;