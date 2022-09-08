import React from "react";
import css from "./style.module.css";
export const OrderSummary = props =>{
    return(
        <div>
            <h1>Таны захиалга</h1>
            <p>Таны Захиалсан орцууд: </p>
            <ul>
                {Object.keys(props.ingredients).map(el => (<li>{props.names[el]}: {props.ingredients[el]} </li>))}
            </ul>
        </div>
    )
}