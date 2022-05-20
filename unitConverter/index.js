let inputEl = document.getElementById("input-el");
let inputEl1 = document.getElementById("inputo-el");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");
inputEl.textContent = 20;

let number = 25;

console.log(inputEl1);
function rounder(num) {
    return Math.round((num + Number.EPSILON) * 1000) / 1000;
}

function metersToFeet(num) {
    let resultFeetRounded = rounder(num * 3.28084);
    let resultMetersRounded = rounder(num * 0.3048);
    lengthEl.textContent = number + " meters = " + resultFeetRounded + " feet | " + number + " feet = " + resultMetersRounded + " meters";
}
metersToFeet(number);

function litersToGallons(num) {
    let resultGallonsRounded = rounder(num * 0.2641722);
    let resultLitersRounded = rounder(num * 3.785411784);
    volumeEl.textContent = number + " liters = " + resultGallonsRounded + " gallons(US) | " + number + " gallons(US) = " + resultLitersRounded + " liters";
}
litersToGallons(number);

function kilosToPounds(num) {
    let resultPoundsRounded = rounder(num * 2.2046226218);
    let resultKilosRounded = rounder(num * 0.45359237);
    massEl.textContent = number + " kilos = " + resultPoundsRounded + " pounds | " + number + " pounds = " + resultKilosRounded + " kilos";
}
kilosToPounds(number);

function execute() {
    metersToFeet(number);
    litersToGallons(number);
    kilosToPounds(number);
}