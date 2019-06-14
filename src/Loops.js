import React from 'react';

class Loops extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [1, 2, 3, 4, 5, 6]
        };
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.numbers.map((number) =>
                            <li key={number.toString()}>{number}</li>
                        )}
                </ul>
            </div>);
    }
}

export default Loops;