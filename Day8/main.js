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
//console.log(Object.values(anton))

const users1 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

//SignUp function that checks if the input username is already in the database  
//If not, it will add the username to the database 
function signUp (login) {
    for(let i = 0; i < Object.keys(users1).length; i++) {
        if(login == users1[i].username){
            return "Is already registered."
        }
    }
    users1.push({
        id: "111111",
        username: login, 
        email: `${login}@gmail.com`
    })
    return "New User registered."
}

//This function checks if login and emailPwd (alias password) are present in the database 
function signIn(login, emailPwd){
    for(let i = 0; i < Object.keys(users1).length; i++) {
        if(login == users1[i].username && emailPwd == users1[i].email){
            return `Credentials are correct! Welcome back ${login}`
        }
    }
    return `Unfortunately, ${login}, the credentials are not correct.`
}

console.log(signIn("Thomas", "n@thomas.com"))
