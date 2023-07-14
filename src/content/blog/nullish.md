---
title: 'Nullish Coalescing Operator '
description: ''
pubDate: 'Jul 19 2020'
---

# Nullish Coalescing Operator - Handling Default Values for Nullish Values

The Nullish Coalescing operator (??), introduced in ECMAScript 2020, is a handy feature in JavaScript that allows you to provide default values for nullish values. With the Nullish Coalescing operator, you can handle scenarios where you want to assign a default value only when a variable is null or undefined, excluding other falsy values. In this technical blog post, we explore the capabilities of the Nullish Coalescing operator, its syntax, and best practices, showcasing how it simplifies default value handling in JavaScript.

## Introduction to the Nullish Coalescing Operator

The Nullish Coalescing operator provides a concise way to assign a default value to a variable when its value is null or undefined, while excluding other falsy values such as empty strings, zero, or false. It helps streamline the handling of default values in scenarios where you want to treat nullish values differently from other falsy values.

## Assigning Default Values

Traditionally, assigning default values involved using conditional checks or the logical OR operator (||). With the Nullish Coalescing operator, you can achieve the same result with a simpler syntax.

```javascript
const name = null;
const defaultName = name ?? 'John Doe';

console.log(defaultName); // Output: 'John Doe'
```

In this example, the value of `name` is null, so the Nullish Coalescing operator assigns the default value `'John Doe'` to `defaultName`. If `name` had been an empty string or another falsy value, the Nullish Coalescing operator would have preserved it.

## Combining with Optional Chaining

The Nullish Coalescing operator pairs well with the Optional Chaining operator, allowing you to provide default values for nested properties that may be null or undefined.

```javascript
const user = {
    name: 'Alice',
    address: null,
};

const city = user.address?.city ?? 'Unknown City';

console.log(city); // Output: 'Unknown City'
```

In this example, the `address` property is null, so the Nullish Coalescing operator assigns the default value `'Unknown City'` to `city`. If `address` had been an object with a valid `city` property, the value of `city` would have been the actual city name.

## Best Practices

-   Use the Nullish Coalescing operator to handle default values for nullish values, providing more explicit control over default assignments.
-   Be aware that the Nullish Coalescing operator only checks for null or undefined values, excluding other falsy values such as empty strings, zero, or false.
-   Combine the Nullish Coalescing operator with the Optional Chaining operator to handle default values for nested properties that may be null or undefined.
-   When providing default values, consider using meaningful and descriptive defaults to ensure clarity in your code.

## Browser Support

The Nullish Coalescing operator is supported in modern browsers and JavaScript environments. However, older browsers may not support it. If compatibility with older browsers is required, consider using a transpiler like Babel or check for support using feature detection.

---

The Nullish Coalescing operator simplifies default value handling in JavaScript, allowing you to assign default values specifically for null or undefined values while excluding other falsy values. By utilizing the Nullish Coalescing operator, understanding its syntax, and following best practices, you can streamline your code and improve the clarity and robustness of your JavaScript applications.
