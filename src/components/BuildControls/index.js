import React from "react";
import { BuildControl } from "../BuildControl";
import css from "./style.module.css"
export const BuildControls = props =>{
    return(
        <div className={css.BuildControls}>
            <p>Бургерийн үнэ: {props.price} ₮ </p>
            <BuildControl disabled={props.disabledIngredient} ortsHasah={props.ortsHasah} ortsNemeh={props.ortsNemeh} type="salad" orts="Салад"/>
            <BuildControl disabled={props.disabledIngredient} ortsHasah={props.ortsHasah} ortsNemeh={props.ortsNemeh} type="meat" orts="Үхрийн Мах"/>
            <BuildControl disabled={props.disabledIngredient} ortsHasah={props.ortsHasah} ortsNemeh={props.ortsNemeh} type="cheese" orts="Бяслаг"/>
            <BuildControl disabled={props.disabledIngredient} ortsHasah={props.ortsHasah} ortsNemeh={props.ortsNemeh} type="bacon" orts="Гахайн мах"/>

        </div>
    )
}