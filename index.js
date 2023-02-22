// console.log("hello");
// let firstName="ashwini";
// let lastName="paraye";
// console.log(firstName, lastName);


// function test() {
//     var a = 'Heyyyy';  //function scope


//     if (true) {
//         var a = "Beautiful";   //block scope
//         console.log(a);
//     }

//     console.log(a)
// }

// test();

// let a;
// let a;

// let count;
// console.log(count2, count)
//  count =1;
// var count2 = 5;

// function abc() {

    
//     console.log(a)

//     let a = 10;
// }

// abc()

// console.log('9' > '11')

// console.log('9' > 11)

// console.log('' > -1)

// console.log('asd' > 1)

// function init() {
//   var name = "Mozilla"; // name is a local variable created by init

//   function displayName() {
//     // displayName() is the inner function, that forms the closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();


// function greeting(name) {
//   console.log(`Hello, ${name}`);
// }

// function processUserInput(callback) {
//   const name = prompt("Please enter your name.");
//   callback(name);
// }

// processUserInput(greeting);



//  function square (num) {
//      console.log(num * num)
//  }

//  square(5)

// (function abc(num) {
//     console.log(num + num)
// })(10)

///////////////////////////////////////////////////////////////////////

//!Add two numbers function

// function add (num1, num2) {
//     console.log('addition of ' +num1+ ' and '  +num2 +' is = ', num1 + num2);
// }

// add(10,2)

/////////////////////////////////////////////////////////////////////////

//! Hello is alerted repeatedly after every 3 seconds
// let timerId= setInterval(() => alert('Hello'), 2000);

// Clear intervals after 6 sec with the timer id 
// setTimeout(() => { clearInterval(timerId); alert('Bye'); }, 6000);

///////////////////////////////////////////////////////////////////////////////

//!Asa program Jo pratyek 10 second la output detoy
//   function waitForSecond () {
//     alert('Hellooo')
//   }
//   setInterval(waitForSecond, 5000)


/////////////////////////////////////////////////////////////////////////////


//! Write a function that takes two arguments, an array and an element, and returns the number of times the element appears in the array.

// const arr = [ 1,2,3,3,3,4,2,5,5,1,1,1,1,1 ]
// var num = {};
// // const elem = {}
// function twoArgs (arr, num) {
//     arr.push(9)
//     console.log(arr)
//     console.log(num)
//     console.log("arr length == ", arr.length)
//     console.log("sort >>>>>>", arr.sort())
// }

// twoArgs(arr, 99)


// const arr = [ 1,2,3,3,3,4,2,5,5,1,1,1,1,1 ]

// function elementCount(arr, element){
//  return arr.filter((currentElement) => currentElement == element).length;
// };

// console.log("occurence ----- ", elementCount(arr, 1))

////////////////////////////////////////////////////////////////////////////////


//! Write a function that takes a string as an argument and returns the string reversed.


// function reverseString (str) {
//     var splitt = str.split("")     //splits the string into array
//     console.log(splitt)

//     var rev = splitt.reverse()    //revereses the array
//     console.log(rev)

//     var joinn = rev.join("")       // joins the array into string
//     console.log(joinn)
//     console.log('type of------', typeof(joinn))
// }

// reverseString("HI")

////////////////////////////////////////////////////////////////////////////////


//! Write a function that takes an array of numbers as an argument and returns the sum of the elements in the array

// var arr = [ 1, 2, 3, 4, 5 ]
//  var a, b;

// function addArr () {
//  console.log('length', arr)
//  let sum = 0;
//     sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] 
    
//     console.log(sum)

// }

// addArr(arr)

////////////////////////////////////////////////////////////////////////////////

//! Write a function that takes two arrays of numbers as arguments and returns a new array that contains the elements from both arrays, sorted in ascending order.

// const arr1 = ['a', 's', 'h', 'u']
// const arr2 = ['a', 'k', 's', 'u']

// function concatt() {

//     const arr3= arr1.concat(arr2)
//     console.log(arr3)
//     console.log('sort===', arr3.sort())
// }

// concatt(arr1, arr2)

////////////////////////////////////////////////////////////////////////////////


//! Write a function that takes an object as an argument and returns a new object with all the properties from the original object, but with their values multiplied by 2

// const obj = {
//     a: 2,
//     b: 3
// }

// function objFunction() {
    
// console.log('org obj===', obj)
// const multiplyy = 2;

// const newObj = Object.fromEntries(
//     Object.entries(obj).map(([name, value]) => [name, value * multiplyy])
// );

// console.log('new obj===',newObj);
// }

// objFunction(obj)

// const obj = {
//    a: 2,
//    b: 3,
//    c: 4,
//    d: 8
// };

// console.log('org obj==', obj)

// const newObj = {};

// for (const name in obj) {
//     newObj[name] = obj[name] * 2;
//     }

// console.log("new obj==",newObj);


////////////////////////////////////////////////////////////////////////////////


//! guess the output questions

// 1
// const arr = [1,2,3]
// console.log(arr)
// console.log(arr.length = 0)
// console.log(arr)

// 2
// console.log(typeof NaN);

//3
// console.log("5" + 3);

//4
// console.log("Hello" - 2);

//5
// console.log(2 == "2");

//6
// var x = 10;
// console.log(++x + x++);

//7
// console.log(2+3+'7')

//8
// console.log('7'+2+3)

//9
// var x='Hello';
// console.log(x[0])

//10
// console.log("8" - 4)

//11
// console.log("four" * 3)

//12
// console.log("15" / 5)

//? the / operator will automatically convert the string "15" to the number 15 and then divide it by 5

//13
// let a = 10;
// let b = 20;
// let c = '30';

// console.log(a + b + c);

//14
// let x = 10;
// let y = '5';

// console.log(x + y);

//15
// let a = [1, 2, 3, 4, 5];

// console.log(a.slice(1, 3));

//16
// let a = ['a', 'b', 'c'];
// let b = ['d', 'e', 'f'];

// console.log(a.concat(b));

//17
// let a = 10;

// function foo() {
//   console.log(a);
//   let a = 20;
// }

// foo();

//18
// var a = 10;

// function foo() {
//   console.log(a); //a is not initialized here before accessing
//   var a = 20;
//   console.log('here value of a will be 20 after initalization------',a)
//   }

// foo();
// console.log('here value of a will be 10------',a)

////////////////////////////////////////////////////////////////////////////////

//!rest parameter

// function functionInput(...input) {
//     let sum = 0;
//     for(let i of input) {
//         sum +=i;
//         console.log("input==== ", i);
//     }
//     console.log("sum >>>>>>> ", sum);
//     return sum;
// }

// console.log("1st output ===", functionInput(0,1,2));
// console.log("2nd output ===", functionInput(1,2,3,));
// console.log("3rd output ===", functionInput(5,5,5,5,5));


//////////////////////////////////////////////////////////////////////////////


//! Spread Operator

// const arr = [ 1,2,2,3,9 ];

// const maxValue = Math.max(arr);
// const maxValueSpread = Math.max(...arr)

// console.log("zzzzz == ", maxValue);

// console.log("maxValueSpread ===== ", maxValueSpread);

/////////////////////////////////////////////////////////////////

//!  Destructuring

// const destruct = { fname: "ashwini", age: 24 };

// const fname = destruct.fname;
// console.log("name>>>> ", fname);

// const age = destruct.age;
// console.log('age >>>> ', age);

///////////////////////////////////////////////////

// const obj = { fname: "mayuri", age:504 }

// const { fname, age } = obj;

// console.log("fname >>>>>>>> ", fname);
// console.log("age >>>>> ", age);

//////////////////////////////////////////////////////

//! Destructuring via rest elements

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];

console.log(a, b);
console.log(arr)
