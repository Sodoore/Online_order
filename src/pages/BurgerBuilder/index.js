import React, { Component } from "react";
import Burger from "../../components/Burger";
import { BuildControls } from "../../components/BuildControls";


const PRICES = { salad: 150, cheese:500, bacon: 1000, meat:1500}
export default class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0,
        },
        totalPrice:0
    }
    ortsNemeh = type =>{

        const newIngredients = {...this.state.ingredients}
        newIngredients[type]++;
        const newpPrices = this.state.totalPrice + PRICES[type]
        this.setState({ingredients : newIngredients, totalPrice: newpPrices})

    }
    ortsHasah = type =>{
        if(this.state.ingredients[type]>0){
            const newIngredients = {...this.state.ingredients}
            newIngredients[type]--;
            const newpPrices = this.state.totalPrice - PRICES[type]

            this.setState({ingredients : newIngredients, totalPrice: newpPrices})        }
    }
    render(){
        const disabledIngredient = {...this.state.ingredients}
        for(let key in disabledIngredient){
            disabledIngredient[key] = disabledIngredient[key] <= 0;
        }
        return(
            <div>
                <Burger orts={this.state.ingredients}/>
                <BuildControls price={this.state.totalPrice} disabledIngredient={disabledIngredient} ortsHasah={this.ortsHasah} ortsNemeh={this.ortsNemeh}/>
            </div>
        )
    }
}