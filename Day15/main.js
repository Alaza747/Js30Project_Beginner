import { countries_data } from "./countries_data.js";
/*
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

// Level 1

//1-1
class Animal{
    constructor(
        name = randName,
        age = randAge,
        color = randColor,
        legs = randLegs
    ) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    get info(){
        if(this.age < 2){
            this.age = 1 + ' year old'
        } else {
            this.age = this.age + ' years old'
        }

        let allInfo = `This is a ${this.name}, it is ${this.age}, it's color is ${this.color} and it has ${this.legs} legs`
        return allInfo
    }
}

class Dog extends Animal{
    constructor(name, age, color, legs, breed){
        super(name, age, color, legs = 4)
        this.breed = breed
    }

    get dogInfo(){
        return `${this.info} and his breed is ${this.breed}`
    }
}


const spitz = new Dog("Deb", 2, "white", ...[,], "pomeranian")

console.log(spitz.dogInfo)
*/

// Level 3
//3-1

class PersonAccount{
    constructor(firstName, lastName, incomes, expenses) {
        this.firstName = firstName,
        this.lastname = lastName, 
        this.income = incomes, 
        this.expenses = expenses
    }
  
    totalIncome() {
        let totalIncome = 0
        totalIncome = this.income.reduce((sum, a) => sum + a, 0)
        //totalIncome = `${this.firstName}'s total income is ${totalIncome} euros.`
        return totalIncome
    }
     
     
    totalExpense() { 
        let totalExpense = 0
        totalExpense = this.expenses.reduce((sum, a) => sum + a, 0)
        totalExpense *= -1
        //totalExpense = `${this.firstName}'s total expenses are ${totalExpense} euros.`
        return totalExpense
    }
    
    accountInfo(){
        let totalInc = 0 
        let totalExp = 0
        totalInc = this.income.reduce((sum, a) => sum + a, 0)
        totalExp = this.expenses.reduce((sum, a) => sum + a, 0)
        let info = `Account Info:
Name: ${this.firstName}.\n
Lastname: ${this.lastname}.\n
Total Income: ${totalInc} euros.\n
Total Expenses: ${totalExp} euros.`    
        return info
    }

    
    
    addIncome(a){
        this.income.push(a)
        return this.income 
    }

    addExpense(a){
        this.expenses.push(a)
        return this.expenses 
    }

    accountBalance(){
        let balance = 0
        balance += this.totalIncome()
        balance += this.totalExpense() 
        return balance
    }
    
}

const anton = new PersonAccount('Anton', 'Laza', [2,5,3,7,8], [2,6,3,2,6,1])

console.log(anton.accountBalance())