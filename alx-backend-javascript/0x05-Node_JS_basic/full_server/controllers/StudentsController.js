import readDatabase from "../utils.js";

export class StudentsController {
	static async getAllStudents(req, res) {
		try {
			// const students = await readDatabase("../database.csv");
			this.res.writeHead(200)
			this.res.write("This is the list of our students");
			// console.log(students);
		} catch (e) {
			throw new Error("Cannot load the database.");
		}
	}
}

StudentsController.getAllStudents();