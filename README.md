This package provides a function to help you create classes.

For example:

Let us say we want to create a class called "User".

It will get have 3 parameters we want passed to it when an instance of the class is created. These will be id, name, and age.

Getters and setters are created for all of the parameters that are put into classParameters.

```js
var itemCreator = require('item-creator');

// Set globalObject to window if in a browser.
itemCreator.itemCreator({ globalObject: global, className: 'User', classParameters: ['id', 'name', 'age'] });

var user1 = new User(1, 'Jimmy', 34);

console.log(user1.getName()); // Prints: Jimmy
console.log(user1.getAge()); // Prints: 34

user1.setName('Jake');
console.log(user1.getName()); // Prints: Jake
```

You can also add functions to the class through classFunctions.

For example:

```js
var itemCreator = require('item-creator');

function printHello() {
    console.log('Hello!');
}

itemCreator.itemCreator({ globalObject: global, className: 'User', classParameters: ['id', 'name', 'age'], classFunctions: [printHello] });

var user1 = new User(1, 'Ashley', 26);

user1.printHello(); // Prints: Hello!
```