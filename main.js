const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('email-box');
const emailError = document.querySelector('#email-box + span.error');

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'Email address is a required field';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Please enter a valid e-mail address';
    } else {
        emailError.textContent = '';
    }
};

email.addEventListener('input', showEmailError);

const country = document.getElementById('country-selector');
const countryError = document.querySelector('#country-selector + span.error');

function showCountryError() {
    if (country.validity.valueMissing) {
        countryError.textContent = 'Please select a country';
    } else {
        countryError.textContent = '';
    }
};

const zip = document.getElementById('zip-box');
const zipError = document.querySelector('#zip-box + span.error');
let zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;

function showZipError() {
    if (country.value == "US") {
        if (!zip.value) {
            zipError.textContent = "Please input a ZIP code";
        } else if (!zipRegex.test(zip.value)) {
            zipError.textContent = "Please input a valid ZIP code";
        } else {
            zipError.textContent = '';
        }
    } else {
        if (zip.value) {
            zipError.textContent = "Selected country does not use ZIP codes";
        } else {
            zipError.textContent = '';
        }
    }
};

country.addEventListener('change', event => {
    showCountryError();
    showZipError();
})

zip.addEventListener('input', event => {
    showZipError();
    showCountryError();
});

const password = document.getElementById("password-box");
const passwordError = document.querySelector("#password-box + span.error");

function showPasswordError() {
    if (password.value.length < 6) {
        passwordError.textContent = 'Passwords must be at least 6 characters long';
    } else {
        passwordError.textContent = '';
    }
};

password.addEventListener('input', showPasswordError);

const confirm = document.getElementById("password-confirm-box");
const confirmError = document.querySelector("#password-confirm-box + span.error");

function showConfirmError() {
    if (password.value != confirm.value) {
        confirmError.textContent = 'Passwords must match';
    } else {
        confirmError.textContent = '';
    }
};

confirm.addEventListener('input', showConfirmError);

form.addEventListener('submit', event => {
    event.preventDefault();
    showEmailError();
    showCountryError();
    showZipError();
    showPasswordError();
    showConfirmError();

    if (!emailError.textContent && !countryError.textContent && !zipError.textContent && !passwordError.textContent && !confirmError.textContent) {
        alert("High 5!");
    }
});