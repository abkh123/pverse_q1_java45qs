/* *****************************************************
 *
 * File Description: Problem 23
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * Conditional Tests: Write a series of conditional tests. 
 * Print a statement describing each test and your prediction 
 * for the results of each test. Your code should look something 
 * like this:
 * 
 * let car = 'subaru';
 * console.log("Is car == 'subaru'? I predict True.")
 * console.log(car == 'subaru')
 * • Look closely at your results, and make sure you understand why each line evaluates to True or False.
 * • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
 * 
 * created by: abkh
 * modified on: 5 October 2022 
 * 
 */

 /* 5 Tests Evaluating to TRUE */
// TEST 1
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru')
 
// TEST 2
car = 'honda';
console.log("Is car == 'honda'? I predict True.");
console.log(car == 'honda');

// TEST 3
car = 'toyota';
console.log("Is car == 'toyota'? I predict True.")
console.log(car == 'toyota')

// TEST 4
car = 'mazda';
console.log("Is car == 'mazda'? I predict True.")
console.log(car == 'mazda')
 
// TEST 5
car = 'tesla';
console.log("Is car == 'tesla'? I predict True.")
console.log(car == 'tesla')

console.log("");

/* 5 Tests Evaluating to FALSE*/
// TEST 6
car = 'BMW';
console.log("Is car == 'subaru'? I predict False.")
console.log(car == 'subaru')
 
// TEST 7
car = 'Mercedeze';
console.log("Is car == 'BMW'? I predict False.")
console.log(car == 'BMW')
 
// TEST 8
car = 'Suzuki';
console.log("Is car == 'honda'? I predict False.")
console.log(car == 'honda')
 
// TEST 9
car = 'toyota';
console.log("Is car == 'mazda'? I predict False.")
console.log(car == 'mazda')
 
// TEST 10
car = 'tesla';
console.log("Is car == 'volvo'? I predict False.")
console.log(car == 'volvo')
