/* *****************************************************
 *
 * File Description: Problem 12
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * Greetings: Start with the array you used in Exercise 11, 
 * but instead of just printing each person’s name, print 
 * a message to them. The text of each message should be 
 * the same, but each message should be personalized with 
 * the person’s name.
 *  
 * created by: abkh
 * modified on: 3 October 2022 
 * 
 */



const arrayNames = ['Rayyan','Ammar','Faraz','Zaki','Saif','Raheel','Jeebs'];
for(i=0; i<arrayNames.length; i++)
{
    console.log("How are you %s? %s! do you know what happened yesterday?", arrayNames[i], arrayNames[i]);
}

