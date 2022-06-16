import { countries_data } from "./countries_data.js";

let skills = [
{ tech: 'HTML', level: 10 },
{ tech: 'CSS', level: 9 },
{ tech: 'JS', level: 8 },
{ tech: 'React', level: 9 },
{ tech: 'Redux', level: 10 },
{ tech: 'Node', level: 8 },
{ tech: 'MongoDB', level: 8 }
]


// Level 1
// 1-1

/*
localStorage.setItem('firstname', 'Anton')
localStorage.setItem('lastname', 'Laza')
localStorage.setItem('age', 23)
localStorage.setItem('country', 'AT')

console.log(localStorage)
console.log(localStorage.key(0))
*/

// Level 2
// 2-1

localStorage.removeItem('firstname')
localStorage.removeItem('lastname')
localStorage.removeItem('age')
localStorage.removeItem('country')

const student = {
    lastName: "Laza",
    firstName: 'Anton',
    age: 23,
    country: 'AT'
}

const student2 = JSON.stringify(student, undefined, 2)
localStorage.setItem('student', student2)
console.log(localStorage)