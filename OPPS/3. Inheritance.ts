// Inheritance
// Definition: Inheritance is a mechanism in which one class acquires the
//              property of another class.
// Concept:
//  - Inheritance allows one class (child) to acquire properties and methods of another class (parent).
//  - The extends keyword is used.
// Use:
//  - Promotes code reusability and establishes a parent-child relationship.

class Animal {
  protected name: string;

  // Constructor to initialize the name of the animal
  constructor(name: string) {
    this.name = name;
  }

  // Method for the animal to eat
  public eat(): void {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  // Constructor to initialize the name of the dog
  constructor(name: string) {
    super(name); // Call parent constructor
  }

  // Method for the dog to bark
  public bark(): void {
    console.log(`${this.name} is barking.`);
  }
}

// Create an instance of Dog
const myDog = new Dog("Buddy");

// Call methods on the Dog instance
myDog.eat(); // Buddy is eating.
myDog.bark(); // Buddy is barking.

// Output:
// Buddy is eating.
// Buddy is barking.

// Explanation:
// This TypeScript file demonstrates the concept of inheritance in object-oriented programming.
// Inheritance is a mechanism in which one class (child) acquires properties and methods of another class (parent).
// The extends keyword is used to establish this relationship.

// Classes and Methods:

// 1. Animal class:
// - protected name: string: A protected property to store the name of the animal.
// - constructor(name: string): Initializes the name of the animal.
// - public eat(): void: A method for the animal to eat, which logs a message to the console.

// 2. Dog class (extends Animal):
// - constructor(name: string): Initializes the name of the dog by calling the parent constructor using super(name).
// - public bark(): void: A method for the dog to bark, which logs a message to the console.

// Example Usage:

// Dog:
// - Creates a new Dog instance with the name 'Buddy'.
// - Calls the eat() method on the Dog instance. Output: Buddy is eating.
// - Calls the bark() method on the Dog instance. Output: Buddy is barking.
