//Function: Block of code that performs a specifix task, can be invoked whenever needed
/*
function myFunction(){
    console.log("welcome to Apna College!");
    console.log("we are learning js:)");
}

myFunction();
*/
/*
function sum(x,y){
    console.log(x+y);
}
sum(1,3);
*/

/*
function sum(x,y){
    s=x+y;
    return s;
}
let val=sum(3,4);
console.log(val);
*/


//Arrow Functions:Cimpact way of Writing a function , syntex: const functionName=(param1,param2...)=>{ //do some work }
/*
function sum(a,b){
    return a+b;
}
const arrowSum=(a,b)=>{
    console.log(a+b);
};
console.log(arrowSum);
arrowSum(3,4);
arrowSum(6,85)

//eample:
const papa=()=>{
    console.log("Lokesh");
}
console.log(papa());
*/

//Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string.
/*
function countVowels(str){
    let count = 0;
    for(const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;    
        }
    }
     console.log(count);
}

console.log(countVowels("lokesh"));
*/




//forEach Loop in Arrays: arr.forEach(callBackFunction)
//callvackFunction:Here,it is a function to execute for each element in the array
//A callback is a function pussed as an argument to another function.
/*
let arrr=[1,2,3,4,5];
arrr.forEach(function printVal(val){
    console.log(val);
});

*/

//for a given array of numbers, print the square of each value using the forEach loop.
/*let number=[2,3,4,5];
number.forEach((num)=>{
    console.log(num*num);
});
*/








//Some More Array Methods 


//Map: Creates a new array with the results of some operation.The value ites callback returns are used to from new array.
//arr.map(callbackFnx(value,index,array))
/*
let nums=[67,52,39];
let newArr=nums.map((val)=>{
    return val+5;     
   
})
 console.log(newArr);
 */



 //Filter: Create a new array of elements that give true for a condition / filter.

 //Eg. all even elements
/*
 let arr=[1,2,3,4,5,6,7,8];
 let evenArr=arr.filter((val)=>{
    return val%2==0;
 });
 console.log(evenArr);
 */


 //Reduce: Performs some operations & reducs the array to a single value. it returns that single value.
 /*
 let arr=[1,2,3,4];

const output=arr.reduce((res,curr)=>{
    return res+curr   //res=result(pre=previousValue), curr=currentValue

 });
 console.log(output)
*/


//