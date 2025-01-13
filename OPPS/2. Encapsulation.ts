// Encapsulation
// Definition: Encapsulation is the bundling of data (properties) and methods
// (functions) into a single unit (class) while restricting direct
// access to some components.
// Concept:
// - Encapsulation bundles data (properties) and methods (functions) into a single unit (class) while restricting direct access to some components.
// - It ensures controlled access using access modifiers (private, protected, public).
// Use:
// - Protects object integrity by exposing only necessary details.
// - Enables validation and encapsulated logic for data manipulation.

class BankAccount {
  // Private property to store the balance
  private _balance: number;

  // Constructor to initialize the balance
  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  // Public method to deposit money into the account
  public deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited: ${amount}, New Balance: ${this._balance}`);
    } else {
      console.error("Deposit amount must be positive!");
    }
  }

  // Public method to withdraw money from the account
  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      console.log(`Withdrew: ${amount}, Remaining Balance: ${this._balance}`);
    } else {
      console.error("Invalid withdrawal amount!");
    }
  }

  // Public getter to access the balance
  public get balance(): number {
    return this._balance; // Controlled access to private property
  }
}

// Create a new BankAccount instance with an initial balance of 500
const myAccount = new BankAccount(500);

// Deposit 200 into the account
myAccount.deposit(200); // Output: Deposited: 200, New Balance: 700

// Withdraw 100 from the account
myAccount.withdraw(100); // Output: Withdrew: 100, Remaining Balance: 600

// Log the current balance
console.log(myAccount.balance); // Output: 600

// Output:
// Deposited: 200, New Balance: 700
// Withdrew: 100, Remaining Balance: 600
// 600

// Explanation:
// This TypeScript file demonstrates the concept of encapsulation in object-oriented programming.
// Encapsulation is the bundling of data (properties) and methods (functions) into a single unit (class)
// while restricting direct access to some components. It ensures controlled access using access modifiers
// (private, protected, public).

// Classes and Methods:

// 1. BankAccount class:
// - private _balance: number: A private property to store the balance of the account.
// - constructor(initialBalance: number): Initializes the balance with the given initial balance.
// - public deposit(amount: number): void: A public method to deposit money into the account. It validates the amount and updates the balance.
// - public withdraw(amount: number): void: A public method to withdraw money from the account. It validates the amount and updates the balance.
// - public get balance(): number: A public getter to access the balance. It provides controlled access to the private _balance property.

// Example Usage:

// BankAccount:
// - Creates a new BankAccount instance with an initial balance of 500.
// - Deposits 200 into the account. Output: Deposited: 200, New Balance: 700
// - Withdraws 100 from the account. Output: Withdrew: 100, Remaining Balance: 600
// - Logs the current balance. Output: 600
