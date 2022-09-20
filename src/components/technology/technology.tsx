import React from "react";
import TechnologyInfo from "./technology-info/technology-info";
import { data } from "../learn-data";
import './technology.sass';
import { useSelector } from 'react-redux'

export default function Technology(): JSX.Element {
    const currentTechnology = useSelector((state: any) => state.currentTechnology.value);
    return(<>
        {Object.keys(data).map((technology: any) => {
            if (technology === currentTechnology) {
                const technologyArgs = {
                    className: "technology",
                    data: data[technology],
                }
                
                return(
                    <div className="technology" key={technology}>
                        <TechnologyInfo {...technologyArgs}/>
                    </div>
                );
            }
            return null;
        })};
    </>)
}