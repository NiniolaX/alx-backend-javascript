// Task 5
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
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

  getCoffeeBreak(): string {
    return "";
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

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher;
  } else {
    return new Director;
  }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


// Task 6
function isDirector(employee: Teacher | Director): boolean {
    if (employee instanceof Director) {
        return true;
    } else {
        return false;
    }
}

function executeWork(employee: Teacher | Director): void {
  if (employee instanceof Director) {
    console.log(employee.workDirectorTasks());
  } else if (employee instanceof Teacher) {
    console.log(employee.workTeacherTasks());
  } else {
    return;
  }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));


// Task 7
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  } else {
    return "Invalid subject";
  }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
