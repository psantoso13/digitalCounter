let isianEl = document.getElementById('isian-el')
let totalCount = isianEl.textContent
let countEl = document.getElementById('count_el')
let count = 0;

let error = new Audio('./error.mp3');
let notif = new Audio('./notif.mp3');

function clearCount() {
    count = 0;
    countEl.innerText = 0;
}

function addNew() {
    let newCount = prompt('Masukkan target hitungan (1-4 digit angka):');
  
    if (newCount !== null) {
      const re = /^\d{1,4}$/;
      if (re.test(newCount)) {
        isianEl.textContent = newCount; // mengganti isian dari Target Hitung
        totalCount = newCount; // membatasi hitungan sampai newCount
      } else {
        error.play();
        navigator.vibrate(800);
        alert('Masukkan hanya 1-4 digit angka');
        addNew();
      }
    }
  }
      
function add() {
    if (count < totalCount -3) { 
        count += 1;
        navigator.vibrate(200);
        countEl.innerText = count;
    } else if (count >= totalCount -3 && count < totalCount){
        notif.play();
        navigator.vibrate(100, 100, 100);
        count += 1;
        countEl.innerText = count;
    } else {
        error.play();
        navigator.vibrate(800);        
        alert(`jumlah hitungan melebihi target. silahkan "reset" atau "ganti target hitungan"`)     
    }
}

function reset() {
    let konfirmasi = confirm('Reset Hitungan?')

    if(konfirmasi === true){
    clearCount()
} else {}

}

function newCount() {
    let konfirmasi = confirm('Masukkan jumlah hitungan baru?')

    if(konfirmasi === true){
    
    addNew()

    if (countEl.textContent > 0) {
      reset()
    } else {}
    // location.reload()
} else {}

}