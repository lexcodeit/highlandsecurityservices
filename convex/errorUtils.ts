export class CustomError extends Error {
    constructor(message: string) {
        super(message); // Set the error message
        this.name = "Highland Security Admin Error"; // Set the error name

        // Correct the prototype chain
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
