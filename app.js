const p1sc = document.getElementById('p1sc')
const p2sc = document.getElementById('p2sc')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const maxsc = document.getElementById('maxsc')
const reset = document.getElementById('reset')
let p1score = 0
p1.addEventListener('click', p1plusone)
function p1plusone() {
    // p1sc gets +1 every time p1 is clicked 
    p1score += 1
    p1sc.innerText = p1score
    if (p1score >= parseInt(maxsc.value)) {
        p1sc.style.color = 'green'
        p2sc.style.color = 'red'
        p1.disabled = true;
        p2.disabled = true;
    }
}

let p2score = 0
p2.addEventListener('click', p2plusone)
function p2plusone() {
    // p1sc gets +1 every time p1 is clicked 
    p2score += 1
    p2sc.innerText = p2score
    if (p2score >= parseInt(maxsc.value)) {
        p2sc.style.color = 'green'
        p1sc.style.color = 'red'
        p1.disabled = true;
        p2.disabled = true;
    }



    // if max>=p1score then disable btns
    // and make p1 green/p2 red depending who won
}
reset.addEventListener('click', clear)
function clear() {
    p1score = 0
    p2score = 0
    p1sc.innerText = 0
    p2sc.innerText = 0
    p2sc.style.color = ''
    p1sc.style.color = ''
    p1.disabled = false;
    p2.disabled = false;
}
