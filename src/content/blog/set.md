---
title: 'Set and WeakSet'
description: ''
pubDate: 'Oct 6 2015'
---

# Set and WeakSet - Efficient Collection of Unique Values in JavaScript

Set and WeakSet are powerful collection objects introduced in ECMAScript 2015 (ES6) that allow you to store and manage unique values. With Set and WeakSet, you can efficiently handle scenarios where uniqueness matters, such as filtering duplicates or tracking object references. In this technical blog post, we explore the features and usage of Set and WeakSet in JavaScript, along with best practices for their effective implementation.

## Introduction to Set and WeakSet

Set and WeakSet are built-in objects that provide a collection of unique values, either of primitive types or object references. They ensure that each value appears only once in the collection, eliminating duplicates. Set is strong in terms of maintaining references, while WeakSet offers a weak reference to objects, allowing them to be garbage-collected when no longer in use.

## Creating and Managing Sets

### Creating a Set

You can create a new Set using the `new Set()` constructor. The Set can contain values of any type.

```javascript
const set = new Set();
```

### Adding and Deleting Values

To add a value to a Set, use the `add()` method. This ensures the value is unique within the Set.

```javascript
set.add('value');
```

To delete a value from a Set, use the `delete()` method.

```javascript
set.delete('value');
```

### Checking Value Existence

To check if a value exists in a Set, you can use the `has()` method.

```javascript
set.has('value'); // Returns true or false
```

### Iterating Over a Set

You can iterate over the values in a Set using either the `for...of` loop or the `forEach()` method.

```javascript
for (const value of set) {
    console.log(value);
}

set.forEach((value) => {
    console.log(value);
});
```

## Creating and Managing WeakSets

### Creating a WeakSet

You can create a new WeakSet using the `new WeakSet()` constructor. The WeakSet can only contain object references.

```javascript
const weakSet = new WeakSet();
```

### Adding and Deleting Object References

To add an object reference to a WeakSet, use the `add()` method. This ensures the reference is unique within the WeakSet.

```javascript
weakSet.add(object);
```

To delete an object reference from a WeakSet, use the `delete()` method.

```javascript
weakSet.delete(object);
```

### Checking Object Reference Existence

Due to weak references, WeakSets do not support the `has()` method. Instead, you can use custom techniques to determine reference existence.

## Best Practices for Sets and WeakSets

Consider the following best practices when working with Sets and WeakSets in JavaScript:

### Sets

-   **Uniqueness**: Utilize Sets when you need to maintain a collection of unique values, avoiding duplicates.
-   **Array Conversion**: Convert a Set to an array using the `Array.from()` or spread syntax `[...set]` to perform array-specific operations.
-   **Iterating**: Iterate over a Set using `for...of` or `forEach()`, depending on your preference and use case.
-   **Performance**: Leverage Sets when checking for value existence or filtering duplicates, as they offer optimized lookup times.
-   **Reference Types**: Sets compare object references, so two different objects with the same contents will be treated as separate values.
-   **Equality Comparison**: For comparing complex objects within Sets, ensure proper equality comparison by overriding the `Set.prototype.has()` method or using custom comparison functions.

### WeakSets

-   **Object References**: Use WeakSets when you need to track object references, allowing them to be garbage-collected when no longer referenced elsewhere in your code.
-   **Garbage Collection**: WeakSets help prevent memory leaks by allowing objects to be released from memory if they are no longer referenced elsewhere.
-   **Object Existence**: Due to weak references, WeakSets cannot be iterated or checked for reference existence directly. Use other techniques to determine object reference existence.
-   **Cautious Usage**: Avoid relying solely on WeakSets for object tracking when references are also held elsewhere. WeakSets are not meant for all use cases, and proper consideration is necessary.

## Browser Support

Sets and WeakSets are supported in all modern browsers and JavaScript environments. However, for compatibility with older browsers, consider using polyfill libraries like Babel or leveraging transpilers to ensure support.

---

Set and WeakSet provide efficient ways to handle collections of unique values and object references in JavaScript. By utilizing these objects, understanding their features, and following best practices, you can streamline your code, eliminate duplicates, and effectively manage object references in your JavaScript applications.
