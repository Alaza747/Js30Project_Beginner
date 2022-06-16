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


// Async/Await
