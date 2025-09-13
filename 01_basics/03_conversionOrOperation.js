// let score=33
// let score='33'
//  let score='33abc'
//   let score='null'
//   let score=null
//    let score='undefined'
//   let score='true'
//   let score=true
//   let score=false
  let score="Nagaraj"


 // let score='33'
//  console.log(typeof score);  //string
//  console.log(typeof (score));       //string
 

 // let score='33'
 let valueInNumber=Number(score)  
//   console.log(typeof (score));        //string
//  console.log(typeof valueInNumber);   //number   ----abserve the console below --carefully analyse the results of both


//  let score='33abc'
//  console.log(valueInNumber);      //NaN   ----abserve the console above --carefully analyse the results of both

// console.log(valueInNumber);


// Notes on above conversions

// "33"    => Number
// "33abc"  => NAN-Not a Number     its type is number only
// true =>1          : false => 0
// null =>0          : 'null' => NaN
//undefined => NaN

// let isLoggedIn =1
// let isLoggedIn =0
// let isLoggedIn =""
let isLoggedIn ="Nagaraj"

let booleanIsLoggedIn = Boolean(isLoggedIn) 

// console.log(booleanIsLoggedIn);


// 1 =>  true     :  0 =>  false 
// "" => false   : "Nagaraj"  => true




let someNumber=33

let stringNumber= String(someNumber)

// console.log(someNumber);
// console.log(typeof stringNumber);

// *************************Operations****************************

let value = 3
let negValue=-value

// console.log(negValue); ----//output -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 ="Hello"
let str2=" Nagaraj"
let str3 = str1 + str2      //Hello Nagaraj

// console.log(str3);

console.log(1+"2");   //12

console.log("1"+2);   //12

 console.log("1"+2+2);   //122

console.log(1+2+ "2");   //32

console.log(3+4*5%5);  //3        //first calculate multiplication


console.log((3+4)*5%3);  //2          // as per math--from left

console.log(true);      //true
console.log(+true);     1

console.log(-true);     //-1
console.log(false);     //0
console.log(-false);    //-0

console.log("");        //blank since it is empty string

console.log(+"");       //0

let num1, num2, num3

num1 = num2 = num3 = 2 +2 

let gameCounter=100
gameCounter++;
++gameCounter;

console.log(gameCounter);


















