let counter = 0
let counterDOM = document.querySelector('#counter')
let arttirDOM = document.querySelector('#arttir')
let azaltDOM = document.querySelector('#azalt')
let testDOM = document.querySelector('#test')

if(!localStorage.getItem('counter')){
    localStorage.setItem('counter',counter)
}

counterDOM.innerHTML = localStorage.getItem('counter')


arttirDOM.addEventListener("click", clickEvent)
azaltDOM.addEventListener("click", clickEvent)
counterDOM.addEventListener("click",clickEventTwo)
testDOM.addEventListener("click",testFunc)

function clickEvent(){
    
    this.id === "arttir" ? counter += 1 : counter -= 1
    counterDOM.innerHTML = counter
    localStorage.setItem('counter',counter)
}

function clickEventTwo(){
    
    this.style.color == 'red' ? this.style.color = 'yellow' : this.style.color = 'red' 
}