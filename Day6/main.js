//LEVEL 1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
'HTML',
'CSS',
'JavaScript',
'React',
'Redux',
'Node',
'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
/*
for (let i = 0; i < 11; i++){
    console.log(i);
}

let x = 0
while (x < 11) {
    console.log(x);
    x++;
}

let y = 0
do{
    console.log(y)
    y++
} while (y < 5)


for(let i = 10; i > 0; i--){
    console.log(i)
}

let n = prompt("N = ?")
for (let i = 0; i < n; i++ ){
    console.log(i)
}


for (let i = 0; i < 7; i++){
    console.log("#".repeat(i))
}


for (let i = 0; i < 11; i++){
    console.log(`${i} * ${i} = ${i*i}`)
}


for (let i = 0; i < 11; i++){
    console.log(`${i}\t${i**2}\t${i**3}`)
}


let i = 0
while (i < 101){
    if(i % 2 == 0){
        console.log(i)
    }
    i++
}

let sum = 0
for (let i = 0; i < 101; i++){
    sum += i
}
console.log(sum)


let sumEven = 0
let sumOdd = 0
for (let i = 0; i < 101; i++){
    if (i % 2 == 0){
        sumEven += i
    } else {
        sumOdd += i
    }
}

let sumArr = [sumEven, sumOdd]
console.log(sumArr)


let randArr = []
let randNum = 0
for (let i = 0; i < 5; i++){
    randNum = Math.floor(Math.random()*7)
    console.log(randNum)
    if(randArr.includes(randNum) == false) {
        console.log(randArr.includes(randNum))
        randArr.push(randNum)
    } else {
        console.log("error. Already in array")
    }
}
console.log(randArr)


let randArr = []
while(randArr.length < 5){
    let randNum = Math.floor(Math.random()*7)
    console.log(randNum)
    if(randArr.includes(randNum) == false) {
        console.log(randArr.includes(randNum))
        randArr.push(randNum)
    } else {
        console.log("Error. Already in array")
    }
}
console.log(randArr)


let someText = ""
let i = 0
while (i < 7){
    let randCharId = Math.floor(Math.random()* 100+1).toString()
    someText += String.fromCharCode(randCharId)
    i++
}
console.log(someText)


let numLetters = prompt("How many chars do you want?")
let randCharStr = ""
for (let i = 1; i <= numLetters; i++){
    let randChar = Math.floor(Math.random() * (122-48) + 48).toString()
    randChar = String.fromCharCode(randChar)
    randCharStr += randChar
}
console.log(randCharStr)


let randomColor = Math.floor(Math.random()*16777215).toString(16)
console.log(randomColor)


const rgbArr = []
for(let i = 0; i < 3; i++){
    let value = Math.floor(Math.random()* 255 + 1)
    rgbArr.push(value)
}
console.log(`rgb(${rgbArr.toString(',')})`)


const countriesUpper = []
let i = 0
while(i < countries.length){
    countriesUpper.push(countries[i].toUpperCase())
    i++
}
console.log(countriesUpper)


const countriesLength = []
let i = 0
while (i < countries.length){
    countriesLength[i] = countries[i].length
    i++
}
console.log(countriesLength)


const fullCountryArr = []
let i = 0
while (i < countries.length){
    fullCountryArr[i] = [countries[i], countries[i].slice(0,3).toUpperCase(), countries[i].length]
    i++
}
console.log(fullCountryArr)


const landArr = []
let i = 0
while (i < countries.length){
    if(countries[i].includes("land")) {
        landArr.push(countries[i])
    }
    i++
}
console.log(landArr)


const iaArr = []
let i = 0
while (i < countries.length){
    if(countries[i].endsWith("ia")) {
        iaArr.push(countries[i])
    }
    i++
}
console.log(iaArr)


const charLengthArr = []
let i = 0
while (i < countries.length){
    charLengthArr[i] = countries[i].length
    i++
}
console.log(countries[charLengthArr.indexOf(Math.max(...charLengthArr))])


const charLengthArr = []
let i = 0
while (i < countries.length){
    if (countries[i].length == 5){
        charLengthArr.push(countries[i])
    }
    i++
}
console.log(charLengthArr)


const charLengthArr = []
let i = 0
while (i < webTechs.length){
    charLengthArr[i] = webTechs[i].length
    i++
}
console.log(webTechs[charLengthArr.indexOf(Math.max(...charLengthArr))])


let mern = ""
let i = 0

while (i < mernStack.length){
    mern += mernStack[i][0]
    i++
}
console.log(mern)


const fruit = ['banana', 'orange', 'mango', 'lemon']
const fr = []
for(let i = fruit.length-1; i >= 0; i--){
    fr.push(fruit[i])
}
console.log(fr)


const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
let full = fullStack.join().split(',')
for (let i = 0; i < full.length; i++){
    console.log(`${full[i]}\n`)
}
*/

