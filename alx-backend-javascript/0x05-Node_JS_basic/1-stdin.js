process.stdin.setEncoding("utf8");

process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("data", function(data) {
	const input = data.trim().charAt(0).toUpperCase() + data.substring(1);
	process.stdout.write("Your name is: " + input);
	process.exit();
});

process.on("exit", () => {
	process.stdout.write("This important software is now closing.\n");
});