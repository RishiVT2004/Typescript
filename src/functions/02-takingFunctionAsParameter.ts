// eg 1 
function add(a : number , b : number) : number {
    return a + b
}

function sub(a : number , b : number) : number{
    return a - b;
}

function callFunc(func : (x : number , y : number) => number , a : number , b : number) : number{
    return func(a,b);
}

console.log(callFunc(add,10,20))
console.log(callFunc(sub,20,10))
/*
This code demonstrates higher-order functions in TypeScript by defining add and sub 
for basic arithmetic, and then callFunc which takes a function and two numbers,
executing the provided function with those numbers and returning the result;
the console.log(callFunc(add, 10, 20)) line showcases this by passing the 
add function to callFunc, effectively calling add(10, 20) and outputting the sum, 30, 
highlighting the ability to treat functions as arguments and dynamically execute them.
*/

// eg 2 

function mul(a : number , b : number) : number {
    return a * b
}

function div(a : number , b : number) : number{
    return a / b;
}

function applyFunc(func : ((a : number , b : number) => number)[] , values : [number,number][]) : number[]{
    const result : number[] = [];
    for (let i = 0;i<func.length;i++){
        const args = values[i]
        const res = func[i](args[0],args[1]);
        result.push(res)
    }
    return result
}
console.log(applyFunc([mul,div],[[10,20],[100,33]]));

/*
applyFunc -> input -> array of functions , array of number value 
result = array of number 
loop through all functions availiable using for loop 
args -> values at index i 

*/

function name(first : string , last : string) : string {
    return "my name is " + first + " " + last
}

function date(day : number , month : string , year : number) : string | number {
    return "my DOB is "+day+" "+month+" "+year;
}

export{};