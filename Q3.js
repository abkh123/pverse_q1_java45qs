/* *****************************************************
 *
 * File Description: Problem 3 
 * panacloud-modern-global-apps/typescript-node-projects
 * Name Cases: Store a person’s name in a variable, and 
 * then print that person’s name in lowercase, uppercase, 
 * and titlecase.
 * 
 * created by: abkh
 * modified on: 2 October 2022 
 * 
 */

 var vName   = "Abdullah Khateeb KHAN"; // Family name is in BLOCK
 var vString = "";

 console.log('UPPERCASE = %s',vName.toUpperCase() );
 console.log('lowercase = %s',vName.toLowerCase() );

 // Assuming Titlecase variable has only the first letter, of every part in BLOCK
 vName = vName.toLowerCase();  // Converting all parts of name to small
 vString = vName.split(" ");
 for(i=0;i<vString.length;i++){
    vString[i] = vString[i].charAt(0).toUpperCase() + vString[i].substring(1).toLowerCase();
  }
  vString = vString.join(" ");

 console.log('Titlecase = %s',vString);
   

 
 