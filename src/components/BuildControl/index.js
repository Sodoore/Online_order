import React from "react";
import css from "./style.module.css"

export const BuildControl = (props) => {
    return(
        <div className={css.BuildControl}>
            <div className={css.Label}>{props.orts}</div>
            <button disabled={props.disabled[props.type]} onClick={()=> props.ortsHasah(props.type)} className={css.Less}>Хасах</button>
            <button onClick={()=> props.ortsNemeh(props.type)} className={css.More}>Нэмэх</button>
        </div>
    )
}