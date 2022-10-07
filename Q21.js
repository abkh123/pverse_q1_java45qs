/* *****************************************************
 *
 * File Description: Problem 21
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * 
 * Think of something you could store in a array. 
 * For example, you could make a list of mountains, 
 * rivers, countries, cities, languages, or anything else 
 * you’d like. Write a program that creates a list 
 * containing these items.
 * 
 * created by: abkh
 * modified on: 5 October 2022 
 * 
 */

/*const person = {
  firstName: 'testFirstName',
  lastName: 'testLastName'
};*/


const object1 = new Object();

object1.mountain = 'K2'; object1.river    = 'Indus'; object1.countries= 'Pakistan'; object1.cities   = 'Islamabad'; 
object1.language = 'Urdu';

console.log('Items stored in objects1 are\n');
console.log("object1.mountain = %s",object1.mountain);
console.log("object1.river = %s",object1.river);
console.log("object1.countries = %s",object1.countries);
console.log("object1.cities = %s",object1.cities);
console.log("object1.language = %s",object1.language);
