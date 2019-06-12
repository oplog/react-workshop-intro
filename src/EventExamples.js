import React from 'react';

function EventExamples() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <a href="#" onClick={handleClick}>
            Click me!
      </a>
    );
}

export default EventExamples;