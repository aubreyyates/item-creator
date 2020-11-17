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

Functions become methods for the class when passed through classFunctions.

You can use the keyword "this" in the function you pass.

For example:

```js
var itemCreator = require('item-creator');

function printGreeting() {
    console.log(`Hello! My name is ${this.name}. My age is ${this.age}.`);
}

itemCreator.itemCreator({ globalObject: global, className: 'User', classParameters: ['id', 'name', 'age'], classFunctions: [printGreeting] });

let user1 = new User(1, 'James Jackson', 43);

user1.printGreeting(); // Prints: Hello! My name is James Jackson. My age is 43.
```

You can run these methods in the constructor if you want them to run when the "new" keyword is used.

You can pass them through constructorFunctions.

For example:

```js
var itemCreator = require('item-creator');

function calculateArea() {
    console.log(this.height * this.width);
}

itemCreator.itemCreator({ globalObject: global, className: 'Square', classParameters: ['height', 'width'], classFunctions: [calculateArea], constructorFunctions: [calculateArea] });

let square = new Square(40, 50); // Prints: 2000
```

We didn't have to call square.calculateArea() to print 2000 because it was called in the constructor.

Make sure to add a function to classFunctions if you are going to add it to constructorFunctions or it will not work.
