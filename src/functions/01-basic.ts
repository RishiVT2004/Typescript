function product(x : number , y : number) : number{
    return x*y 
}

const res = product(1,2)
console.log(res)

/*

function <function-name>(variable : parameters) returntype : type {
    return type
}
*/

function division(x : number , y : number) : number | string {
    if(y == 0){
        return "invalid denominator"
    }
    return x/y;
}

console.log(division(10,0))
console.log(division(5,2))

/*
if a dunctiojn is of the format 
function f(a : number,b : number) : number {

}
then we have to pass 2 parameters while calling f() , if not it gves an error

* to make an parameter optional use ? parameter 
* also , all oprional paramter must me declared after the permanent parameters 

*/

function name(first : string , last : string ,  middle ?: string ){
    if(typeof middle == "undefined" || middle == undefined){
        return first+" "+last
    }
    return first+" "+middle+" "+last
}
/*
This TypeScript function name takes three parameters: first, last, and an optional middle. 
If middle is not provided (i.e., undefined), it returns "first last".
Otherwise, it returns "first middle last". 
The function is tested with two cases: one without middle and one with middle.
*/

console.log(name("rishi","mishra")) // rishi mishra 
console.log(name("rishi","mishra","vatsal")) // rishi vatsal mishra 


// default paarameter 
function add(a : number , b = 2) : number {
    return a + b
}
// here b is set to 2 , hence it has a default value 2
console.log(add(10,1)) // 11 , b is overwritten 
console.log(add(10)) // 12, b is set to 2 
export {};