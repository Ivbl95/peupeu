import React, { Component } from "react";
import AppHeader from "../app-header/app-header";
import './app.sass'
import Technology from "../technology/technology";

class App extends Component {
    render() {
        return (
            <div className='container'>
                <AppHeader/>
                <Technology/>
                <h2>History</h2>
                <div>25.08 The website was created</div>
                <div>29.08 A ssl was added</div>
                <div>30.08 Migration to React</div>
                <div>31.08 FTP was added</div>
                <div>12.09 Typescript was added</div>
                <div>15.09 Git was added</div>
                <div>19.09 Redux was added</div>
                <h2>Plans</h2>
                <div>Connecting to database</div>
            </div>
        );
    }
}

export default App;