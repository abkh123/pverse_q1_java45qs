/* *****************************************************
 *
 * File Description: Problem 33
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * 
 * Ordinal Numbers: Ordinal numbers indicate their position in a array, 
 * such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
  Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
 *
 * created by: abkh
 * modified on: 6 October 2022 
 * 
 */

 let ordinal_numbers = [4,5,1,2,3,6,7,8,9];

 for(j=0; j<ordinal_numbers.length; j++)
 {
  if(ordinal_numbers[j] > 3)
  {
    console.log("%dth",ordinal_numbers[j])
  }
  else
  {
    if(ordinal_numbers[j] == 1) console.log("%dst",ordinal_numbers[j]);

    if(ordinal_numbers[j] == 2) console.log("%dnd",ordinal_numbers[j])

    if(ordinal_numbers[j] == 3) console.log("%drd",ordinal_numbers[j])
  }

  
 }
  