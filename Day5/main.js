// LEVEL 1
/*
const arr = Array(6)
console.log(arr.length)
arr.fill(1)
console.log(arr[0], arr[arr.length/2], arr[arr.length-1])

const mixedDataTypes = [1, true, "hi", [1,2,3,4], 10.8, 134]
console.log(mixedDataTypes.length)
*/

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

/*
console.log(itCompanies, itCompanies.length)

let comp = prompt("What company do you want to check?")

if (itCompanies.includes(comp)){
    console.log(comp)
} else {
    console.log("Is not found.")
}

console.log(itCompanies.filter(company => company.includes("o")))


console.log(itCompanies.sort())
console.log(itCompanies.reverse())

console.log(itCompanies.slice(0,3))

console.log(itCompanies)
//console.log(itCompanies.slice(0, itCompanies.length - 3))

//console.log(itCompanies.slice(itCompanies.length/2,itCompanies.length/2+1))

//console.log(itCompanies.shift())
//console.log(itCompanies.pop())
console.log(itCompanies.splice(itCompanies.length/2, itCompanies.length/2+1))
console.log(itCompanies)
*/

//LEVEL 2

import { webTechs } from "./web_techs.js"
import { countries } from "./countries.js"
/*
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.toString()
words = words.replace(/[^a-zA-Z0-9 ]/g, '').split(' ');

console.log(words)
console.log(words.length)
*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
/*
if (shoppingCart[0] !== "Meat"){
    shoppingCart.unshift('Meat')
}

if (shoppingCart[shoppingCart.length-1] !== "Sugar") {
    shoppingCart.push("Sugar")
}

let allergic = prompt("Are you allergic to Honey?").toLowerCase()

if (allergic == "yes" && shoppingCart.includes('Honey')) {
    let i = shoppingCart.indexOf("Honey")
    shoppingCart.splice(i, 1)
    console.log("we are here")
} else {
    console.log("not okay")
}

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea"



if (countries.includes("Ethiopia")) {
    console.log(countries[countries.indexOf("Ethiopia")].toUpperCase())
}

if (webTechs.includes("Sass")) {
    console.log(countries[countries.indexOf("Sass")] + "is a CSS preprocess")
} else {
    webTechs.push("Sass")
    console.log(webTechs)
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//LEVEL 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())
console.log(" Max = " + Math.max(...ages) + "\n", "Min = " + Math.min(...ages))
console.log(" Range = " + (Math.max(...ages) + Math.min(...ages)))
console.log(ages.reduce((a, b) => a + b, 0))

if (countries.length % 2 == 0){
    console.log(countries[countries.length/2], countries[countries.length/2+1])
} else {
    console.log(countries[countries.length/2+0.5])
}
*/

const middleIndex = Math.ceil(countries.length / 2)
if (countries.length % 2 == 1) {
    countries.push("Austria")
}

if (countries.length % 2 == 0){
    let cont1 = [], cont2 = []
    cont1 = countries.splice(0, middleIndex)
    cont2 = countries.splice(-middleIndex)
    console.log(cont1, cont2)
}