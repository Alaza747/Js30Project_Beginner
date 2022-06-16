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

doSomething(callback);


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

doSomething2(callback2);


// Promises
