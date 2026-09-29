// ==UserScript==
// @name         Tinder Swipe Automation Tool
// @namespace    TinderAutomation
// @match        https://tinder.com/*
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// @version      2.0
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("Tinder Automation Tool initialized.");

    const clickInterval = 100; // Interval in milliseconds

    setInterval(function executeSwipe() {
        let buttonIndex = 0;

        $(".button").each(function evaluateButton() {
            // Target the 5th button (index 4) which typically corresponds to the Like action
            if (buttonIndex === 4) {
                $(this).trigger("click");
            }
            buttonIndex++;
        });
        
    }, clickInterval);
})();
