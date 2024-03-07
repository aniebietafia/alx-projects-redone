import fs from "node:fs/promises";

const countStudents = async (filePath) => {
	try {
		const fileContents = await fs.readFile(filePath, "utf8");
		let students = fileContents.split("\n");
		students = students.map((student) => student.split(","));

		const NUMBER_OF_STUDENTS = students.length > 0 ? students.slice(1).length : 0;
		console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

		const CS_DEPT = [];
		const SWE_DEPT = [];

		for (const student of students) {
			if (student[3].startsWith("CS")) {
				CS_DEPT.push(student[0]);
			} else if (student[3].startsWith("SWE")) {
				SWE_DEPT.push(student[0]);
			}
		}

		console.log(`Number of students in CS: ${CS_DEPT.length}. List: ${CS_DEPT.join(", ")}`);
		console.log(`Number of students in SWE: ${SWE_DEPT.length}. List: ${SWE_DEPT.join(", ")}`);

	} catch (e) {
		throw new Error("Cannot load the database");
	}
}

export default countStudents;