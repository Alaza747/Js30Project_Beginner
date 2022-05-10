// LEVEL 1
/*
// 1-1
let a = new Set()
*/
// 1-2
let a = [1,2,3,4,5,6,7,8,9,10]
let b = new Set()
for(const x of a){
    b.add(x)
}

// 1-3
b.delete(5)
console.log(b)
