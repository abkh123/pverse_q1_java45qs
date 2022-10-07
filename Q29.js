/* *****************************************************
 *
 * File Description: Problem 29
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * Favorite Fruit: Make a array of your favorite fruits, 
 * and then write a series of independent if statements 
 * that check for certain fruits in your array.
 * • Make a array of your three favorite fruits and call it favorite_fruits.
 * 
 * • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
 * If the fruit is in your array, the if block should print a statement, such as You really like bananas! 
 *
 * created by: abkh
 * modified on: 6 October 2022 
 * 
 */

 const favorite_fruits = ["apple","mango","peach","watermelon","banana","pineapple"];

 if ( favorite_fruits.includes("apple") ) 
 {
   console.log("You really like apple")
 }

 if ( favorite_fruits.includes("mango") ) 
 {
   console.log("You really like mango")
 }

 if ( favorite_fruits.includes("peach") ) 
 {
   console.log("You really like peach")
 }

 if ( favorite_fruits.includes("watermelon") ) 
 {
   console.log("You really like watermelon")
 }

 if ( favorite_fruits.includes("banana") ) 
 {
   console.log("You really like banana")
 }
 // grapes not included in the array
 if ( favorite_fruits.includes("grapes") ) 
 {
   console.log("You really like grapes")
 }
