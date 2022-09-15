import React, { Component } from "react";
import TechnologyInfo from "./technology-info/technology-info";
import { data } from "../learn-data";
import './technology.sass';

export default class Technology extends Component {
    render() {
        return Object.keys(data).map((technology: any) => {
            const technologyArgs = {
                className: "technology",
                data: data[technology],
            }

            return(
                <div className="technology">
                    <TechnologyInfo {...technologyArgs}/>
                </div>
            );
        });
    }
}