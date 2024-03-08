import express from "express";

const app = express();

const PORT = 1245;

app.get("/", (req, res) => {
	res.send('Hello Holberton School!');
})

app.listen(PORT, function() {
	console.log("Server listening on port: " + PORT);
});

export default app;