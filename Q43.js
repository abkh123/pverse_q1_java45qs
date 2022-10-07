/* *****************************************************
 *
 * File Description: Problem 43
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * 
 * Unchanged Magicians: Start with your work from Exercise 40. 
 * Call the function make_great() with a copy of the array of magicians’ names. 
 * 
 * Because the original array will be unchanged, return the new array and
 * store it in a separate array. 
 * 
 * Call show_magicians() with each array to show that you have 
 * one array of the original names and one array with the Great added to each magician’s name.
 * 
 * Call show_magicians() to see that the list has actually been modified.
 * 
 * 
 * created by: abkh
 * modified on: 6 October 2022 
 * 
 */

 const magician_names = ["Alice","Bob","Carmen","Daniel","Eric"];

 let copy_arr = [...magician_names]

function show_magicians(arr)
{
  for(i=0; i<arr.length; i++)
  {
    console.log("Magician Name = %s'", arr[i])
  }
}

function make_great(arr)
{
  for(i=0; i<arr.length; i++)
  {
    copy_arr[i] = "The Great " + copy_arr[i]
  }
  return arr;
}

show_magicians(magician_names)
make_great(copy_arr)
console.log("\ncopy of magician_names")
show_magicians(copy_arr)

console.log("\noriginal magician_names")
show_magicians(magician_names)

