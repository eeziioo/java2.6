function umar() {
    let box = document.querySelector('.box')
    let data = new Date();

    let hours = document.querySelector('.hours')
    hours.innerHTML = data.getHours();
    let minuts = document.querySelector('.minuts')
    minuts.innerHTML = data.getMinutes();
    let secods = document.querySelector('.secods')
    secods.innerHTML = data.getSeconds();

    if (secods <= 0) {
        secods.textContent = 0 + secods

    }
}

umar()

setInterval (function() {
    umar()
}, 1000)

let box1 = document.querySelector('.box1')
let data = new Date();

let kun = document.querySelector('.kun')
kun.innerHTML = data.getDate()
let oy = document.querySelector('.oy')
oy.innerHTML = data.getMonth() + 1
let yil = document.querySelector('.yil')
yil.innerHTML = data.getFullYear()