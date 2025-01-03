interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak?(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getToWork(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  return typeof salary === "number" && salary < 500
    ? new Teacher()
    : new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));

const isDirector = (employee: Teacher | Director): employee is Director =>
  employee instanceof Director;

const executeWork = (employee: Teacher | Director): string => {
  return isDirector(employee)
    ? employee.workDirectorTasks()
    : employee.workTeacherTasks();
};

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects): string =>
  todayClass === "Math" ? "Teaching Math" : "Teaching History";

console.log(teachClass("Math"));
console.log(teachClass("History"));
