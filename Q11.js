/* *****************************************************
 *
 * File Description: Problem 11
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * Names: Store the names of a few of your friends in a 
 * array called names. Print each person’s name by 
 * accessing each element in the list, one at a time.
 *  
 * created by: abkh
 * modified on: 3 October 2022 
 * 
 */



const arrayNames = ['Rayyan','Ammar','Faraz','Zaki','Saif','Raheel','Jeebs'];
for(i=0; i<arrayNames.length; i++)
{
    console.log("My %d Friend's Name is %s", i+1, arrayNames[i]);
}

