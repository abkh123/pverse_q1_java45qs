/* *****************************************************
 *
 * File Description: Problem 45
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * 
 * Cars: Write a function that stores information about a car in a Object. 
 * The function should always receive a manufacturer and a model name. 
 * 
 * It should then accept an arbitrary number of keyword arguments. 
 * 
 * Call the function with the required information and two other name-value pairs, 
 * such as a color or an optional feature. 
 * 
 * Print the Object that’s returned to make sure all the information was stored correctly.
 * 
 * 
 * created by: abkh
 * modified on: 6 October 2022 
 * 
 */

var Info = [{manufacturer: "Suzuki", model_name: "Alto"}];



function store_car_info(params) 
{
  Info.push(params);
}

console.log(Info)
console.log("\n")
store_car_info({manufacturer: "Toyota", model_name: "Corolla"});
console.log(Info)

console.log("\n")
store_car_info([{manufacturer: "Kia", model_name: "Elantra", color: "white"}]);
console.log(Info)
