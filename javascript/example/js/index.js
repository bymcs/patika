let greeting = document.querySelector("#greeting")
greeting.addEventListener('click',domClick)

function domClick() {
    console.log('TIKLANDI')
    greeting.style.color == "red" ? greeting.style.color == "black" : greeting.style.color == "red"
}