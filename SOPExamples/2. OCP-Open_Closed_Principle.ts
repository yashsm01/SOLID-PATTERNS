// Open/Closed Principle (OCP)
// Definition: Software entities (classes, modules, functions, etc.) should be open for extension
// but closed for modification.
// Example:
// - Bad example: A class that requires modification every time a new feature is added.
// - Good example: A class that can be
// extended to add new features without modifying existing code.
//

// abstract use: The abstract keyword is used to define abstract classes and methods in TypeScript.
// what does it mean by abstract class: An abstract class is a class that cannot be instantiated directly.
abstract class Discount {
  // Abstract method that must be implemented by subclasses
  abstract calculate(price: number): number;
}

class SeasonalDiscount extends Discount {
  // Implements the calculate method to apply a 10% discount
  calculate(price: number): number {
    return price * 0.9; // 10% off
  }
}

class BlackFridayDiscount extends Discount {
  // Implements the calculate method to apply a 30% discount
  calculate(price: number): number {
    return price * 0.7; // 30% off
  }
}

// Function to get the price after applying the discount
function getPrice(discount: Discount, price: number): number {
  return discount.calculate(price);
}

// Example usage and output
console.log(getPrice(new SeasonalDiscount(), 100)); // 90
console.log(getPrice(new BlackFridayDiscount(), 100)); // 70

// Output:
// 90
// 70

//Adding new discount types does not require modifying existing code, adhering to OCP.
// The Discount class is open for extension but closed for modification.
