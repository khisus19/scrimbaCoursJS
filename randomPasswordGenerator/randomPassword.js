let charArray = [];

let inputEl = document.getElementById("input-el");
let password1El = document.getElementById("pwd-el1");
let password2El = document.getElementById("pwd-el2");
let password3El = document.getElementById("pwd-el3");
let password4El = document.getElementById("pwd-el4");
let passContainerCollection = document.getElementsByClassName("password-cont");
let passContainerArray = [...passContainerCollection];
let tooltip = document.getElementsByClassName("tooltiptext");
let tooltipArray = [...tooltip];

for (var i = 33; i <= 126; i++) {
    charArray.push(String.fromCharCode(i));
}

function randomChar() {
    let randomIndex = Math.floor(Math.random() * 94);
    return charArray[randomIndex];
}

function passwordizator(){
    let charLength = inputEl.value;
    if (charLength > 12){
        for (let i = 0; i < passContainerArray.length; i++){
            passContainerArray[i].style.width = "280px";
        }
    } else {
        for (let i = 0; i < passContainerArray.length; i++){
            passContainerArray[i].style.width = "220px";
        } 
    }
    password1 = "";
    password2 = "";
    password3 = "";
    password4 = "";
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

function copyClipboard(pass) {  
    //  /* Copy the text inside the text field */
    navigator.clipboard.writeText(pass);
  
    // /* Alert the copied text */
    for (let i = 0; i < tooltipArray.length; i++){
        tooltipArray[i].innerHTML = "Copied: " + pass;
    }
}

function outFunc() {
    for (let i = 0; i < 4; i++){
    }
    tooltip[0].innerHTML = "Copy to clipboard";
    tooltip[1].innerHTML = "Copy to clipboard";
    tooltip[2].innerHTML = "Copy to clipboard";
    tooltip[3].innerHTML = "Copy to clipboard";
}