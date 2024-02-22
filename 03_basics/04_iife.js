//IIFE : Immediately Invoked Function Expressions

(()=>{
    console.log("Hello World!! I am IIFE");
})();

(function namedIife (name){
    console.log(`Hello I am a named iife by ${name}`);
})("Utkarsh");

( onemoreFunc=()=>{
    console.log("Hello");
})()


//To implement multiple IIFE in a code, make sure you explicitly end the previous iife by a ';'