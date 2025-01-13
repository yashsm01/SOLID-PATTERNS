// Polymorphism
// Definition: Poly means many and morphism means forms. Polymorphism is a
//              feature of OOP that allows us to perform a single action in
//              different ways.
// Concept:
//  - Polymorphism means "many forms." It allows methods to behave differently based on the object that calls them.
//  - Achieved via method overriding or interfaces.
// Use:
//  - Simplifies complex code by using common methods across different objects.

abstract class Shape {
  // Abstract method (must be implemented by derived classes)
  abstract area(): number;
}

class Circle extends Shape {
  private radius: number;

  // Constructor to initialize the radius of the circle
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  // Implements the abstract area method for Circle
  public area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rect extends Shape {
  private width: number;
  private height: number;

  // Constructor to initialize the width and height of the rectangle
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  // Implements the abstract area method for Rect
  public area(): number {
    return this.width * this.height;
  }
}

// Create an array of shapes (Circle and Rectangle)
const shapes: Shape[] = [new Circle(10), new Rect(5, 20)];

// Iterate over the shapes array and print the area of each shape
shapes.forEach((shape) => console.log(`Area: ${shape.area()}`));

// Output:
// Area: 314.1592653589793
// Area: 100

// Explanation:
// This TypeScript file demonstrates the concept of polymorphism in object-oriented programming.
// Polymorphism is a feature of OOP that allows us to perform a single action in different ways.
// It allows methods to behave differently based on the object that calls them.

// Classes and Methods:

// 1. Shape (abstract class):
// - abstract area(): number: An abstract method that must be implemented by any class that extends Shape.

// 2. Circle (extends Shape):
// - private radius: number: A private property to store the radius of the circle.
// - constructor(radius: number): Initializes the radius of the circle.
// - public area(): number: Implements the abstract area method for Circle, calculating the area using the formula πr².

// 3. Rectangle (extends Shape):
// - private width: number: A private property to store the width of the rectangle.
// - private height: number: A private property to store the height of the rectangle.
// - constructor(width: number, height: number): Initializes the width and height of the rectangle.
// - public area(): number: Implements the abstract area method for Rectangle, calculating the area using the formula width * height.

// Example Usage:

// shapes:
// - Creates an array of shapes containing a Circle with radius 10 and a Rectangle with width 5 and height 20.
// - Iterates over the shapes array and prints the area of each shape using the area method.

// Output:

// Area: 314.1592653589793
// Area: 100
