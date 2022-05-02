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
    let xSlope = (-c/a) 
    let xIntercept = (-b/a)
    console.log(`X = ${xIntercept}y + ${xSlope}`)
}

function printArray(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

function showDateTime(){
    const d = new Date()
    let day = d.getDate()
    let month = d.getMonth()
    let year = d.getFullYear()
    let hour = d.getHours()
    let minutes = d.getMinutes()
    let seconds = d.getSeconds()
    console.log(`${day}/${month}/${year} ${hour}:${minutes}:${seconds}`)
}

function sevenRandomNumbers(){
    const randomArr = []
    while(randomArr.length < 7){
        let x = Math.floor(Math.random()*10)
        if(randomArr.includes(x)){
            continue
        } else {
            randomArr.push(x)
        }
    }
    console.log(randomArr)
}

function allSameDataType(arr){
    let answer = 0
    for(let i = 0; i < arr.length; i++){
        let referenceType = typeof(arr[0])
        if(typeof(arr[i]) == referenceType){
            continue
        } else {
            answer++
        }
    }
    if(answer == 0){
        console.log("Yes")
    } else {
        console.log("No")
    }
}
