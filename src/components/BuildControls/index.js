import React from "react";
import { BuildControl } from "../BuildControl";
import css from "./style.module.css"
export const BuildControls = props =>{
    return(
        <div className={css.BuildControls}>
            <p>Бургерийн үнэ: {props.price} ₮ </p>
            {
                Object.keys(props.names).map(el =><BuildControl key={el} disabled={props.disabledIngredient} ortsHasah={props.ortsHasah} ortsNemeh={props.ortsNemeh} type={el} orts={props.names[el]}/>)
            }
            <button onClick={props.order} disabled={props.disabled} className={css.OrderBtn} >Захиалах</button>
        </div>
    )
}