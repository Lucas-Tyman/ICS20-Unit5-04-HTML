// Created by: Lucas Tyman
// Created on: Apr 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-04-HTML/sw.js", {
    scope: "/ICS2O-Unit5-04-HTML/",
  })
}

/**
 * This function determines museum admission price
 */
function check() {
  // input
  const sunday = document.getElementById("sunday").checked
  const monday = document.getElementById("monday").checked
  const tuesday = document.getElementById("tuesday").checked
  const wednesday = document.getElementById("wednesday").checked
  const thursday = document.getElementById("thursday").checked
  const friday = document.getElementById("friday").checked
  const saturday = document.getElementById("saturday").checked
  var age = document.getElementById("age").value

  // process and output
  if ((tuesday == true || thursday == true) && (age > 12 && age < 21)) {
    document.getElementById("museum").innerHTML = 'You are eligible for student pricing!'
  } else {
    document.getElementById("museum").innerHTML = 'You must pay regular price.'
  }
}