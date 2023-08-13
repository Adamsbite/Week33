// 
const myVar = "123";

const school = {
    "name": "One school",
    "address": "address of my school",
    "no_of_staff": 35,
    "no_of_students": 1004,
    "year_of_establishment": 1932
}

class Calculator {
    constructor() { }

    addition(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }

    subtraction(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }

    multiplication(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    }
    division(firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    }

    aggregate() {
        return "This is an aggregate function";
    }

    eclidian() {
        return "This is an ecluidian function";
    }

    mean() {
        return "This is a mean function";
    }

    median() {
        return "This is a median function";
    }

    standardDeviation() {
        return "This is a standard deviation function";
    }
}

export { Calculator };

// function addition(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }

// function subtraction(firstNumber, secondNumber) {
//     return firstNumber - secondNumber;
// }

// function multiplication(firstNumber, secondNumber) {
//     return firstNumber * secondNumber;
// }

// function division(firstNumber, secondNumber) {
//     return firstNumber / secondNumber;
// }

// function aggregate() {
//     return "This is an aggregate function";
// }

// function eclidian() {
//     return "This is an ecluidian function";
// }

// function mean() {
//     return "This is a mean function";
// }

// function median() {
//     return "This is a median function";
// }

// function standardDeviation() {
//     return "This is a standard deviation function";
// }

// export { addition, subtraction, multiplication, division, school };