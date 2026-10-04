interface Human {
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
    },
};
