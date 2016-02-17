'use strict';

function CustomError(message) {
    this.name = this.constructor.name;
    this.message = message;

    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    } else {
        this.stack = (new Error()).stack;
    }
}

CustomError.prototype = Object.create(Error.prototype);
CustomError.prototype.constructor = CustomError;

function PropertyError(property) {
    CustomError.call(this, `Property '${property}' missed`);
    this.property = property;
}

PropertyError.prototype = Object.create(CustomError.prototype);
PropertyError.prototype.constructor = PropertyError;

function PropertyRequiredError(property) {
    PropertyError.call(this, property);
    this.message = `Property '${property}' is required`;
}

PropertyRequiredError.prototype = Object.create(PropertyError.prototype);
PropertyRequiredError.prototype.constructor = PropertyRequiredError;

var err = new PropertyRequiredError("age");

console.log( err instanceof PropertyRequiredError ); // true
console.log( err instanceof PropertyError ); // true
console.log( err instanceof CustomError ); // true
console.log( err instanceof Error ); // true

console.log(err.message);
