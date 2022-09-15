import React, { Component } from "react";
import './app-header.sass'
import { Button } from "reactstrap";
import { data } from '../learn-data'

export default class AppHeader extends Component {

    render() {
        return(
            <div className="wrapper">
                {Object.keys(data).map((key: string) => {
                    return <Button color="info" outline>{key}</Button>
                })}
            </div>
        )
    }
}