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

		console.log(students);

		// const StudentList = students.map((student) => {
		// 	return { firstName: student[0]};
		// });

		// return StudentList;

	} catch (e) {
		console.log(e.message);
	}
}

export default readDatabase;

const result = readDatabase("./database.csv")
result.then((data) => {
	console.log(data);
})