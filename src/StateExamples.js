import React from 'react';

class Today extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            now: new Date(),
            count: 0
        };
    }

    // Mounting
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // Unmounting
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            now: new Date()
        });

        // React merges the object you provide into the current state
        // Don't access this.state from this.setState
        this.setState({
            count: this.state.count + 1
        });

        // Use setState with a function instead
        this.setState(function (state, props) {
            return { count: state.count + 1 }
        });
    }

    render() {
        return (
            <div>
                <h1>Now: {this.state.now.toLocaleString()}</h1>
                <h1>Count: {this.state.count}</h1>
            </div>);
    }
}

export default Today;
