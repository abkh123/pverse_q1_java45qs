/* *****************************************************
 *
 * File Description: Problem 40
 * panacloud-modern-global-apps/typescript-node-projects
 * 
 * 
 * Album: Write a function called make_album() that builds 
 * a Object describing a music album. 
 * The function should take in an artist name and an album title, 
 * and it should return a Object containing these two pieces of information. 
 * 
 * Use the function to make three dictionaries representing different albums. 
 * Print each return value to show that Objects are storing the 
 * album information correctly. 
 * 
 * Add an optional parameter to make_album() that allows 
 * you to store the number of tracks on an album. 
 * 
 * If the calling line includes a value for the number of tracks, 
 * add that value to the album’s Object. 
 * 
 * Make at least one new function call that includes the number of tracks on an album.
 * 
 * created by: abkh
 * modified on: 6 October 2022 
 * 
 */

var album = [{artist: 'Junoon', title: 'Inquilab'}];

//function make_album(artistname, albumtitle)
function make_album(params)
{
  album.push(params);

  return  console.log(album)
}

make_album({artist: 'VitalSigns', title: 'Dil Dil Pakistan'})

make_album({artist: 'Aaroh', title: 'Jalan', num_tracks: 7})
