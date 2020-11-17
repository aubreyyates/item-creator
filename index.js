function itemCreator({ globalObject, className, classParameters = [], classFunctions = [], constructorFunctions = [] } = {}) {

    if (typeof className != 'string') return console.log("You need a string for className. No class created.");
    if (!(classParameters instanceof Array)) return console.log("You need an array for classParameters. No class created.");
    if (!(classParameters instanceof Array)) return console.log("You need an array for classFunctions. No class created.");
    if (!(constructorFunctions instanceof Array)) return console.log("You need an array for constructorFunctions. No class created.");
    if (!constructorFunctions.every(v => classFunctions.includes(v))) return console.log("All functions in constructorFunctions must also be in classFunctions. No class created.");



    let parameters = '';
    let constructor = '';

    // Set up the string for the parameters and contructor.
    classParameters.forEach((parameter, i) => {
        if (i < (classParameters.length - 1)) {
            parameters += (parameter + ', ');
        } else {
            parameters += parameter;
        }

        constructor += `this.${parameter}=${parameter};`;
    });

    // Add methods to be ran in the contructor.
    constructorFunctions.forEach(constructorFunction => {
        constructor += `this.${constructorFunction.name}();`;
    });

    // Create the class.
    let classCreator = new Function(`return function(${parameters}) {${constructor}}`)();
    globalObject[className] = classCreator;

    // Create setters and getters for each parameter.
    classParameters.forEach(parameter => {
        let param = parameter.charAt(0).toUpperCase() + parameter.slice(1);

        globalObject[className].prototype["set" + param] = function (setter) {
            this[parameter] = setter;
        }

        globalObject[className].prototype["get" + param] = function () {
            return this[parameter];
        }
    });

    // Create method named getClassName to return the name of the class.
    globalObject[className].prototype["getClassName"] = function () {
        return className;
    };

    // Add classFunctions to the class to make methods.
    classFunctions.forEach(classFunction => {
        globalObject[className].prototype[classFunction.name] = classFunction;
    });

}

if (typeof module !== 'undefined') module.exports.itemCreator = itemCreator;
