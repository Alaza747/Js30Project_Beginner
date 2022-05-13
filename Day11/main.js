import {countries_data} from './countries_data.js'
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
    {
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
    },
    {
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
    },
    {
    name:'David',
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
    },
    {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
    },
    {
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
    },
    {
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
    },
    {
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
    }
]
/*
// Level 1

// 1-1
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

// 1-2
let [fin, est, swe, den, nor] = countries
console.log(fin, est, swe, den, nor)

// 1-3 
let {width: w, height: h, area: a, perimeter: p}= rectangle
console.log(w, h, a, p)

// Level 2

// 2-1
for (const k of users){
    console.log(Object.keys(k))
}

// 2-2
for (const {name: a, scores: b,skills: c,age: d} of users){
    if(c.length < 2) {
        console.log(a, b, c, d)
    }
}

// Level 3

// 3-1

for (const {name, capital, population, languages} of countries_data){
    console.log(name, capital, population, languages)
}


// 3-2 
const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, [,,jsScore, reactScore]] = student

//console.log(name, skills, jsScore, reactScore)

// 3-3
const students = [
    ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTML', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const convertArrayToObject = stud => {
    const resArr = []
    const result = {
        name: undefined,
        skills: undefined,
        scores: undefined
    }
    for(const a of stud){
        const copiedResult = {...result, name: a[0], skills: a[1], scores: a[2]}
        resArr.push(copiedResult) 
    }
    console.log(resArr)
}

convertArrayToObject(students)
*/

// 3-4 
const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

const a = {...student}
a.skills.frontEnd.push({skill: 'Bootstrap', level: 8})
console.log(a.skills.frontEnd)