let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function decrement() {
    count += - 1
    countEl.innerText = count
}

function reset() {
    count = 0 
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(countStr)
}

// Google:
// innerText alternative mdn
