const fruits = () => {
    if (true) {
        // scope de function
        var fruits1 = 'apple';
        //scope de bloque
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
}
fruits();


let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);


const anotherFunction = () =>{
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}
anotherFunction();
