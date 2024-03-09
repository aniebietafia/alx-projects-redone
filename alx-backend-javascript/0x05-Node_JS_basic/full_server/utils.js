import fs from "node:fs/promises";

const readDatabase = async (filePath) => {
	// code here
	try {
		const fileContents = await fs.readFile(filePath, "utf8");
		let students = fileContents.split("\n").map((line) => line.trim());
		students = students.map(function(student){
			return student.split(",");
		});
		console.log(students);

	} catch (e) {
		console.log(e.message);
	}
}

readDatabase("./database.csv")