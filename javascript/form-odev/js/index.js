/*

let counter = localStorage.getItem('counter') ? localStorage.getItem('counter') : 0
let counterDOM = document.querySelector('#counter')
let arttirDOM = document.querySelector('#arttir')
let azaltDOM = document.querySelector('#azalt')
let testDOM = document.querySelector('#test')


counterDOM.innerHTML = counter


arttirDOM.addEventListener("click", clickEvent)
azaltDOM.addEventListener("click", clickEvent)
counterDOM.addEventListener("mousemove",clickEventTwo)
testDOM.addEventListener("click",testFunc)

function clickEvent(){

    this.id === "arttir" ? counter += 1 : counter -= 1
    counterDOM.innerHTML = counter
    localStorage.setItem('counter',counter)
}

function clickEventTwo() {

    this.style.color === 'red' ? this.style.color = 'blue' : this.style.color = 'red'
}

function  testFunc() {
    //alert(this.innerHTML)
    this.innerHTML = 'changed innerHTML'
}

* */