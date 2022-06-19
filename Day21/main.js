import { countries_data } from "./countries_data.js";

// Level 1
// 1-1 Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

const getP = document.getElementsByTagName('p')

/*
for (let i in getP){
    console.log(getP[i])
}
*/

// 1-2 Get each of the the paragraph using document.querySelector('#id') and by their id

const getId = document.querySelector('#second')
console.log(getId) 

// 1-3 Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

const getSomeP = document.querySelectorAll('p')
console.log(getSomeP)