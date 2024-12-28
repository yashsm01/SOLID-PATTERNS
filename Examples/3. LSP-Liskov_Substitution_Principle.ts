// Liskov Substitution Principle (LSP)
// Definition: Subtypes must be substitutable for their base types.
// Example:
// - Bad example: A Square class that extends a Rectangle class.
// - Good example: A Square class that does not extend Rectangle but implements a Shape interface.
// - Good example: A Bird class that extends an Animal class.
// - Good example: A Duck class that implements a Bird interface.
//

// Rectangle class represents a rectangle shape with width and height
class Rectangle {
  constructor(public width: number, public height: number) {}

  // Method to calculate the area of the rectangle
  getArea(): number {
    return this.width * this.height;
  }
}

// Square class extends Rectangle but represents a square shape
class Square extends Rectangle {
  constructor(side: number) {
    // Calls the parent class constructor with equal width and height
    super(side, side);
  }
}

// Function to print the area of a given shape (Rectangle or its subclass)
function printArea(shape: Rectangle): void {
  console.log(shape.getArea());
}

// Creating a Rectangle object with width 4 and height 5
const rectangle = new Rectangle(4, 5);

// Creating a Square object with side length 4
const square = new Square(4);

// Printing the area of the rectangle
printArea(rectangle); // 20

// Printing the area of the square
printArea(square); // 16

//The Square class can substitute the Rectangle class without breaking functionality.

// Output:
// 20
// 16

// Explanation:
// This TypeScript file demonstrates the Liskov Substitution Principle (LSP) from the SOLID principles of object-oriented design.
// The LSP states that subtypes must be substitutable for their base types. This means that objects of a superclass should be
// replaceable with objects of a subclass without affecting the correctness of the program.

// Classes and Functions:

// 1. Rectangle:
// - constructor(public width: number, public height: number): Initializes a rectangle with a given width and height.
// - getArea(): number: Calculates the area of the rectangle by multiplying its width and height.

// 2. Square (extends Rectangle):
// - constructor(side: number): Initializes a square with equal width and height by calling the Rectangle constructor with the same side length for both dimensions.

// 3. printArea(shape: Rectangle): void:
// - A function that takes a Rectangle object (or any subclass of Rectangle) and prints its area by calling the getArea method.

// Example Usage:

// Rectangle:
// - Creates a new Rectangle object with width 4 and height 5.
// - The area is calculated as 4 * 5 = 20.

// Square:
// - Creates a new Square object with side length 4.
// - The area is calculated as 4 * 4 = 16.

// Output:

// printArea(rectangle):
// - Output: 20

// printArea(square):
// - Output: 16
