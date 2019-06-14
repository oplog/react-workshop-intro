import React from 'react';

function EventExamples() {

    function handleClick(e) {
        console.log('The link was clicked.');
    }

    // can be written as an arrow function
    // handleClick = () => {
    //     console.log('The link was clicked (arrow function).');
    // }

    return (
        <a href="#" onClick={handleClick}>
            Click me!
      </a>
    );
}

export default EventExamples;