import { countries_data } from "./countries_data.js";

// Callbacks

const doSomething = (callback) => {
    setTimeout(() => {
        const skills = ['Html', 'Css', 'Js', 'React', 'Redux', 'Node', 'MongoDB'];
        callback('Did not go well', skills);
    }, 2000);
}

const callback = (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
}

//doSomething(callback);


const doSomething2 = (callback) => {
    setTimeout(() => {
        const skills = ['Html', 'Css', 'Js', 'React', 'Redux', 'Node', 'MongoDB'];
        callback(false, skills);
    }, 2000);
}

const callback2 = (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
}

//doSomething2(callback2);


// Promises

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['Html', 'Css', 'Js', 'React', 'Redux', 'Node', 'MongoDB'];
        if (skills.length > 0) {
            resolve(skills);
        } else {
            reject('No skills');
        }
    }, 2000);
});
/*
promise.then((skills) => {
        console.log(skills);})
    .catch((error) => {
        console.log(error);
    });
*/

// Fetch API


const url = 'https://restcountries.com/v2/all';

/*
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })

    .catch((error) => {
        console.log(error);
    });

*/

// Async/Await
const square = async function (number) {
    return number ** 2;
}

const value = await square(3)
//console.log(value)


// same example as with Fetch API but this time with Async/Await
/*
const fetchData = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
    } catch (err) {
        console.error(err)
    }
}

console.log('===== async and await');
fetchData()
*/

// Level 1
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
/*
fetch(countriesAPI)
    .then((response) => {
        return response.json() 
    })
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].name, data[i].capital, data[i].population, data[i].area)
        } 
    })
    .catch((error) => {
        console.log(error)
    })
*/

// Level 2
// 2-1 
const catNames = []

const fetchCatNames = async () => {
    try {
        const response = await fetch(catsAPI)
        const catsData = await response.json()
        for (let i = 0; i < catsData.length; i++) {
            catNames.push(catsData[i].name)
        }
    } catch (err) {
        console.error(err)
    }  
}
fetchCatNames()
//console.log(catNames)

// LEVEL 3

// 3-1
const catsWeight = []
const fetchCatWeights = async() => {
    try {
        const response = await fetch(catsAPI)
        const data = await response.json()
        for (let i = 0; i < data.length; i++){
            let x = data[i].weight.metric
            let min = x.match(/[0-9]+/g)
            let avg = (parseInt(min[1]) + parseInt(min[0])) / 2
            catsWeight.push(avg)
        }
    } catch(err) {
        console.log(err)
    }
}

fetchCatWeights()
console.log(catsWeight)
