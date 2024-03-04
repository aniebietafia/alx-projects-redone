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

export default function createEmployee(salary: string | number): Teacher | Director {
	if (typeof salary === "number" && salary < 500) {
		const teacher = new Teacher();
		return teacher;
	} else {
		const director = new Director();
		return director;
	}
}


const isDirector = (employee) => {
	const director = new Director();
	return director;
}

const executeWork = (employee) => {
	if (employee === "Director") {
		const directorTasks = isDirector(employee).workDirectorTasks();
		return directorTasks;
	} else {
		const teacherTasks = new Teacher();
		return teacherTasks.workTeacherTasks();
	}
}