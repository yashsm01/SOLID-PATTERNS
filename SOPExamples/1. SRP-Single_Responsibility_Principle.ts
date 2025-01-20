// Single Responsibility Principle (SRP)
// Definition: A class (or module) should have only one reason to change. It should do one thing and do it well.
// Example:
// - Bad example: A class that is responsible for both logging and sending emails.
// - Good example: A class that is responsible for only logging.
// - Good example: A class that is responsible for only sending emails.
// - Good example: A class that is responsible for only validating user input.

class LoggerAndEmailer {
  log(message: string) {
    console.log(message);
  }

  sendEmail(email: string, message: string) {
    // logic to send email
    console.log(`Email sent to ${email} with message: ${message}`);
  }
}

// Good example: A class that is responsible for only logging.
class Logger {
  log(message: string) {
    console.log(message);
  }
}

// Good example: A class that is responsible for only sending emails.
class Emailer {
  sendEmail(email: string, message: string) {
    // logic to send email
    console.log(`Email sent to ${email} with message: ${message}`);
  }
}

// Good example: A class that is responsible for only validating user input.
class UserInputValidator {
  validateEmail(email: string): boolean {
    // logic to validate email
    return /\S+@\S+\.\S+/.test(email);
  }

  validatePassword(password: string): boolean {
    // logic to validate password
    return password.length >= 8;
  }
}

// Example usage:
const logger = new Logger();
logger.log("This is a log message."); // Output: This is a log message.

const emailer = new Emailer();
emailer.sendEmail("test@example.com", "Hello"); // Output: Email sent to test@example.com with message: Hello

const validator = new UserInputValidator();
console.log(validator.validateEmail("test@example.com")); // Output: true
console.log(validator.validatePassword("password123")); // Output: true

//The User class handles user data, while emailer is responsible for sending emails.
