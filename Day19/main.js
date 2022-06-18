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
console.log(some)

