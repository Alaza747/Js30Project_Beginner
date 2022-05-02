function fullName(firstName, lastName){
    console.log(`${firstName} ${lastName}`)
}

function addNumbers(x, y){
    console.log(`${x+y}`)
}

function areaOfRectangle(l, w){
    console.log(`Area = ${l * w}`)
}

function areaOfCircle(r){
    let area = Math.PI * r * r
    console.log(`Area of Circle = ${area}`)
}

function tempConverter(Cels){
    let Fahr = Cels * 9 / 5 + 32
    console.log(`${Cels} Celsius degrees is = ${Fahr} degrees in Fahrenheit`)
}

function checkSeason(month){
    let x = ""
    if (month.toLowerCase() == "december" || month.toLowerCase() == "january" || month.toLowerCase() == "february") {
        x = "winter"
    } else if (month.toLowerCase() == "march" || month.toLowerCase() == "april" || month.toLowerCase() == "may") {
        x = "spring"
    } else if (month.toLowerCase() == "june" || month.toLowerCase() == "july" || month.toLowerCase() == "august"){
        x = "summer"
    } else if (month.toLowerCase() == "september" || month.toLowerCase() == "october" || month.toLowerCase() == "november"){
        x = "autumn"
    } else {
        x = "not a month"
    } 
    console.log(x)
}

function solveLinEquation(a, b, c){
    console.log(`Your linear equation is = \n${a}*x + ${b}*y + ${c} = 0`)
    console.log(`${a}x = ${-b}y - ${c}`)
    console.log(`x = ${-b/a}y - ${c/a}`)
    let x = (-b/a) - (c/a)   
    console.log(`X = ${x}`)
}

solveLinEquation(4,8,2)