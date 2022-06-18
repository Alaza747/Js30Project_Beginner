import { countries_data } from "./countries_data.js";


const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };


// good
const arrGood = Array.from(arrLike);
console.log(arrLike)
console.log(arrGood)