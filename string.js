//String: String is a sequence of characters used to represent text.
//create string :
/*let str="AppnaCollege";
let str2='Lokesh Kumawat';*/
//string leangth
/*
let str="AppnaCollege";
console.log(str);
console.log(str.length);
*/
//string indices
/*
let str="AppnaCollege";
console.log(str[1]);
console.log(str[1],str[2]);
*/


//Template Literals in js
/* 
let specialString = `This is a template`;
console.log(specialString);
console.log(typeof specialString);
*/

//String Interpolation: `${expression}`
//Example
/*
let obj={
    item:"pen",
    price:10
};
let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
                      //or
console.log("the cost of ",obj.item, "is", obj.price, "rupees");
*/



// \n , \t, 
/*
let str="lokesh\nkumawat";
//or
console.log(str);
console.log("lokesh\nkumawat");


//lokesh
//kumawat
 

*/

//string Methods in js:These are bulit-in functions to mainpulate a string

//str.toUppperCase()
//str.toLowerCase()
//str.trim(): removes whitespaces(only remove space start and end)
/*
let str="   lokesh    kumawat       ";
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str.trim());
*/

//str.slice(start,end?): returns part of string
/*
let str="0123456789";
console.log(str.slice(1, 9));
console.log(str.slice(1));
*/


//str.concat(str2): joins str2 with str1
/*
let str="lokesh";
let str2="kumawat";           
let str3=str.concat(str2);
console.log(str3);                             //correct code

              //or


console.log(str,"  ", str2);
               //or

console.log(str+str2);
*/



//str.replace(searchVal,newVal)
/*
let str="Lokesh kumawat";
console.log(str.length);
console.log(typeof str);
let str1=str.replace("L", "Y");
console.log(str1);

            //or
console.log(str.replace("L","y"));

*/


//structuredClone.charAt(inx)
/*
let str="I Love Js"
console.log(str.charAt(2));
*/


//Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with fullname kenght.
//eg:user name = "lokeshkumawat", username should be "@lokeshkumawat13"
/*
let fullName=prompt("enter the your fullname without spaces");
let username ="@"+ fullName + fullName.length
console.log(username);
*/
