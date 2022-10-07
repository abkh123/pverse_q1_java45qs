/* *****************************************************
 *
 * File Description: Problem 41
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * 
 * Magicians: Make a array of magician’s names. 
 * Pass the array to a function called show_magicians(), 
 * which prints the name of each magician in the array.
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

show_magicians(magician_names)

