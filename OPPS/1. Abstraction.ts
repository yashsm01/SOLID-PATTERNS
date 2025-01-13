// Abstraction:
// deff: Abstraction is the concept of hiding the implementation details
//       and showing only the essential features of the object.
// Concept:
//  - Abstraction hides implementation details and shows only the essential features.
//  - Achieved using abstract classes or interfaces.
// Use:
//  - Promotes clean code by separating interface from implementation.
//  - Makes code flexible for future changes.

// Abstract class Vehicle
abstract class Vehicle {
  protected type: string;

  // Constructor to initialize the type of vehicle
  constructor(type: string) {
    this.type = type;
  }

  // Abstract method (to be implemented by derived classes)
  abstract move(): void;

  // Common method for all vehicles
  public describe(): void {
    console.log(`This is a ${this.type}.`);
  }
}

// Car class extends Vehicle
class Car extends Vehicle {
  constructor() {
    // Calls the parent class constructor with "Car" as the type
    super("Car");
  }

  // Implements the abstract move method
  public move(): void {
    console.log("The car drives on roads.");
  }
}

// Airplane class extends Vehicle
class Airplane extends Vehicle {
  constructor() {
    // Calls the parent class constructor with "Airplane" as the type
    super("Airplane");
  }

  // Implements the abstract move method
  public move(): void {
    console.log("The airplane flies in the sky.");
  }
}

// Create instances of Car and Airplane
const myCar = new Car();
const myAirplane = new Airplane();

// Call describe and move methods on Car instance
myCar.describe(); // This is a Car.
myCar.move(); // The car drives on roads.

// Call describe and move methods on Airplane instance
myAirplane.describe(); // This is an Airplane.
myAirplane.move(); // The airplane flies in the sky.

// Output:
// This is a Car.
// The car drives on roads.
// This is an Airplane.
// The airplane flies in the sky.
