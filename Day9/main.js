const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


const eachUppercase = countries.map((country) => country.toUpperCase())
/*
countries.forEach(country => {
   console.log(country) 
});

console.log(countries.map((country) => country.length))

console.log(numbers.map((number) => number**2))

console.log(names.map((name) => name.toUpperCase()))

products.map((product) => console.log(`${product.product} costs ${product.price}`))

console.log(countries.filter((country) => country.includes('land')))

console.log(countries.filter((country) => country.length == 6))

console.log(countries.filter((country) => country.length >= 6))

console.log(countries.filter((country) => country.startsWith("E")))
*/

// 1-16 
function getStringLists(arr){
    const cleanArr = []
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === 'string'){
            cleanArr.push(arr[i])
        }
    }
    return cleanArr
}
