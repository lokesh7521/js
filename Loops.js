//Loops:
/*
for(let i=1;i<=5;i++){
    console.log("Hello Lokesh");
}
sum=0;
for(let i=1;i<=5;i++){
    
    
    sum=sum+i;
   
}
console.log(sum);
*/

//while loop
/*
let i=1;
while(i<=5){
    console.log(i);
    i++;
}*/

//do-while Loop 
/*
let i=20;
do{
    console.log("Lokesh Kumawat");
    i++;
} while(i<=10);*/


//for-of loop
/*
let str="ÄppnaCollage";
let size=0;
for(let val of str){
    console.log("val=",val);
    size++;
}
console.log("string size=",size);
*/


//for-in loop
/*let student={

    name:"Lokesh Kumawat",
    age:20,
    cgpa:6.5,
    isPass:true,
};
for(let key in student){
    console.log("key=",key,"value=",student[key]);
}*/


//print all even numbers from 0 to 100.
/*
for(let i=0;i<=100;i++){
    if(i%2===0){
    console.log("i=",i);
    }
}*/


// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters corrects value.
/*
let gameNum=25;

let userNum=prompt("Guess the game number :");
while(userNum != gameNum) {
    userNum=prompt("you entered wrong number. Guess again: ");
}
console.log("congratualtions, you entered the right number");
*/