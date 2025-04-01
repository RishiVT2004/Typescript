// any -> tells compiler to ignore type checking for a var 

let x : any = 1
let y : unknown = 1; // when we dont know type of y 

if(typeof y == "number"){ // recasting type onto var 
    console.log('number')
}
if(typeof y == "string"){
    console.log('string')
}
//typecasting 

let z : unknown = 1;

const res = (x as number) + 1
console.log(res)

