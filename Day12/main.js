// Level 1

let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
let sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
let distance = 12
let income = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."

// 1-1
let pattern = /\d+/g
let result = income.match(pattern).map((a) => parseInt(a, 10)).reduce((sum, a) => sum += a)
console.log(result)

