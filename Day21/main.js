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

// 1-4 Loop through the nodeList and get the text content of each paragraph

for (let i in getSomeP){
    console.log(getSomeP[i].textContent)
}

// 1-5 Set a text content to paragraph the fourth paragraph,Fourth Paragraph

getSomeP[3].textContent = 'Fourth Paragraph'

// 1-6 Set id and class attribute for all the paragraphs using different attribute setting methods

getSomeP[0].classList.add('new_id')
getSomeP[1].id = 'Some_Id_cooler'
getSomeP[2].setAttribute('class', 'someClass')
getSomeP[3].setAttribute('id', 'lastId')

// Level 2
// 2-1 Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

getSomeP[0].style.color = 'green'
getSomeP[1].style.backgroundColor = 'red'
getSomeP[2].style.fontSize = '10px'

// 2-2 Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
getSomeP.forEach((elem, i) => {
    elem.style.color = 'black'
    elem.style.fontSize = '18px'
    elem.style.backgroundColor = 'white'
    if(i % 2 == 0){
        elem.style.color = 'red'
    } else {
        elem.style.color = 'green'
    }
})