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
        score = 0
    ) {
//passing inputs to the class
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = score
    }
//creating a method inside a class
    getFullName() {
        const fullName = this.firstName + " " + this.lastName
        return fullName
    }

    winAddScore(){
        this.score ++
        return this.score
    }
}

//initializing a class
const person = new Person("Anton", "Laza", 23, "AT", "VIE")

console.log(person.getFullName())
console.log(person)
console.log(person.winAddScore())
console.log(person.winAddScore())
