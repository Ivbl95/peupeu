import React, { Component } from "react";
import TechnologyTheme from "../technology-theme/technology-theme";

export interface TechnologyInfoProps {
    data: any;
}

export default class TechnologyInfo extends Component<TechnologyInfoProps, {}> {

    render() {
        const { data }: TechnologyInfoProps = this.props;

        return Object.keys(data).map((theme) => {
            const technologyInfoArgs = { themeInfo: data[theme] };

            return(
                <div className="theme" key={theme}>
                    <div>{theme}</div>
                    <TechnologyTheme {...technologyInfoArgs}/>
                </div>
            );
        });
    }
}