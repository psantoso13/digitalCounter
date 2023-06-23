let totalCount = prompt('Masukkan jumlah hitungan:')
let countEl = document.getElementById('count_el')
let count = 0;
let error = new Audio('./error.mp3');

function back() {
    count = 0;
    countEl.innerText = 0;
}
    

function add() {
    if (count < totalCount) { 
        count += 1;
        countEl.innerText = count;
    } else {
        error.play()        
        alert(`jumlah hitungan sudah ${totalCount} kali`)
        back()
    }        
}

function reset() {
    let konfirmasi = confirm('Mulai dari awal?')

    if(konfirmasi === true){
    count = 0;
    countEl.innerText = 0;
} else {}

}

function newCount() {
    let konfirmasi = confirm('Masukkan jumlah hitungan baru?')

    if(konfirmasi === true){
    count = 0;
    countEl.innerText = 0;
    location.reload()
} else {}

}
