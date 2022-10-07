/* *****************************************************
 *
 * File Description: Problem 38
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * Cities: Write a function called describe_city() that 
 * accepts the name of a city and its country. 
 * The function should print a simple sentence, such as Karachi is in Pakistan. 
 * 
 * Give the parameter for the country a default value. 
 * Call your function for three different cities, at least one of which is not in the default country.
 * 
 * 
 * created by: abkh
 * modified on: 6 October 2022 
 * 
 */


function describe_city(city, country)
{
  if(country != "Pakistan")
  {
    console.log("%s is in %s", city, country)  
  }
  else // Default Case
  {
    console.log("Karachi is in Pakistan")
  }
}

describe_city("Tokyo","Japan")
describe_city("Karachi","Pakistan")
describe_city("California","USA")
