/*
let number = prompt("Text please:...", ",maximum n symbols")
console.log(number)


const confirmation = confirm("Would you like to confirm?")
console.log(confirmation)


let b = prompt("Enter Base: ", "?")
let h = prompt("Enter Height: ", "?")
let area = 0.5 * b * h 

console.log(`Base = ${b} \n
Height = ${h} \n
The area of the Triangle is = ${area}`)


let length = prompt("Enter the length of the rectangle:")
let height = prompt("Enter the height of the rectangle:")
let perimeter = 2 * (parseInt(length) + parseInt(height))

console.log(`The lenght = ${length}\n
The height = ${height}\n
The perimeter is then = ${perimeter}`)


let firstName = prompt("Enter your name:")
firstName.length > 7
    ? console.log("Name is too long.")
    : console.log("Name is ok.")


let firstName = prompt("Enter your name:")
let lastName = prompt("Enter your name:")
firstName.length > lastName.length
    ? console.log(`Your first name (${firstName}) is longer than your last name (${lastName}).`)
    : console.log(`Your first name (${firstName}) is shorter than your last name (${lastName}).`)
*/

const timeNow = new Date()
let year = timeNow.getFullYear()
let month = timeNow.getMonth() + 1
let date = timeNow.getDate()
let hours = timeNow.getHours()
let minutes = timeNow.getMinutes()
let seconds = timeNow.getSeconds()

date < 10
    ? date = "0" + date 
    : date = date
    
month < 10
    ? month = "0" + month
    : month = month

hours < 10
    ? hours = "0" + hours
    : hours = hours

minutes < 10
    ? minutes = "0" + minutes
    : minutes = minutes
    
seconds < 10
    ? seconds = "0" + seconds
    : seconds = seconds

console.log(`\t${date}/${month}/${year}  \n
\t ${hours}:${minutes}:${seconds}`)