// LEVEL 1
/*
// 1-1
let a = new Set()

// 1-2
let a = [1,2,3,4,5,6,7,8,9,10]
let b = new Set()
for(const x of a){
    b.add(x)
}

// 1-3
b.delete(5)

// 1-4
b.clear()


// 1-5
let c = ["a", "b", "c", "d", "e"]
let b = new Set(c)


// 1-6
let c = [["Finland", 7],[ "Sweden", 6]]
let d = new Map(c)
*/

// LEVEL 2

// 2-1
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)


// 2-2 
let d = a.filter((number) => B.has(number))
let D = new Set(d)
console.log(D)

