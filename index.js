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


//Add two numbers function

function add (num1, num2) {
    console.log('addition of ' +num1+ ' and '  +num2 +' is = ', num1 + num2);
}

add(10,2)