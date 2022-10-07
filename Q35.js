/* *****************************************************
 *
 * File Description: Problem 35
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * Animals: Think of at least three different animals that have a common characteristic. 
 * Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
 * • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
 * • Add a line at the end of your program stating what these animals have in common. 
 * You could print a sentence such as Any of these animals would make a great pet!
 *
 * created by: abkh
 * modified on: 6 October 2022 
 * 
 */

 let fav_animals = ["cat","dog","parrot", "fish", "horse"];

 for(i=0; i<fav_animals.length; i++)
 {
  console.log("Animal Names are %s",fav_animals[i])   
 }

 for(i=0; i<fav_animals.length; i++)
 {
  console.log("%s makes a great pet",fav_animals[i])   
 }

 for(i=0; i<fav_animals.length; i++)
 {
   if(fav_animals[i] == "cat" || fav_animals[i] == "dog" || fav_animals[i] == "horse")
   {
    console.log("%s is a four legged land animal",fav_animals[i])
   }
   else if(fav_animals[i] == "parrot" )
   {
    console.log("%s is a bird",fav_animals[i])
   }
   else if(fav_animals[i] == "fish" )
   {
    console.log("%s is a sea animal",fav_animals[i])
   }  
 }
