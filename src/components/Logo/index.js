import React from "react";
import css from "./style.module.css"
import logo from "../../asets/images/desktop.png"
export const Logo = () =>{
    return(
        <div className={css.Logo}>
            <img src={logo} alt="Burgeriin logo" />
        </div>
    )
}