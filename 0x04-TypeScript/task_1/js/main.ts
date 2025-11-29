// 1. Teacher Interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// 2. Director Interface (extends Teacher)
interface Director extends Teacher {
  numberOfReports: number;
}

// 3. Interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 4. Implementation of printTeacher
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

// 5. Interface for Student constructor
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// 6. Interface describing the Student class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// 7. StudentClass implementation
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
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

// ────────────── TESTING SECTION ──────────────

// Teacher test
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: true,
};
console.log(teacher3);

// Director test
const director1: Director = {
  firstName: "Mary",
  lastName: "Poppins",
  location: "Paris",
  fullTimeEmployee: true,
  numberOfReports: 12,
};
console.log(director1);

// printTeacher test
console.log(printTeacher("John", "Doe")); // J. Doe

// StudentClass test
const student = new StudentClass({ firstName: "Alice", lastName: "Wonder" });
console.log(student.displayName());     // Alice
console.log(student.workOnHomework());  // Currently working
