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

/*
localStorage.setItem('firstname', 'Anton')
localStorage.setItem('lastname', 'Laza')
localStorage.setItem('age', 23)
localStorage.setItem('country', 'AT')

console.log(localStorage)
console.log(localStorage.key(0))
*/

// Level 2
// 2-1

localStorage.removeItem('firstname')
localStorage.removeItem('lastname')
localStorage.removeItem('age')
localStorage.removeItem('country')

const student = {
    lastName: "Laza",
    firstName: 'Anton',
    age: 23,
    country: 'AT'
}

const student2 = JSON.stringify(student, undefined, 2)
localStorage.setItem('student', student2)


// Level 3
// 3-1
const personAccount = {
    firstName: 'Anton',
    lastName: 'Laza',
    incomes: [1000, 2000, 3000],
    expenses: [500, 600, 700],

    totalIncome: function () {
        let total = 0;
        for (let i = 0; i < this.incomes.length; i++) {
            total += this.incomes[i]
        }
        return total
    },

    totalExpenses: function () {
        let total = 0;
        for (let i = 0; i < this.expenses.length; i++) {
            total += this.expenses[i]
        }
        return total
    },

    accountInfo: function () {
        return `${this.firstName} ${this.lastName} has a balance of ${this.totalIncome() - this.totalExpenses()}`
    },

    addIncome: function (income) {
        this.incomes.push(income)
        return(`${income} has been added to the incomes`)
    },

    addExpense: function (expense) {
        this.expenses.push(expense)
        return(`${expense} has been added to the expenses`)
    },

    getBalance: function () {
        return this.totalIncome() - this.totalExpenses()
    }
}

localStorage.clear()
localStorage.setItem('personAccount', JSON.stringify(personAccount, undefined, 2))
console.log(localStorage.getItem('personAccount'))


