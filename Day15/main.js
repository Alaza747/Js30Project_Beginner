import { countries_data } from "./countries_data.js";

//creating a Class
class Person {

//constructor method to save keys of an object
    constructor(

// these are default values
        firstName = "random", 
        lastName = "randomLast", 
        age = 18, 
        country = "randomCountry", 
        city = "randomCity",
        score = 0,
        skills = []
    ) {
//passing inputs to the class
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = score
        this.skills = skills
    }
//creating a method inside a class
    getFullName() {
        const fullName = this.firstName + " " + this.lastName
        return fullName
    }
//one more custom method 
    winAddScore(){
        this.score ++
        return this.score
    }

//getter method
    get getScore(){
        return this.score
    }

//one more getter
    get getSkills(){
        return this.skills
    }

//setter method
    set addPoints(points){
        this.score += points
    }

//one more setter
    set addSkill(skill){
        this.skills.push(skill)
    }

//static methods
    static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let day = now.getDate()
        let hour = now.getHours()
        let minute = now.getMinutes()
        let second = now.getSeconds()
        if (minute < 10){
            minute = '0' + minute
        }
        if (hour < 10){
            hour = '0' + hour
        }
        if (second < 10){
            second = '0' + second
        }
        let dateMonthYear = day + '/' + month + '/' + year
        let time = hour + ':' + minute + ':' + second
        let fullTime = `${dateMonthYear} \n${time}`
        return fullTime
    }

}

//initializing a class
const person = new Person("Anton", "Laza", 23, "AT", "VIE")

console.log(person.getFullName())
console.log(person)
console.log(person.winAddScore())



//getter method 
console.log(person.getScore)
console.log(person.getSkills)

//setter method
person.addPoints = 4
person.addSkill = "JS"
console.log(person.score)
console.log(person.skills)

console.log(Person.showDateTime())


//Inheritance
class Student extends Person {
    constructor(firstName, lastName, age, country, city, score, skills, gender){
//super() for taking from the parent class
        super(firstName, lastName, age, country, city, score, skills)
        this.gender = gender
    }

    saySomething(){
        console.log('I am a person, but also a student')
    }
}

const s1 = new Student()
console.log(s1)
s1.saySomething()