import { countries_data } from "./countries_data.js";


const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`


// Level 1
//1-1: Change skills array to JSON using JSON.stringify()
const result = JSON.stringify(skills,undefined,4)
console.log(result)

//1-2: Stringify the age variable
const result2 = JSON.stringify(age,undefined,4)
console.log(result2)

//1-3: Stringify the isMarried variable
const result3 = JSON.stringify(isMarried,undefined,4)
console.log(result3)

//1-4: Stringify the student object
const result4 = JSON.stringify(student,undefined,4)
console.log(result4)

// Level 2
//2-1: Stringify the students object with only firstName, lastName and skills properties
const result5 = JSON.stringify(student,['firstName','lastName', 'age'], 4)
console.log(result5)

// Level 3
//3-1: Parse the txt JSON to object.
const result6 = JSON.parse(txt)
console.log(result6)


//3-2: Find the user who has many skills from the variable stored in txt.
for (const a in result6){
    for(const b in result6[a]){
        //console.log(result6[a][b])
        if(Array.isArray(result6[a][b])){
            if(result6[a][b].length > 6){
                console.log(`${a} has more than 6 skills.`)
            }
        }
    }
}


