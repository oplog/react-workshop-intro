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

function Components() {
    return <>
        <FunctionComponent name='Hande' />
        <ClassComponent name='Hande' />
    </>;
}

//The above two components are equivalent from React’s point of view.

export default Components;