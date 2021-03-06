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
//console.log(catsWeight)

// 3-2
// Read the countries api and find out the 10 largest countries

const area = []

const fetchCountries = async() => {
    try{   
        let response = await fetch(countriesAPI)
        let data = await response.json()
        for(let i = 0; i < data.length; i++){
            if(data[i].area == undefined){
                data[i].area = 0
            }
            area.push({
                "country": data[i].name,
                "area" : data[i].area})
        }
        area.sort((a, b) => b.area - a.area)
        console.log("TOP 10 Countries by Area")
        for (let x = 0; x < 10; x++){
            console.log(`${x} =`, area[x])
        }
    }
    catch(err) {
        console.log(err)
    }
}

//fetchCountries()

// 3-3
// Read the countries api and count total number of languages in the world used as officials.

const fetchCountriesLang = async() => {
    try{
        let response = await fetch(countriesAPI)
        let data = await response.json()
        const langArr = []
        for (let i = 0; i < data.length; i++){
            let lang = data[i].languages
            for (let x = 0; x < lang.length; x++){
                let l = lang[x].name
                if(langArr[l] != undefined && langArr[l] != 0){                
                    langArr[l] += 1
                } else {
                    langArr[l] = 1
                }
            }
        }
        console.log(Object.entries(langArr).sort((a, b) => b[1] - a[1]))

    } catch(err) {
        console.log(err)
    }
}

fetchCountriesLang()
