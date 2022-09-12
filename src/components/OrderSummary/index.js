import React from "react";
import css from "./style.module.css";
import { Button } from "../General/Button";
export const OrderSummary = props =>{
    return(
        <div>
            <h1>Таны захиалга</h1>
            <p>Таны Захиалсан орцууд: </p>
            <ul>
                {Object.keys(props.ingredients).map(el => 
                    (<li key={el}>
                        {props.names[el]}: {props.ingredients[el]} 
                    </li>))}
            </ul>
            <h3> Бургерийн Үнийн дүн:{props.price} ₮</h3>
            <p>Цаашаа үргэлжлүүлэх үү ?</p>
            <Button clicked={props.close} btnType="Danger" text="Татгалзах"/>
            <Button clicked={props.continue} btnType="Success" text="Үргэлжлүүлэх"/>
        </div>
    )
}