// Interface is a structure thatallows computer to enforce certainn properties to an object of class
interface Person{
    name : string;
    age : number;
    height?:number; // optional property 
    // adding function in interface
    showAge ?: () => void;
}

const p1 : Person = {
    name : "rishi",
    age : 20,
    showAge : function(){
        console.log('age is : ',this.age);
    }
}

p1.showAge?.(); // p1.showAge?.(); is safer in case showAge is undefined.

// emp inherits all properties of Person and adds its own properties in it 
interface Emp extends Person{
    empID : number,
    dept : string
}

const emp1 : Emp = {
    name : "ABC",
    age : 25,
    empID : 10201,
    dept : "sales"
}

interface Manager extends Emp{
    employee : Person[];
}

// passing interface in functions 
function getName(p : Person) : string {
    return p.name;
}

console.log(getName(p1));