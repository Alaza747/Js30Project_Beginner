const dog = {
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