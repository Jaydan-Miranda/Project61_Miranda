"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Jaydan Miranda
      Date:   4/12/2025

      Filename: project06-01.js
*/

window.addEventListener("load", function() {
      // Store references to the password and confirm password fields
      let pwd = document.getElementById("pwd");
      let pwd2 = document.getElementById("pwd2");
   
      // Set up an event handler for the Confirm Password field
      pwd2.oninput = function() {
         // Check if the passwords do not match
         if (pwd2.value !== pwd.value) {
            // If they don't match, set a custom validity message
            pwd2.setCustomValidity("Passwords must match");
         } else {
            // If they match, clear the custom validity message
            pwd2.setCustomValidity("");
         }
      };
   });