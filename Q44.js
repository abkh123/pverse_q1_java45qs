/* *****************************************************
 *
 * File Description: Problem 44
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * 
 * Sandwiches: Write a function that accepts a array of 
 * items a person wants on a sandwich. 
 * 
 * The function should have one parameter that collects 
 * as many items as the function call provides, and it 
 * should print a summary of the sandwich that is being ordered. 
 * Call the function three times, using a different number of arguments each time.
 * 
 * 
 * 
 * created by: abkh
 * modified on: 6 October 2022 
 * 
 */

var subway_sandwich_1 = ['Jalapenos', 'Chicken', 'Olives', 'Onions', 'Corn' ]; 
var subway_sandwich_2 = ['Salmon', 'Capsicum', 'Cheese', 'Mayo' ]; 
var subway_sandwich_3 = ['Pepporoni', 'Cucumber', 'Lettucs' ]; 

function subway_sandwich_items(params) 
{
  for (i=0; i<params.length; i++) 
  {
    console.log("Sandwich has %s",params[i])
  }
}
subway_sandwich_items(subway_sandwich_1);
console.log("\n")
subway_sandwich_items(subway_sandwich_2);
console.log("\n")
subway_sandwich_items(subway_sandwich_3);
