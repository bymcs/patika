let counter = 0
let counterDOM = document.querySelector('#counter')
let arttirDOM = document.querySelector('#arttir')
let azaltDOM = document.querySelector('#azalt')

counterDOM.innerHTML = counter

arttirDOM.addEventListener("click", function(){

    counterDOM.innerHTML = 12
})

azaltDOM.addEventListener("click", function(){

    console.log(this.id)
})