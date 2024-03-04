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

	workTeacherTasks() {
		return "Getting to work.";
	}
}

export function createEmployee(salary: string | number): Teacher | Director {
	if (typeof salary === "number" && salary < 500) {
		const teacher = new Teacher();
		return teacher;
	} else {
		const director = new Director();
		return director;
	}
}


const isDirector = (employee: DirectorInterface | TeacherInterface): "employee is Director" => {
	return (employee as Director).workDirectorTasks !== undefined;
}

export const executeWork = (employee: DirectorInterface | TeacherInterface): string => {
	if (isDirector(employee)) {
		const directorTasks = employee.workDirectorTasks();
		return directorTasks;
	} else {
		const teacherTasks = employee.workTeacherTasks();
		return teacherTasks.workTeacherTasks();
	}
}

// String literal type task
type Subjects = Math | History;

export function teachClass(todayClass: Subjects): string {
	if (todayClass && todayClass === "Math") {
		return "Teaching Math";
	} else if (todayClass && todayClass === "History") {
		return "Teaching History";
	}
}