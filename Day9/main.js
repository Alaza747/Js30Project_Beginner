import { countries_data } from "./countries_data.js"

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


const eachUppercase = countries.map((country) => country.toUpperCase())
/*
countries.forEach(country => {
   console.log(country) 
});

console.log(countries.map((country) => country.length))

console.log(numbers.map((number) => number**2))

console.log(names.map((name) => name.toUpperCase()))

products.map((product) => console.log(`${product.product} costs ${product.price}`))

console.log(countries.filter((country) => country.includes('land')))

console.log(countries.filter((country) => country.length == 6))

console.log(countries.filter((country) => country.length >= 6))

console.log(countries.filter((country) => country.startsWith("E")))


// 1-16 
function getStringLists(arr){
    const cleanArr = []
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === 'string'){
            cleanArr.push(arr[i])
        }
    }
    return cleanArr
}


// 1-17
let sum = numbers.reduce((acc, cur) => acc + cur, 0)


// 1-18 not done
let abc = countries.reduce((acc, cur) => acc += cur, '')
console.log(abc)


// 1-20
console.log(names.some((name) => name.length > 7))

// 1-21
console.log(countries.every((country) => country.includes('land')))


// 1-23
console.log(countries.find((country) => country.length == 6))

// 1-24
console.log(countries.findIndex((country) => country.length == 6))

// 1-25
console.log(countries.findIndex((country) => country == 'Norway'))

// 1-26
console.log(countries.findIndex((country) => country == 'Russia'))


//LEVEL 2
// 2-1
console.log(products.map((product) => product.price).reduce((acc, cur) => acc += Number(cur)))

// 2-2
console.log(products.reduce((acc, cur) => acc += Number(cur.price),0))


// 2-3
function categorizeCountries(arr, pattern){
    return arr.filter((country) => country.includes(pattern))
}


//LEVEL 3
// 3-1
import {countries_data} from './countries_data.js'
console.log(countries_data.sort((a, b) => {
    let fa = a.name.toLowerCase()
    let fb = b.name.toLowerCase()
    if(fa > fb){
        return -1
    }
    if(fa < fb){
        return 1
    }
    return 0
}))


console.log(countries_data.sort((a, b) => b.population - a.population)[1])


// 3-2
const count = {}

function mostSpokenLanguages(numLang){
    for(const i of countries_data){
        for(const x of i.languages){
            if(count[x]){
                count[x] ++
            } else {
                count[x] = 1
            }
        }
    }
    let sortedLang = Object.entries(count).sort((a, b) => b[1] - a[1])
    for (let a = 0; a < numLang; a++){
        console.log(sortedLang[a])
    } 
}
mostSpokenLanguages(10)
*/

// 3-3

const countries_num = []

function mostPopulatedCountries(numCountries){
    for (const i of countries_data){
        let test = {}
        test['country'] = i.name
        test['population'] = i.population
        countries_num.push(test)
    }
    let result = countries_num.sort((a, b) => b['population'] - a['population'])
    console.log(result.slice(0,numCountries))
}

mostPopulatedCountries(10)