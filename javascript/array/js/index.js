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

// const NEW_USERS = USERS.map(user => user.toUpperCase())
// console.log(NEW_USERS)

// const USERS_OBJ = USERS.map( item =>
// {
// return {userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}` }
// }
// )

// console.log(USERS_OBJ)


// Object(Nesne) Nedir ? Nasıl Oluşturulur?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// Object(Nesne) Nedir ? Nasıl Oluşturulur?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// let arrayObj = [1, 2, 3]
// let object1 = {obj: 1,test:2,test2:3}

// let item4 = new Object()
// item4.brand = 'Apple'
// item4.name = 'iPhone'
// item4.version = '11'
// item4.osVersion = '16.5'
// item4['1bir'] = 'test'

// console.log(item4)

// let show = {
//     showName:"How I Met Your Mother",
//     characters:[
//     {

//   	name:"Ted",
//   	age: 35,
//   	job: ["Architect"]
//   },
//   {
//   	name: "Robin",
//   	age: 32,
//   	job: ["News Anchor", "Pop-Star"]
//   }
//   ]
// };

// console.log(show.characters[1].job[1])



var person = {
	name: 'Rumeysa',
	surname: 'Turgut',
	age: 23,
	city: 'Istanbul',
	introduce: () => {
		return `My name is ${person.name} ${person.surname}, I'm ${person.age} yo.`;
	},
};

console.log(person.introduce());


var birey = {
	isim: 'Ali',
	soyisim: 'Veli',
	dogumYili: 1989,
	merhabaDe: (age) => `Merhaba, ben ${birey.isim} ${birey.soyisim}, ${age} yaşındayım`,
};
birey.yasHesapla = function () {
	return 2021 - this.dogumYili;
};
console.log(birey.merhabaDe(birey.yasHesapla()));

function yaz(){console.log("Merhaba Kodluyoruz")}

console.log(yaz["name"]);


let person={name:"Selin",city:"Ankara",favoriteColor:"aqua blue"}; 
let {name:foo}=person;


