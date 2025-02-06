'use strict';

const myForm = document.querySelector('form')
const emailInput = document.querySelector('#email');
const submit = document.querySelector('.submit');

const regex = /\S+@\S+\.\S+/;

function emailValidation () {
    if(regex.test(emailInput.value)) {
        emailInput.classList.remove('error');
        submit.classList.remove('show');
    } else {
        emailInput.classList.add('error');
        submit.classList.add('show');
    }
}
myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    emailValidation()
});