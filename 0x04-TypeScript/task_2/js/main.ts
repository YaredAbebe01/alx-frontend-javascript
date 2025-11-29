// Interface for the constructor of the class
interface DirectorConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the class
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Class DirectorClass implementing DirectorInterface
class DirectorClass implements DirectorInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: DirectorConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// TESTING
const director = new DirectorClass({ firstName: "John", lastName: "Doe" });

console.log(director.workFromHome());
console.log(director.getCoffeeBreak());
console.log(director.workDirectorTasks());
