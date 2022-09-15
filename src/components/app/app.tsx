import React, { Component } from "react";
import AppHeader from "../app-header/app-header";
import "bootstrap/dist/css/bootstrap.css"
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
                <h2>Plans</h2>
                <div>Connecting to database</div>
                <div>Adding redux</div>
                <div>Adding git</div>
            </div>
        );
    }
}

export default App;