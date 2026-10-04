// Generics

function insertAtBeginning(array: any[], value: any) {
   const newArray = [value, ...array];
   return newArray; 
}
function insertAtBeginningNumber(array: number[], value: number) {
   const newArray = [value, ...array];
   return newArray; 
}
function insertAtBeginningGenerics<T>(array: T[], value: T) {
   const newArray = [value, ...array];
   return newArray; 
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
updatedArray[0].split('');       // okay

const updatedArrayNumber = insertAtBeginningNumber(demoArray, -1); // [-1, 1, 2, 3]
// updatedArrayNumber[0].split(''); // error due to type: number[]

const stringArray = ['World'];
const updatedArrayGenerics = insertAtBeginningGenerics(stringArray, 'Hello');
updatedArray[0].split('');

