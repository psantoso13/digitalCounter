let countEl = document.getElementById('count_el')
let count = 0;

function add() {
    count += 1;
    countEl.innerText = count;
}

function reset() {
    count = 0;
    countEl.innerText = 0;
}