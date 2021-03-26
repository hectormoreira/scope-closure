var hello = 'Hello';
var hello = 'Hello +';

let world = 'Hello world!';
let world = 'Hello ';

const helloWorld = 'Hello world!';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
anotherFunction();


//Principales errores
//Mala practica
// const helloWorld2 = () => {
//     globalVar = 'I am global';
// }

helloWorld2();
console.log(globalVar);

// mala práctica
const anotherFunction = () => {
    //var localVar = globalVar = 'Im Global';
}
anotherFunction();
console.log(globalVar);