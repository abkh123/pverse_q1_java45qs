/* *****************************************************
 *
 * File Description: Problem 37
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * Large Shirts: Modify the make_shirt() function so that shirts are large by default 
 * with a message that reads 'I love JavaScript'. 
 * 
 * Make a large shirt and a medium shirt with the default message, 
 * and a shirt of any size with a different message.
 * 
 * 
 * created by: abkh
 * modified on: 6 October 2022 
 * 
 */


function make_shirt(size, text)
{
  if(size != "Large")
  {
    console.log("The size of the shirt is %s", size)  
    console.log("Message to be printed on the shirt is '%s'", text)  
  }
  else // Default Case
  {
    console.log("The size of the shirt is Large by default")  
    console.log("Message to be printed on the shirt is 'I Love Javascript'")  

  }
}

make_shirt("Medium","This is a good shirt")
make_shirt("Large",null)