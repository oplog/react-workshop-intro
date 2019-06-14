import React from 'react';

// function component
function FunctionComponent(props) {
    return <h1>1. Hello, {props.name}</h1>;
}

// class component
class ClassComponent extends React.Component {
    render() {
        return <h1>2. Hello, {this.props.name}</h1>;
    }
}

function ComponentExamples() {
    return <>
        {/* Passing props to components */}
        <FunctionComponent name='Hande' />
        <ClassComponent name='Hande' />
        {/* Composing components */}
        {/* <FunctionComponent name='Hande' />
        <FunctionComponent name='Hande' />
        <FunctionComponent name='Hande' />
        <FunctionComponent name='Hande' /> */}
    </>;
}

//The above two components are equivalent from React’s point of view.

export default ComponentExamples;


// pure function
function sum(a, b) {
    return a + b;
}
