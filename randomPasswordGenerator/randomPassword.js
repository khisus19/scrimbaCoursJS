let charArray = [];
let inputEl = document.getElementById("input-el");


let password1El = document.getElementById("pwd-el1");
let password2El = document.getElementById("pwd-el2");
let password3El = document.getElementById("pwd-el3");
let password4El = document.getElementById("pwd-el4");

for (var i = 33; i <= 127; i++) {
    charArray.push(String.fromCharCode(i));
}

function randomChar() {
    let randomIndex = Math.floor(Math.random() * 95);
    return charArray[randomIndex];
}

function passwordizator(){
    let charLength = inputEl.value;
    let password1 = "";
    let password2 = "";
    let password3 = "";
    let password4 = "";
    for(let i = 0; i < charLength; i++){
       password1 += randomChar();
       password2 += randomChar();
       password3 += randomChar();
       password4 += randomChar();
    }
    password1El.textContent = password1;
    password2El.textContent = password2;
    password3El.textContent = password3;
    password4El.textContent = password4;
}
