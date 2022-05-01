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
*/

let someText = ""
let i = 0
while (i < 7){
    let randCharId = Math.floor(Math.random()* 100+1).toString()
    someText += String.fromCharCode(randCharId)
    i++
}
console.log(someText)
