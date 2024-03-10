import fs from "node:fs/promises";

const readDatabase = async (filePath) => {
	// code here
	try {
		const database = await fs.readFile(filePath, "utf8");
		let fileContents = database.split("\n").map((line) => line.trim());
		fileContents = fileContents.map(function(student){
			return student.split(",");
		});

		const students = fileContents.length > 0 ? fileContents.slice(1) : 0;

		const studentList = {};

		for (const student of students) {
			studentList[student[3]] = [];
		}

		for (const key in studentList) {
			students.forEach((student) => {
				if (student[3] == key) {
					studentList[key].push(student[0]);
				}
			})
		}

		return studentList;

	} catch (e) {
		console.log(e.message);
	}
}

export default readDatabase;