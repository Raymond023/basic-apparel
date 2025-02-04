'use strict';

const myForm = document.querySelector('form')
const emailInput = document.querySelector('#email');

const regex = /\S+@\S+\.\S+/;

if(emailInput.value !== regex) {
    emailInput.classList.add('error')
} 
console.log(myForm)