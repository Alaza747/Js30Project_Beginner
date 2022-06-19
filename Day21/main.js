import { countries_data } from "./countries_data.js";

// Level 1
// 1-1 Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

const getP = document.getElementsByTagName('p')


for (let i in getP){
    console.log(getP[i])
}

// 1-2 