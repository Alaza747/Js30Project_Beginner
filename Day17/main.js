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
localStorage.setItem('firstname', 'Anton')
localStorage.setItem('lastname', 'Laza')
localStorage.setItem('age', 23)
localStorage.setItem('country', 'AT')

console.log(localStorage)
console.log(localStorage.key(0))

student