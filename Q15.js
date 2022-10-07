/* *****************************************************
 *
 * File Description: Problem 15
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * 
 * Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
 * Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
 * Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
 * Print a second set of invitation messages, one for each person who is still in your list.
 *  
 * created by: abkh
 * modified on: 3 October 2022 
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
