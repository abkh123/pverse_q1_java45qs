/* *****************************************************
 *
 * File Description: Problem 30
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * 
 * Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing 
 * code that will print a greeting to each user after they log in to a website. Loop through the array, 
 * and print a greeting to each user:
 * • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
 * • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
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