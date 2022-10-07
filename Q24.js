/* *****************************************************
 *
 * File Description: Problem 24
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * 
 * More Conditional Tests: You don’t have to limit the 
 * number of tests you create to 10. If you want to try 
 * more comparisons, write more tests. 
 * 
 * Have at least one True and one False result for each of the following:
 * • Tests for equality and inequality with strings
 * • Tests using the lower case function
 * • Numerical tests involving equality and inequality, 
   greater than and less than, greater than or equal to, 
   and less than or equal to

  • Tests using "and" and "or" operators
  • Test whether an item is in a array
  • Test whether an item is not in a array
 * 
 * created by: abkh
 * modified on: 5 October 2022 
 * 
 */

 /* 5 Tests Evaluating to TRUE */

 // TEST 1 for String Equality and Inequality
console.log("Is 'STRING' == 'string'?");
console.log("STRING" == 'string')
console.log("STRING" != 'string')

// Lowercase
console.log("STRING".toLowerCase() == 'string')

// Numerical
console.log(100 == 200)
console.log(300 != 300)
console.log(300 < 400)
console.log(500 > 300)
console.log(67 <= 67)
console.log(87 >= 88)

// Bitwise And Or
console.log(3 & 5 )
console.log(2 | 8 )

// Logical And Or
console.log(3 && 5 )
console.log(2 || 8 )

// Check if item is Array
var aNumber = 1
const aGuestList = ['Parents','Wife and Kids','Grandmother'];
console.log(Array.isArray(aGuestList) )
console.log(Array.isArray(aNumber) )

