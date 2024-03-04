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