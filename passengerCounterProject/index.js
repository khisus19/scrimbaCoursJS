let count = 0;
let countEl = document.getElementById("count-el");



function increment() {
    count = count + 1;
    countEl.innerText = count;
}

function save() {
    console.log(count);
}
/* function reset() {
    count = 0;
    countEl.innerText = count;;
    return count;
} */