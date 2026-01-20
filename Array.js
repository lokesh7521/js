//Arrays: Collections pf itmems
/*
let heroes=["Lokesh","Harsh","Suresh","devanand"];
let age=[18,19,24,21];
console.log(heroes);
console.log(age);
console.log(age.length)
console.log(heroes.length)
console.log(typeof heroes)
console.log(typeof age)
*/



//Array Indices
/*
let heroes=["Lokesh","Harsh","Suresh","devanand"];
let age=[18,19,24,21];
console.log(heroes);
console.log(age);
console.log(age[2])
age[0]=23;
console.log(age)
*/


//Looping over an Array:
/*
let heroes=["Lokesh","Harsh","Suresh","devanand"];

for(let idx=0;idx<heroes.length;idx++){
    console.log(heroes[idx]);                  //for loop
}
*/

                          //or

/*
let heroes=["Lokesh","Harsh","Suresh","devanand"];
for(let el of heroes){
    console.log(el)
}
    */


//FOr a give array with marks of student ->[85,97,44,37,76,60] Find the average ,arkes of the entire class.
/*
let student = [85,97,44,37,76,60];
let sum=0;
for(let val of student){
    sum+=val;  // sum=sum+val;
     console.log(sum);
}
let avg=sum/student.length;
 console.log(`avg marks of the class =${avg}`);
 */


 //for a give array with price of 5 items -> [250,645,300,900,50] All items have of 10% OFF in them. Change the array to store final price after applying offer.
/*
let items=[250,645,300,900,50];
 let idx=0;
 for(let val of items){
    console.log(`value at index ${idx}=${val}`);
    idx++;
 }
    */
            //or
/*
 let items=[250,645,300,900,50];
 for(let i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]=items[i]-offer;// items[i]-=offer;

 }
 console.log(items);
 */





 //Array Methods

 //Push():add to end 
/*
 let foodItems=["potato","apple","litchi","tomato"]
 foodItems.push("chips");
 console.log(foodItems);
 foodItems.push("orange", "banana", "grapes");
 console.log(foodItems);
 */

//Pop():delete from end & return
/*
 let foodItems=["potato","apple","litchi","tomato"];
 console.log(foodItems);
 let deletedItm=foodItems.pop();
 console.log(foodItems);
 console.log(deletedItm);
*/
 
 //toString(): converts array to string
 /*
 let foodItems=["potato","apple","litchi","tomato"];
 let marks=[97,86,54,36];
 console.log(foodItems);
 console.log(foodItems.toString());
 console.log(foodItems);
 console.log(marks);
 console.log(marks.toString());
 */



 //Concat(): joins multiple arrays & returns result.
 /*
 let marvel_heroes=["thor","spiderman","ironman"];
 let dc_heroes=["superman","batman"];
 let self_hero=["father"]
 let heroes= marvel_heroes.concat(dc_heroes,self_hero);
 console.log(heroes);
*/


//unshift()": add to start(work related to push but add in starting)
/*
let marvel_heroes=["thor","spiderman","iroman"];
let hero=marvel_heroes.unshift("antman","lokesh");
console.log(hero)
console.log(marvel_heroes)
*/


//shift():delete from strart & returnv(work related to push but delete in starting)
/*
let marvel_heroes=["thor","spiderman","iroman"];
let hero=marvel_heroes.shift();
console.log(hero)
console.log(marvel_heroes);
*/

//slice(): returns a pirce of the array
/*
let marvel_heroes=["thor","spiderman","iroman","lokesh","mukesh"];
console.log(marvel_heroes);
console.log(marvel_heroes.slice(1,3))
console.log(marvel_heroes.slice(3))
console.log(marvel_heroes.slice(2,))
console.log(marvel_heroes.slice())
*/


//Splice():Change originalarray(add,remove replsce)

//syntex: splice(startldx,deCount,newEl1...)
/*
let marks=[1,2,3,4,5,6,7];
console.log(marks.splice(2,2,0,1));
console.log(marks);
console.log(marks.splice(2,1));
console.log(marks);
*/