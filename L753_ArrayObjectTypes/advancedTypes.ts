let hobbies: string[];
hobbies = ['Sports', 'Cooking'];
let scores: number[];
scores = [10, 2, 99];
let cars: ["Opel", "Dacia"];

// Bad practice: it turns to plain JS
let person: any;
person = {
    name: 'Max',
    age: 32,
};

// Good practice: the type of variable is defined
let goodPerson: {
    name: string;
    age: number;
};
goodPerson = {
    name: 'Max',
    age: 30,
}

let goodPeople: {
    name: string;
    age: number;
}[];