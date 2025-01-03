interface Teacher {
  readonly firstName: string; // readonly ensures it can only be set during initialization
  readonly lastName: string; // readonly ensures it can only be set during initialization
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow dynamic attributes
}

const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => `${firstName[0]}. ${lastName}`;

console.log(printTeacher("john", "doe"));

// Interface describing the class functionality (includes properties and methods)
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string; // Method to indicate working on homework
  displayName(): string; // Method to display the first name
}
// Interface describing the constructor of the class
interface StudentClassConstructorInterface {
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

function createStudent(
  cStudent: StudentClassConstructorInterface,
  firstName: string,
  lastName: string
): StudentClassInterface {
  return new cStudent(firstName, lastName);
}

const student1 = createStudent(StudentClass, "mike", "tyson");
console.log(student1);
