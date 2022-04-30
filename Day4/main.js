// LEVEL 1

/*
let usrInput = prompt("Enter your age:")
if (usrInput > 18) {
    console.log(`Your age is = ${usrInput} \n
    You are old enough to drive`)
} else {
    console.log(`Your age is = ${usrInput} \n
    You are NOT old enough to drive\n
    You should wait ${18 - parseInt(usrInput)} years.`)
}


let myAge = 23
let yourAge = prompt("What is your age?")

if (yourAge > myAge){
    console.log(` You are older than me by ${parseInt(yourAge) - myAge} years`)
} else {
    console.log(`I am older than you by ${myAge - parseInt(yourAge)} years`)
}


let a = parseInt(prompt("A = ?"))
let b = parseInt(prompt("B = ?"))

a > b 
    ? console.log(` A (${a}) is bigger than B (${b})`)
    : console.log(` B (${b}) is bigger than (${a})`)


let c = parseInt(prompt("Enter some number to check if it is even:"))
if (c % 2 == 0){
    console.log(`${c} is even.`)
} else {
    console.log(` ${c} is odd.`)
}


// LEVEL 2

let grade = parseInt(prompt("What is your score?"))
if (grade < 50){
    console.log(` You have ${grade} points. That's an 'F'.`);
} else if (grade < 60 ){
    console.log(` You have ${grade} points. That's a 'D'.`);
} else if (grade < 70 ){
    console.log(` You have ${grade} points. That's a 'C'.`);
} else if (grade < 80 ){
    console.log(` You have ${grade} points. That's a 'B'.`);
} else if (grade <= 100 ){
    console.log(` You have ${grade} points. That's an 'A'.`);
} else {
    console.log(` You have entered ${grade} points. That's not a valid point number.`);
}
*/

let month = prompt("Enter the month to check it's season:").toLowerCase()
if (month == "december" || month == "january" || month == "february"){
    console.log(` You entered ${month}. Soooo it is Winter.`)
} else if (month == "june" || month == "july" || month == "august"){
    console.log(` You entered ${month}. Soooo it is Summer.`)
} else if (month == "march" || month == "april" || month == "may"){
    console.log(` You entered ${month}. Soooo it is Spring.`)
} else if (month == "september" || month == "october" || month == "november"){
    console.log(` You entered ${month}. Soooo it is Autumn.`)
} else {
    console.log(` You entered ${month}. This is not a valid month.\n
    Please enter the full month in English`)
}