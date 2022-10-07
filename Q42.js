/* *****************************************************
 *
 * File Description: Problem 42
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * 
 * Great Magicians: Start with a copy of your program from Exercise 39. 
 * Write a function called make_great() that modifies the array of magicians 
 * by adding the phrase the Great to each magician’s name. 
 * 
 * Call show_magicians() to see that the list has actually been modified.
 * 
 * 
 * created by: abkh
 * modified on: 6 October 2022 
 * 
 */

 const magician_names = ["Alice","Bob","Carmen","Daniel","Eric"];

function show_magicians(arr)
{
  for(i=0; i<arr.length; i++)
  {
    console.log("Magician Name = %s'", arr[i])
  }
}

function make_great()
{
  for(i=0; i<magician_names.length; i++)
  {
    magician_names[i] = "The Great " + magician_names[i]
  }
}

show_magicians(magician_names)
make_great()
show_magicians(magician_names)

