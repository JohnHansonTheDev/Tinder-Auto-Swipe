// ==UserScript==
// @name        Tinder-Auto-Swiper
// @namespace   Tinder
// @include     https://tinder.com/app/recs
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// @version     1
// @run-at document-end
// @grant       none
// ==/UserScript==

alert("auto clicker is on");

var i = 0;

// The amount of seconds between each swipe
// Preferrable to keep a longer duration to avoid getting rate limited ("We are unable to find any potential matches right now...")
const betweenSwipeSecs = 10;

setInterval( function a(){
  i = 0;
  $(".button").each( function a(){
    // Randomly reject some profiles to not hurt user's visibility
    const reject = Math.random() < 0.2;
    if(reject && i == 1){
      $(this).click();
    } else if(!reject && i == 3 ){
      $(this).click();
    }
    i++;
  });	
}, Math.floor(Math.random() * betweenSwipeSecs * 1000))
