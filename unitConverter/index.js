let inputEl = document.getElementById("input-el");
let inputBigEl = document.getElementById("inputBig-el");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");
let executeBtn = document.getElementById("execute-btn");


function rounder(num) {
    return Math.round((num + Number.EPSILON) * 1000) / 1000;
}

function metersToFeet(num) {
    let number = inputEl.value;
    let resultFeetRounded = rounder(num * 3.28084);
    let resultMetersRounded = rounder(num * 0.3048);
    lengthEl.textContent = number + " meters = " + resultFeetRounded + " feet | " + number + " feet = " + resultMetersRounded + " meters";
}

function litersToGallons(num) {
    let number = inputEl.value;
    let resultGallonsRounded = rounder(num * 0.2641722);
    let resultLitersRounded = rounder(num * 3.785411784);
    volumeEl.textContent = number + " liters = " + resultGallonsRounded + " gallons(US) | " + number + " gallons(US) = " + resultLitersRounded + " liters";
}

function kilosToPounds(num) {
    let number = inputEl.value;
    let resultPoundsRounded = rounder(num * 2.2046226218);
    let resultKilosRounded = rounder(num * 0.45359237);
    massEl.textContent = number + " kilos = " + resultPoundsRounded + " pounds | " + number + " pounds = " + resultKilosRounded + " kilos";
}

function execute() {
    metersToFeet(inputEl.value);
    litersToGallons(inputEl.value);
    kilosToPounds(inputEl.value);
    inputBigEl.textContent = inputEl.value;
}

executeBtn.addEventListener("click", execute, true)