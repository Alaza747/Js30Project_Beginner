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
*/
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea"
console.log(countries)