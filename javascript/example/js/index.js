let counter = 0
let counterDOM = document.querySelector('#counter')
let arttirDOM = document.querySelector('#arttir')
let azaltDOM = document.querySelector('#azalt')

counterDOM.innerHTML = counter

arttirDOM.addEventListener("click", clickEvent)
azaltDOM.addEventListener("click", clickEvent)

function clickEvent(){
    this.id === "arttir" ? counter += 1 : counter -= 1
    counterDOM.innerHTML = counter
}