let challenge = "30 Days of JavaScript"
/*
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())

console.log(challenge.substr(3, 4))
console.log(challenge.substring(3))

console.log(challenge.includes("Script"))

console.log(challenge.split(' '))

let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(','))

console.log(challenge.replace("JavaScript", "Python"))

console.log(challenge.charAt(15))
console.log(challenge.charCodeAt("J"))

console.log(challenge.indexOf("a"))
console.log(challenge.lastIndexOf("a"))


let text = 'You cannot end a sentence with because because because is a conjunction'
console.log(text.indexOf("because"))
console.log(text.lastIndexOf("because"))

console.log(text.search("because"))

console.log(challenge.trim())
console.log(challenge.startsWith("30"))
console.log(challenge.endsWith("t"))
console.log(challenge.match("a"))

let a = '30 Days of'
let b = 'JavaScript'
console.log(a.concat(b))

console.log(challenge.repeat(2))
*/


//Level 2
/*
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")


console.log(typeof(parseInt("10")) == typeof(10))
console.log(parseFloat("9.8"))
console.log(parseInt("9.8") == 10)

let a = "Python", b = "Jargon"

console.log(a.includes('on') == b.includes('on'))

let text2 = "I hope this course is not full of jargon."

console.log(text2.includes("jargon"))

console.log(Math.floor((Math.random()*101)))
console.log(Math.floor(Math.random()*51) + 50)
console.log(Math.floor(Math.random()*256))

console.log(challenge[Math.floor((Math.random()*challenge.length))])

let a = 1, b = 2, c = 3, d = 4, e = 5
console.log(`${a} 1 ${a} ${a**2} ${a**3} \n
${b} 1 ${b} ${b**2} ${b**3} \n
${c} 1 ${c} ${c**2} ${c**3} \n
${d} 1 ${d} ${d**2} ${d**3} \n
${e} 1 ${e} ${e**2} ${e**3} \n`)

for(i=1; i<6; i++){
    console.log(`${i} 1 ${i} ${i**2} ${i**3}`);
}

let text3 = "You cannot end a sentence with because because because is a conjunction"
console.log(text3.substring(31, 55))
*/

// LEVEL 3

let text_4 = "Love is the best thing in this world. Some found their love and some are still looking for their love."
let pattern = /love/gi
console.log(text_4.match(pattern))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replace(/[^a-zA-Z0-9 ]/g,''))

let incomeText = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
income = incomeText.match(/\d+/gi)
console.log(income)

console.log(parseInt(income[0]))
