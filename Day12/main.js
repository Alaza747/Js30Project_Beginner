// Level 1

let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
let sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
let distance = 12
let income = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."

// 1-1
/*
let pattern = /\d+/g
let result = income.match(pattern).map((a) => parseInt(a, 10)).reduce((sum, a) => sum += a)
console.log(result)
*/
// 1-2
let test = "first_name"
let test2 = "first-name"
let test3 = "1first_name"
let test4 = "firstname"
let pattern = /[^A-Z0-9]+/g
console.log(test.match(pattern))
console.log(test2.match(pattern))
console.log(test3.match(pattern))
console.log(test4.match(pattern))

/*
function is_valid_variable(input){
    //return input
}

is_valid_variable('first_name') // True
is_valid_variable('first-name') // False
is_valid_variable('1first_name') // False
is_valid_variable('firstname') // True
*/