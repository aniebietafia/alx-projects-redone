import fs from "node:fs";
// import path from "node:path";
// import { URL } from "node:url";

export default function countStudents(filePath) {
	try {
		const fileContents = fs.readFileSync(filePath, "utf8").split("\n");
		const students = fileContents.map((el) => el.split(","));
		const NUMBER_OF_STUDENTS = students.length > 0 ? students.slice(1).length : 0;
		console.log("Number of students: " + NUMBER_OF_STUDENTS);

		const CS_DEPT = [];
		const SWE_DEPT = [];

		for (const student of students) {
			if (student[3].slice(0, 2) == "CS") {
				CS_DEPT.push(student[0]);
			} else if (student[3].slice(0, 3) == "SWE") {
				SWE_DEPT.push(student[0]);
			}
		}
	
		console.log(`Number of students in CS: ${CS_DEPT.length}. List: ${CS_DEPT.join(", ")}`);
		console.log(`Number of students in CS: ${SWE_DEPT.length}. List: ${SWE_DEPT.join(", ")}`);

	} catch (e) {
		throw new Error("Cannot load the database");
	}
}