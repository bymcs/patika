let id = prompt("ID'niz Nedir ?")

let info = document.querySelector('#myName')

info.innerHTML = `${id}`

function time(){
    let dateData = new Date()
    let hours = dateData.getHours()
    let minutes=dateData.getMinutes()
    let seconds=dateData.getSeconds()
    
    let days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']
    let dayName = days[dateData.getDay()]
    
    let info =document.querySelector("#myClock")
    info.innerHTML = `${hours}:${minutes}:${seconds} ${dayName}`
    
    }
    setInterval(time,1000);//Saatimizin anlık olarak güncellenmessini sağlıyor.