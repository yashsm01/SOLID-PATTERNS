// Dependency Inversion Principle (DIP)
// Definition: High-level modules should not depend on low-level modules.
// Both should depend on abstractions.
// Abstractions should not depend on details. Details should depend on abstractions.
// Example:
// - Bad example: A high-level module that directly depends on a low-level module.
// - Good example: A high-level module that depends on an abstraction (interface) instead of a concrete implementation.
// - Good example: Low-level modules implementing interfaces defined by high-level modules.
//

// Define a Messenger interface with a send method
interface Messenger {
  send(message: string): void;
}

// EmailMessenger class implements the Messenger interface
class EmailMessenger implements Messenger {
  send(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

// SmsMessenger class implements the Messenger interface
class SmsMessenger implements Messenger {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

// NotificationService class depends on the Messenger interface
class NotificationService {
  constructor(private messenger: Messenger) {}

  sendNotification(message: string): void {
    this.messenger.send(message);
  }
}

// Usage
const emailService = new NotificationService(new EmailMessenger());
emailService.sendNotification("Hello via Email!"); // Output: Sending email: Hello via Email!

const smsService = new NotificationService(new SmsMessenger());
smsService.sendNotification("Hello via SMS!"); // Output: Sending SMS: Hello via SMS!

//Output:
// Sending email: Hello via Email!
// Sending SMS: Hello via SMS!

// Here, NotificationService depends on the Messenger interface,
// allowing flexibility in the implementation.

// Explanation:
// This TypeScript file demonstrates the Dependency Inversion Principle (DIP) from the SOLID principles of object-oriented design.
// The DIP states that high-level modules should not depend on low-level modules. Both should depend on abstractions.
// Abstractions should not depend on details. Details should depend on abstractions.

// Interfaces and Classes:

// 1. Messenger interface:
// - Defines a single method send() that must be implemented by any class that implements this interface.

// 2. EmailMessenger class:
// - Implements the Messenger interface and provides an implementation for the send() method to send an email.

// 3. SmsMessenger class:
// - Implements the Messenger interface and provides an implementation for the send() method to send an SMS.

// 4. NotificationService class:
// - Depends on the Messenger interface and uses it to send notifications. The specific implementation of Messenger is injected via the constructor.

// Example Usage:

// EmailMessenger:
// - Creates a new NotificationService object with an EmailMessenger and calls the sendNotification() method.
// - Output: Sending email: Hello via Email!

// SmsMessenger:
// - Creates a new NotificationService object with an SmsMessenger and calls the sendNotification() method.
// - Output: Sending SMS: Hello via SMS!
