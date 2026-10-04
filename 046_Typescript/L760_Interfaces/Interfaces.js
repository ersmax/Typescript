"use strict";
let person;
person = {
    firstName: 'Mickey',
    age: 200,
    greet() {
        console.log('Hello');
    }
};
class Instructor {
    firstName;
    age;
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    greet() {
        console.log('Hello');
    }
}
let person2 = new Instructor("Mickey", 200);
person2.greet();
