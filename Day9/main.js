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
*/

// 3-4
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

let statistics = {
    sortArr: function() {
        let sortedArr = ages.sort((a, b) => a - b)
        return (sortedArr)
    },

    count: function() {
        return(ages.length)
    },

    sum: function() {
        let result = 0
        for (let i of ages){
            result += i
        }
        return(result)
    },

    min: function() {
        return(this.sortArr()[0])
    },

    max: function() {
        return(this.sortArr()[this.sortArr().length-1])
    },

    range: function() {
        let sorted = ages.sort((a, b) => a - b)
        return(sorted[sorted.length-1] - sorted[0])
    },

    mean: function() {
        return (this.sum()/this.count())
    },

    median: function() {
        let medianIndex = this.count() / 2
        if ( medianIndex % 2 == 0){
            return (this.sortArr()[medianIndex])
        } else {
            return ((this.sortArr()[medianIndex-0.5] + this.sortArr()[medianIndex+0.5])/2)
        }
        
    }
}

console.log('Sorted Array is:', statistics.sortArr())
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
