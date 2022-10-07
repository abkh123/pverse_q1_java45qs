/* *****************************************************
 *
 * File Description: Problem 16
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * More Guests: You just found a bigger dinner table, so now more space is available. 
 * Think of three more guests to invite to dinner.
 * Start with your program from Exercise 15. Add a print statement to the end of your 
 * program informing people that you found a bigger dinner table.
 * 
 * Add one new guest to the beginning of your array.
 * 
 * Add one new guest to the middle of your array. Use append() to add one new guest to the end of your list. 
 * 
 * Print a new set of invitation messages, one for each person in your list.
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

