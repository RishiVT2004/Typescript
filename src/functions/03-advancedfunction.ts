// 1. res parameter -> a function which can take any no. of parameters 
// array type needed 

function sum(...a : number[]){
    let count = 0;
    for(let i = 0;i<a.length;i++){
        count += a[i];
    }
    console.log(count);
} 

sum(1,2,3);
sum(10);
sum(1,2,3,4,5)

function prod(message : string,...a : number[]){
    let count = 1;
    for(let i = 0;i<a.length;i++){
        count *=a[i];
    }
    console.log(message+" : "+count);
} 

prod("product is ",1,2,3);


// 2. function accepting multiple type of inputs 
// issue with union -> performing typecasting while operating on inputs
// union type allows all combination of input to be accepted , eg : a : number | string , b : number | string 
// however we may fant a function which only accepts 2 number or 2 strings 

// OVERLOAD FUNCTIONS

function getLength(name : string) : number; // type1
function getLength(name : string[]) : number; // type2
function getLength(name : unknown) : number{ // implementation 
    if(typeof name == "string"){
        return name.length;
    }
    else if(Array.isArray(name)){
        return name.length;
    }
    return -1;
}

console.log(getLength("rishi"));
console.log(getLength(["rishi","vatsal","mishra"]));
/*
Function overloading lets you define multiple ways a function can be used.

You provide multiple type signatures and a single implementation.

TypeScript uses the overloads for type checking during compilation, and the implementation for runtime logic.
*/