/* *****************************************************
 *
 * File Description: Problem 32
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * 
 * Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. 
  If it has, print a message that the person will need to enter a new username. 
  If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
 *
 * created by: abkh
 * modified on: 6 October 2022 
 * 
 */

 let current_users = ["ALICE","BOB","Carmen","Daniel","eric"];

 let new_users = ["alex","bob","carl","Daniel","ERIC"]

 var result = 0;
 for(j=0; j<new_users.length; j++)
 {
  result = 0;
  for(i=0; i<current_users.length; i++)
  {
    if (new_users[j] == current_users[i] || new_users[j].toLowerCase() == current_users[i] || new_users[j].toUpperCase() == current_users[i])
    {
      result = 1;
    }
  }
  if (result)
  {
    console.log("%s already used. Enter a new username",new_users[j])
  }
  else
  {
    console.log("%s Not used. This username is available",new_users[j])
  }
 }
  