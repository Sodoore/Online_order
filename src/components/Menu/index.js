import React from "react";
import { MenuItem } from "../MenuItem";
import css from "./style.module.css"

export const Menu = props =>{
    return(
        <div>
            <ul className={css.Menu}>
            <MenuItem active link="/">Бургер</MenuItem>
            <MenuItem>Төлбөр</MenuItem>

            </ul>
        </div>
    )
}