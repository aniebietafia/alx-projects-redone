interface DirectorInterface {
	workFromHome: () => string;
	getCoffeeBreak: () => string;
	workDirectorTasks: () => string;
}

interface TeacherInterface {
	workFromHome: () => string;
	getCoffeeBreak: () => string;
	workTeacherTasks: () => string;
}

class Director implements DirectorInterface {
	workFromHome() {
		return "Working from home";
	}

	getCoffeeBreak() {
		return "Getting a coffee break";
	}

	workDirectorTasks() {
		return "Getting to director tasks";
	}
}

class Teacher implements TeacherInterface {
	workFromHome() {
		return "Cannot work from home";
	}

	getCoffeeBreak() {
		return "Cannot have a break";
	}

	workDirectorTasks() {
		return "Getting to director tasks";
	}
}

function createEmployee(salary: string | number) {
	if (typeof salary === "number" && salary < 500) {
		const teacher = new Teacher();
		return teacher;
	}
}