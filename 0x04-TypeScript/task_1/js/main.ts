// Task 1
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);


// Task 2
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


// Task 3
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printFunction: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
}
console.log(printFunction("John", "Doe"));


// Task 4
interface studentClassConstructor {
  (firstName: string, lastName: string): void;
}

interface studentClassInterface {
//  constructor: studentClassConstructor;
  workOnHomeWork(): string;
  displayName(): string;
}

class StudentClass implements studentClassInterface {
  firstName: string;
  lastName: string;

  constructor (firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomeWork(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student3 = new StudentClass('John', 'Doe');
console.log(student3.workOnHomeWork());
console.log(student3.displayName());
