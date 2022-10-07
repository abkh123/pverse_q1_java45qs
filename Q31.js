/* *****************************************************
 *
 * File Description: Problem 31
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * 
 * No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
 * • If the list is empty, print the message We need to find some users!
 * • Remove all of the usernames from your array, and make sure the correct message is printed.
 * 
 *
 * created by: abkh
 * modified on: 6 October 2022 
 * 
 */

 let user_name = ["admin","Alice","Bob","Carmen","Daniel","Eric"];

 for (i=0; i<user_name.length; i++)
 {
    if(user_name[i] == "admin")
    {
      console.log("Hello admin, would you like to see a status report?")
    }
    else
    {
      console.log("Hello %s, thank you for logging in again.",user_name[i])
    }
  }

  user_name.length = 0  // Make the array Empty
  console.log(user_name)

  if(!user_name.length)
  {
    console.log("We need to find some users!")
  }