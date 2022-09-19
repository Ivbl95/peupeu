import React from "react";
import './app-header.sass'
import { Button } from "reactstrap";
import { data } from '../learn-data'
import { useDispatch } from 'react-redux'
import { changeTechnology } from '../../slices/selectTechnologySlice'

export default function AppHeader() {
    const dispatch = useDispatch();

    return(
        <div className="wrapper">
            {Object.keys(data).map((key: string) => {
                return <Button color="info" outline onClick={() => dispatch(changeTechnology(key))}>{key}</Button>
            })}
        </div>
    )
}