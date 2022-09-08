import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css"
const Burger = (props) =>{


    const items = Object.entries(props.orts);
    let c = [];
    items.map( el => { 
        for( let i = 0; i < el[1]; i++)
         c.push(<BurgerIngredient key={`${el[0]}${i}`} type={el[0]}/>) 
    }
    )
    
    if(c.length === 0){
        c = <p>Хачиртай талхны орцоо сонгоно уу...</p>
    }

    return(
        <div className={css.Burger}>
            <BurgerIngredient type="brad-top"/>
            {/* <BurgerIngredient type="salad"/>
            <BurgerIngredient type="bacon"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="cheese"/> */
            c
            }
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
        
}


export default Burger;