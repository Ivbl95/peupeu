import React, { Component } from "react";
import '../technology.sass'

export interface TechnologyThemeProps {
    themeInfo: any,
}

export default class TechnologyTheme extends Component<TechnologyThemeProps, {}> {

    render() {
        const { themeInfo }: TechnologyThemeProps = this.props;

        return(
            themeInfo.map((elem: any) => {
                const expression: string = Object.keys(elem)[0];
                const description: any = Object.values(elem)[0];

                return( <div key={Object.keys(elem)[0]} className='elem'>
                    <div className="expression">{expression}</div>
                    <div className="description">{description}</div>
                </div>);
            })
        )
    }
}