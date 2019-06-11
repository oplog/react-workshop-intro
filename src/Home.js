import React from 'react';
import logo from './logo.svg';
import './App.css';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p><a href="/">Home</a></p>
                <p><a href="/hello">HelloWorld</a></p>
                <p><a href="/components">React Components</a></p>
            </header>
        </div>
    );
}

export default Home;
