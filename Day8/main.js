/* const dog = {
    name: "Deb",
    legs: 4,
    color: "white",
    age: 2,
    bark: function() {
        return "WOOF WOOF"
    }
}

dog.breed = "Pomeranian"
dog.getDogInfo = function() {
    return `His name is ${this.name}, he is of ${this.color} color, he is ${this.age} years old, ${this.breed}.`
}

console.log(dog.getDogInfo())

*/

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }


function countSkills(x){
    const skillArr = []
    for (const person of Object.entries(x)){
        skillArr.push(person[1].skills.length)
    }
    let indexHighSkill = skillArr.indexOf(Math.max(...skillArr)) 
    return Object.keys(users)[indexHighSkill]
}

//console.log(`The person with the highest number of skills is ${countSkills(users)}`)

function numLogged(x){
    let num = 0
    for (const person of Object.entries(x)){
        if(person[1].isLoggedIn == true){
            num++
        }
    }
    return num
}

//console.log(`The number of logged in users is ${numLogged(users)}`)

let MERN = ["MongoDB", "Express", "React", "Node"]

function multipleCheck(userSkills, stackToCheck){
    return stackToCheck.every(element => {
        return userSkills.includes(element)
    })
}

function mernUsers(x){
    let num = 0
    for (const person of Object.entries(x)){
        if(multipleCheck(person[1].skills, MERN)) {
            num++
        }
    }
    return num
}

//console.log(`The number of MERN Stack users is ${mernUsers(users)}`)

const anton = Object.assign({}, users)
anton.Anton = {email: "HI", skills: ["HTML", "CSS", "JS"], age: 23}
console.log(Object.values(anton))