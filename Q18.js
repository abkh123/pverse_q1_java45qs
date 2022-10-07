/* *****************************************************
 *
 * File Description: Problem 18
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * 
 *  
 * created by: abkh
 * modified on: 4 October 2022 
 * 
 */

// Seeing the World: Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order.
let aPlacesList = ['USA', 'Brazil', 'Africa', 'Russia','Australia'];

// Print your array in its original order.
console.log(aPlacesList);
// Print your array in alphabetical order without modifying the actual list.
console.log(aPlacesList.slice().sort())
// Show that your array is still in its original order by printing it.
console.log(aPlacesList);

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log(aPlacesList.slice().reverse());
//Show that your array is still in its original order by printing it again.
console.log(aPlacesList);

//Reverse the order of your list. Print the array to show that its order has changed.
console.log(aPlacesList.reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(aPlacesList.reverse());

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(aPlacesList.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(aPlacesList.sort().reverse());