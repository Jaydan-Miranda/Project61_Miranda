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
         // If the password does have a number or letter and is at least 8 characters long
         if (pwd.value.length < 8 || !/\d/.test(pwd.value) || !/[a-zA-Z]/.test(pwd.value)) {
            pwd2.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
         }
         // Else if the passwords do not match
         else if (pwd.value !== pwd2.value) {
            pwd2.setCustomValidity("Your passwords must match");
         }
         // c. Otherwise, set the validation message to an empty text string
         else {
            pwd2.setCustomValidity("");
         }
      };
   });
   