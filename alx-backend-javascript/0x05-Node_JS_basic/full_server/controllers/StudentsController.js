import readDatabase from "../utils.js";

export class StudentsController {
	static async getAllStudents(req, res) {
		try {
			const students = await readDatabase("./database.csv");
			const result = [];
			
			result.push("This is the list of our students");

			for (const key in students) {
				result.push(`Number of students in ${key}: ${students[key].length}. List: ${students[key].join(", ")}`)
			}
			res.send(result.join("\n"));
		} catch (e) {
			res.send(500, "Cannot load the database.");
		}
	}
}

StudentsController.getAllStudents();