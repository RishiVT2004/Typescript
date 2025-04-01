/*
even though js allows us to store different value in a an array 
it is better to only store one type of data in an array 
*/

var arr1 : number[] = [1,2,3]
var arr2 : string[] = ['a','b','c']
var arr3 : number[][] = [[1,2,3],[4,5,6]]
var arr4 : number[] = [] // empty array 

// tuple -> fixed len array with defined val for each position in array 

const tup1 : [number,string] = [1,"rishi"] // 0th indx always store number and 1st index always store string 
console.log(tup1)

// tuple in an array 
const tup2 : [number,number][] = [[0,1],[2,3]] // storing tuple within an array 
console.log(tup2)