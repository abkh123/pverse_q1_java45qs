/* *****************************************************
 *
 * File Description: Problem 17
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests. 
 * 
 * Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner. 
 * 
 * Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
 * 
 * Print a message to each of the two people still on your list, letting them know they’re still invited. 
 * 
 * Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
 *  
 * created by: abkh
 * modified on: 4 October 2022 
 * 
 */

let aGuestList = ['Parents', 'Wife and Kids', 'Friends', 'GrandParents'];
for(i=0; i<aGuestList.length; i++)
{
    console.log("Guests that are coming to dinner %s", aGuestList[i]);
}
console.log("%s are not coming to the dinner", aGuestList[3]);

aGuestList.pop();
aGuestList.push("Uncle and Aunt");
for(i=0; i<aGuestList.length; i++)
{
    console.log("New List of Guests that are coming to dinner %s", aGuestList[i]);
}

// Found Bigger Dinner Table
console.log("I have found a bigger dinner table");

aGuestList.unshift("Distant Relatives"); // inserting at the beginning of the array 

aGuestList.splice(3,0,"Cousin-Alice");   // inserting at the middle of the array 

aGuestList.push("Cousin-Bob");          // inserting at the end of the array
for(i=0; i<aGuestList.length; i++)
{
    console.log("New List of Guests at the Bigger dinner Table now includes %s", aGuestList[i]);
}

console.log("\nDinner Table will not arrive on Time. I can invite only two people now");

var len = aGuestList.length;    // since length gets updated in loop we need to store it in a variable
for(i=0; i<len-2; i++)
{
    aGuestList.pop();
}

console.log("\n%d",aGuestList.length)
for(i=0; i<aGuestList.length; i++)
{
    console.log("%s You are still invited to the dinner", aGuestList[i]);
}

for(i=0; i<=aGuestList.length; i++)
{
    aGuestList.pop();
}
console.log("THe list should be empty now",aGuestList);
