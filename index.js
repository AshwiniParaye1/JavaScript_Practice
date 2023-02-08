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

//Add two numbers function

// function add (num1, num2) {
//     console.log('addition of ' +num1+ ' and '  +num2 +' is = ', num1 + num2);
// }

// add(10,2)

/////////////////////////////////////////////////////////////////////////

// Hello is alerted repeatedly after every 3 seconds
// let timerId= setInterval(() => alert('Hello'), 2000);

// Clear intervals after 6 sec with the timer id 
// setTimeout(() => { clearInterval(timerId); alert('Bye'); }, 6000);

///////////////////////////////////////////////////////////////////////////////

//Asa program Jo pratyek 10 second la output detoy
//   function waitForSecond () {
//     alert('Hellooo')
//   }
//   setInterval(waitForSecond, 5000)


/////////////////////////////////////////////////////////////////////////////


// Write a function that takes two arguments, an array and an element, and returns the number of times the element appears in the array.

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


// Write a function that takes a string as an argument and returns the string reversed.


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


// Write a function that takes an array of numbers as an argument and returns the sum of the elements in the array

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

// Write a function that takes two arrays of numbers as arguments and returns a new array that contains the elements from both arrays, sorted in ascending order.

// const arr1 = ['a', 's', 'h', 'u']
// const arr2 = ['a', 'k', 's', 'u']

// function concatt() {

//     const arr3= arr1.concat(arr2)
//     console.log(arr3)
//     console.log('sort===', arr3.sort())
// }

// concatt(arr1, arr2)

////////////////////////////////////////////////////////////////////////////////

