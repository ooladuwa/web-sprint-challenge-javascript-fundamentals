// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

//It can access the variable internal because it is a closure. That is, while it is inside of the function, it has access to the scope of the outer function.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
let summation = function (num, index){
let counter = 0;
// console.log(num);  

for (let i = 1; i <= num; i++){
    return counter += [i];
  };
};
console.log(summation(4));