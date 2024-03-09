import fs from "node:fs/promises";

const readDatabase = async (filePath) => {
	// code here
	try {
		const fileContents = await fs.readFile(filePath, "utf8");
		let students = fileContents.split("\n").map((line) => line.trim());
		students = students.map(function(student){
			return student.split(",");
		});

		const StudentList = students.length > 0 ? students.slice(1) : 0;

		console.log(StudentList);

		for (const student of students) {
			console.log(student);
		}

	} catch (e) {
		console.log(e.message);
	}
}

readDatabase("./database.csv")