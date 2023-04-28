let items = [10,20,30,40,50,]

let femaleUsr = ['Ayse','Fatma','Hayriye','Nuray']
let maleUsr = ['Ahmet','Mehmet','Mustafa']


// items.push(femaleUsr)
// items.push(maleUsr)

// console.log(items)

// console.log(items[5][0])

let allUsr = [...femaleUsr, ...maleUsr]
// console.log(allUsr)

// allUsr.splice(allUsr.length - 1,0,'Can')
// console.log(allUsr)
// allUsr.splice(Math.floor(allUsr.length / 2),0,'MET')
// console.log(allUsr)


// let dizi = [2,5,8,11,15,17];

// let newArr= dizi.filter((num) => num>10).map((num2) => num2* 5)

// const listDOM = document.querySelector('#userList')

// for (let index = 0; index < allUsr.length; index++) {
    
//     if(allUsr[index] == 'Hayriye'){ continue;}
//     const liDOM = document.createElement('li')
//     liDOM.innerHTML = allUsr[index]
//     listDOM.appendChild(liDOM)
    
// }

// console.log(dizi)
// console.log(newArr)


// const listDOM = document.querySelector('#userList')

// const PRODUCTS = ["Laptop","PC","Keyboard","Mouse","Server","Monitor"]

// PRODUCTS.forEach((item) => {

//     const liDOM = document.createElement('li')
//     liDOM.innerHTML = item
//     listDOM.append(liDOM)

// })

// array filter kullanimi
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 5 harften fazla olanlar (6) ??
// const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

// const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
// console.log(NEW_PRODUCTS)


// // aktif kullanicilar ??
// const USERS = [
//   {fullName: "Ayse Sumer", isActive: false},
//   {fullName: "Ahmet Urgan", isActive: true},
//   {fullName: "Asya Basar", isActive: true},
//   {fullName: "Aksel Durmaz", isActive: false},
// ]

// const ACTIVE_USER = USERS.filter(user => user.isActive)
// console.log(ACTIVE_USER)

// array map kullanimi
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]

// userName icinde orjinal isim kalsin, 
// shortName icinde ilk harf buyuk . (A.)
// newName icinde ilk harf buyuk olsun
// {userName: "AYSE", shortName: "A.", newName: "Ayse"}

const NEW_USERS = USERS.map(user => user.toUpperCase())
console.log(NEW_USERS)

const USERS_OBJ = USERS.map( item =>
{
return {userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}` }
}
)

console.log(USERS_OBJ)