import React from 'react';

// JSX syntax
// neither a string nor HTML
const element1 = <h1>Hello, world!</h1>;

function HelloWorld(props) {
    return element1;
}

// // use inside JSX by wrapping it in curly braces
// const name = 'Hande';
// const element2 = <h1>Hello, {name}</h1>;

// function HelloWorld(props) {
//     return element2;
// }

// you can use JSX inside of if statements and for loops
// function getGreeting(user) {
//     if (user) {
//         return <h1>Hello, {user}!</h1>;
//     }
//     return element1;
// }
// const element3 = getGreeting('Emre');

// function HelloWorld(props) {
//     return element3;
// }

export default HelloWorld;