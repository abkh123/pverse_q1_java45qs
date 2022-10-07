/* *****************************************************
 *
 * File Description: Problem 6 
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * Stripping Names: Store a person’s name, and include 
 * some whitespace characters at the beginning and end 
 * of the name. Make sure you use each character 
 * combination, "\t" and "\n", at least once. Print the 
 * name once, so the whitespace around the name is 
 * displayed. Then print the name after striping the 
 * white spaces.
 * 
 * created by: abkh
 * modified on: 2 October 2022 
 * 
 */

var vFamousPerson   = " Quaid-e-Azam \n Muhammad Ali \t Jinnah"
var vStr1 = ""
var vStr2 = ""

console.log("Name with newline and tabspace = %s", vFamousPerson);

vStr1 = vFamousPerson.split(' ');
//console.log(vStr1);
for (i=0;i<vStr1.length;i++)
{
    if(vStr1[i] == "\n" || vStr1[i] == "\t")
    {
        continue;
    }
    else
    {
        vStr2 += " " + vStr1[i];        
    }

}

console.log("Name after stripping off white spaces = %s", vStr2);
