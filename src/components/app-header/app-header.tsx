import React from "react";
import { Button } from "reactstrap";
import { data } from '../learn-data';
import { useDispatch } from 'react-redux';
import { changeTechnology } from '../../slices/selectTechnologySlice';
import style from './AppHeader.module.sass';

export default function AppHeader() {
    const dispatch = useDispatch();

    return(
        <div>
            {Object.keys(data).map((key: string) => {
                console.log(style);
                return <Button color="info" className={style.btn} key={key} outline onClick={() => dispatch(changeTechnology(key))}>{key}</Button>
            })}
        </div>
    )
}