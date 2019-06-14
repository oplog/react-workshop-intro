import React from 'react';

class ConditionalComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleClick = (e) => {
        this.setState(function (state, props) {
            return { count: state.count + 1 }
        });
    }

    render() {
        return (
            <div>
                <a href="#" onClick={this.handleClick}>Click me!</a>
                <h1>Count: {this.state.count}</h1>
                {/* Conditional rendering */}
                {this.state.count > 5 ? <h2>Greater than 5</h2> : <h2>Less than 5</h2>}

                {/* Prevent component from rendering */}
                {/* {this.state.count > 5 ? <h2>Greater than 5</h2> : null} */}

                {/* Decide which component to render  */}
                {/* {this.state.count > 5 ? <GreaterThanFive/> : <LessThanFive/>} */}

            </div>);
    }
}

export default ConditionalComponents;