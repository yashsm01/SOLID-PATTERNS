// Interface Segregation Principle (ISP)
// Definition: Interfaces should be specific to the needs of the client and not force them to implement unused methods.
// Example:
// - Bad example: An interface with multiple methods that are not needed by all clients.
// - Good example: Splitting the interface into smaller, more specific interfaces.
// - Good example: Using default methods in interfaces to provide default behavior.
// - Good example: Implementing multiple interfaces to avoid implementing unnecessary methods.
//

// Define a Printer interface with a print method
interface Printer {
  print(): void;
}

// Define a Scanner interface with a scan method
interface Scanner {
  scan(): void;
}

// BasicPrinter class implements the Printer interface
class BasicPrinter implements Printer {
  print(): void {
    console.log("Printing document...");
  }
}

// AllInOnePrinter class implements both Printer and Scanner interfaces
class AllInOnePrinter implements Printer, Scanner {
  print(): void {
    console.log("Printing document...");
  }

  scan(): void {
    console.log("Scanning document...");
  }
}

// Usage
const basicPrinter = new BasicPrinter();
basicPrinter.print(); // Output: Printing document...

const allInOnePrinter = new AllInOnePrinter();
allInOnePrinter.print(); // Output: Printing document...
allInOnePrinter.scan(); // Output: Scanning document...

//Output:
// Printing document...
// Printing document...
// Scanning document...

//By segregating interfaces, classes only implement the functionalities they need.

// Explanation:
// This TypeScript file demonstrates the Interface Segregation Principle (ISP) from the SOLID principles of object-oriented design.
// The ISP states that interfaces should be specific to the needs of the client and not force them to implement unused methods.
// This means that a class should not be forced to implement methods it does not use.

// Interfaces and Classes:

// 1. Printer interface:
// - Defines a single method print() that must be implemented by any class that implements this interface.

// 2. Scanner interface:
// - Defines a single method scan() that must be implemented by any class that implements this interface.

// 3. BasicPrinter class:
// - Implements the Printer interface and provides an implementation for the print() method.

// 4. AllInOnePrinter class:
// - Implements both Printer and Scanner interfaces and provides implementations for both print() and scan() methods.

// Example Usage:

// BasicPrinter:
// - Creates a new BasicPrinter object and calls the print() method.
// - Output: Printing document...

// AllInOnePrinter:
// - Creates a new AllInOnePrinter object and calls both the print() and scan() methods.
// - Output: Printing document...
// - Output: Scanning document...
