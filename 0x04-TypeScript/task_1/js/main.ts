// main.ts

// Teacher Interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  [key: string]: any;
}

// Director Interface
interface Director extends Teacher {
  numberOfReports: number;
}

// Interface for printTeacher function
interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// printTeacher implementation (ALX EXACT REQUIREMENT)
const printTeacher: printTeacherFunction = (teacher) => {
  return `${teacher.firstName[0]}. ${teacher.lastName}`;
};

// Test Teacher object
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Test Director object
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Test printTeacher function
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); 
// Output: "J. Doe"
