import { countries_data } from "./countries_data.js";


// Level 1

// 1-1 Create a closure which has one inner function


function name () {
    let name = "Anton"
    function addName() {
        name += " Laza"
        return name
    } 

    return addName()
}

let some = name()
//console.log(some)

// 2-1 Create a closure which has three inner functions

function person() {
    let info = ''

    function addName(surname){
        info += surname
        return info
    }

    function addFam(Fam){
        info += ` ${Fam}`
        return info
    } 

    function addAge(age){
        info += ` is ${age} years old.`
        return info 
    }

    return{
        addName,
        addFam,
        addAge
    }
    
}

let Anton = person()
console.log(Anton.addName('Anton'))
console.log(Anton.addFam('Laza'))
console.log(Anton.addAge(23))