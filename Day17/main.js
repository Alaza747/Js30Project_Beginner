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

//important to stringify first or it will be destructured
let skillJSON = JSON.stringify(skills)
localStorage.setItem('skills', skillJSON)
localStorage.setItem('Age', 200)
let html = localStorage.getItem('Age')

console.log(html)