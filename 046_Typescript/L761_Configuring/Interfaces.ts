interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

type HumanType = {
    firstName: string;
    age: number;

    greet: () => void;
}

let person: Human;
person = {
    firstName: 'Mickey',
    age: 200,

    greet() {
        console.log('Hello');
    }
};

class Instructor implements Human {
    constructor (
        public firstName: string, 
        public age: number) 
    {}

    greet() {
        console.log('Hello')
    }
}

let person2 = new Instructor("Mickey", 200);
person2.greet();