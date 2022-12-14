import React from "react";
import css from "./style.module.css";
import { Shadow } from "../Shadow";
export const Modal = (props) => {
    return(

        <div>
            <Shadow close={props.close} show={props.show}/>
            <div 
            style={{transform: props.show ? "translateY(0)" : "translateY(-100vh)", opacity: props.show ? "1" : "0"}}
            className={css.Modal}>{props.children}
            </div>
        </div>
    )
}