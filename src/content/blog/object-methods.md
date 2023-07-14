---
title: 'Object Methods'
description: ''
pubDate: 'Dec 27 2015'
---

# Object Methods - Efficient Object Manipulation in JavaScript

Object methods in JavaScript offer a wide range of functionalities for working with objects, enabling efficient object manipulation, property access, iteration, and more. With these built-in methods, you can perform common object operations and leverage the power of objects in your JavaScript code. In this technical blog post, we explore the object methods available in JavaScript, their syntax, and best practices, showcasing how they empower efficient object manipulation.

## Introduction to Object Methods

Object methods in JavaScript are built-in functions that are accessible on all object instances. These methods allow you to perform various operations on objects, including property access, property manipulation, iteration, cloning, and more. Understanding and utilizing these methods can significantly enhance your ability to work with objects effectively.

## Commonly Used Object Methods

Let's explore some commonly used object methods:

-   `Object.keys()`: Returns an array of an object's own enumerable property names.
-   `Object.values()`: Returns an array of an object's own enumerable property values.
-   `Object.entries()`: Returns an array of an object's own enumerable property key-value pairs.
-   `Object.assign()`: Copies the values of all enumerable properties from one or more source objects to a target object.
-   `Object.freeze()`: Freezes an object, preventing the addition, deletion, or modification of its properties.
-   `Object.seal()`: Seals an object, preventing the addition or deletion of its properties while allowing property value modification.
-   `Object.create()`: Creates a new object with the specified prototype object and properties.
-   `Object.hasOwnProperty()`: Checks if an object has a specified property as its own property (excluding prototype chain).
-   `Object.is()`: Determines whether two values are the same value.
-   `Object.getPrototypeOf()`: Returns the prototype of an object.
-   `Object.setPrototypeOf()`: Sets the prototype (i.e., the internal `[[Prototype]]` property) of an object.

## Examples of Object Methods

Let's see some examples of using these object methods:

```javascript
const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Developer',
};

console.log(Object.keys(person)); // Output: ['name', 'age', 'occupation']

console.log(Object.values(person)); // Output: ['John Doe', 30, 'Developer']

console.log(Object.entries(person)); // Output: [['name', 'John Doe'], ['age', 30], ['occupation', 'Developer']]

const target = {};
Object.assign(target, person);
console.log(target); // Output: { name: 'John Doe', age: 30, occupation: 'Developer' }

const frozenPerson = Object.freeze(person);
person.name = 'Jane Doe'; // Ignored in strict mode, throws an error in non-strict mode
console.log(person); // Output: { name: 'John Doe', age: 30, occupation: 'Developer' }

const sealedPerson = Object.seal(person);
delete person.occupation; // Ignored
person.age = 40; // Allowed
console.log(person); // Output: { name: 'John Doe', age: 40 }

const newObj = Object.create(person);
console.log(newObj); // Output: {}

console.log(person.hasOwnProperty('name')); // Output: true

console.log(Object.is(10, 10)); // Output: true

console.log(Object.getPrototypeOf(person)); // Output: {}

Object.setPrototypeOf(person, { greeting: 'Hello' });
console.log(person.greeting); // Output: 'Hello'
```

## Best Practices

When working with object methods in JavaScript, it is essential to follow these best practices:

-   **Consistency**: Be consistent in your usage of object methods throughout your codebase to ensure readability and maintainability.
-   **Data Encapsulation**: Leverage methods like `Object.freeze()` or `Object.seal()` to protect your objects from unwanted modifications, ensuring data integrity.
-   **Property Access**: Use `Object.keys()`, `Object.values()`, or `Object.entries()` to access an object's properties in a structured and iterable manner.
-   **Property Manipulation**: Utilize `Object.assign()` to merge multiple objects or clone existing ones while preserving immutability.
-   **Prototype Management**: Use `Object.create()`, `Object.getPrototypeOf()`, and `Object.setPrototypeOf()` for effective prototype management and object inheritance.
-   **Property Checking**: Employ `Object.hasOwnProperty()` to check if a property exists directly on an object, excluding properties inherited from the prototype chain.
-   **Equality Checking**: Consider using `Object.is()` for precise equality checks between values, especially for special values like `NaN` and `-0`.

## Browser Support

Object methods are supported in all modern browsers and JavaScript environments. However, for compatibility with older browsers, consider using polyfill libraries like Babel or leveraging transpilers to ensure support.

---

Object methods in JavaScript offer a robust toolkit for efficient object manipulation, property access, and iteration. By utilizing these methods, understanding their syntax, and following best practices, you can optimize your code, improve data integrity, and leverage the full power of objects in your JavaScript applications.
