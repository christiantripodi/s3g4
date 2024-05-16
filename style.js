let tabellone = document.querySelector('.tabellone')
let button = document.querySelector('.button')
let numeriEstratti = [0]

creaTabellone()

button.addEventListener("click", estraiNumero);

function creaTabellone(){
for (let i = 1; i <= 76; i++){

    let numbers = document.createElement('div')
    numbers.classList.add('numbers')
    numbers.innerText = i
    tabellone.append(numbers)
}
}


