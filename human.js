// This is a class that tries to define a human property.
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    setName() {
        return "You have set a human called: " + this.name;
    }

    getName() {
        return this.name;
    }

    setAge() {
        return "Human age set is: " + this.age;
    }

    getAge() {
        return "Human age defined is: " + this.age;
    }

    country(cName) {
        return "Human country is: " + cName;
    }
}

new Human();

// ASSIGNMENT on CLASSES, IMPORT, EXPORT
// Define a library using this human class that allows you to define
// a complete human attribute as many as you can define.
// Simply means that I should be able to use your library to set a human
// detail and fetch that same human detail using methods defined in your
// classes.
// Build on this human class and allow me to be able to the human:
// a. firstName and lastName
// b. Age
// c. Location
// d. Country
// e. State
// f. gender
// g. occupation
