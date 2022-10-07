/* *****************************************************
 *
 * File Description: Problem 34
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * 
 * Pizzas: Think of at least three kinds of your favorite pizza. 
 * Store these pizza names in a array, and then use a for loop to print the name of each pizza.
 * 
 * • Modify your for loop to print a sentence using the name of 
 * the pizza instead of printing just the name of the pizza. 
 * For each pizza you should have one line of output containing
 * a simple statement like I like pepperoni pizza.
 * 
 * • Add a line at the end of your program, outside the for loop, 
 * that states how much you like pizza. 
 * The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
 *
 * created by: abkh
 * modified on: 6 October 2022 
 * 
 */

 let fav_pizzas = ["fajita","chickentikka","bbq", "pepperoni"];

 for(i=0; i<fav_pizzas.length; i++)
 {
  console.log("Pizza Names are %s",fav_pizzas[i])   
 }
 for(i=0; i<fav_pizzas.length; i++)
 {
   if(i == 0 || i == 2)
   {
    console.log("I love %s pizza",fav_pizzas[i])
   }
   else
   {
    console.log("I dont like %s pizza",fav_pizzas[i])
   }
  
 }
