import React, { Component } from "react";
import Burger from "../../components/Burger";
import { BuildControls } from "../../components/BuildControls";
import { Modal } from "../../components/General/Modal";
import { OrderSummary } from "../../components/OrderSummary";

const PRICES = { salad: 150, cheese:500, bacon: 1000, meat:1500}
const NAMES={
    bacon: "Гахайн мах",
    salad: "Салад",
    meat: "Үхрийн Мах",
    cheese: "Бяслаг"
}
export default class BurgerPage extends Component{

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0,
        },
        totalPrice:0,
        purchasing: false
    }
    ortsNemeh = type =>{

        const newIngredients = {...this.state.ingredients}
        newIngredients[type]++;
        const newpPrices = this.state.totalPrice + PRICES[type]
        this.setState({ingredients : newIngredients, totalPrice: newpPrices, purchasing: true})

    }
    ortsHasah = type =>{
        
        if(this.state.ingredients[type]>0){
            const newIngredients = {...this.state.ingredients}
            newIngredients[type]--;
            const newpPrices = this.state.totalPrice - PRICES[type]

            this.setState({ingredients : newIngredients, totalPrice: newpPrices, purchasing: newpPrices > 0})        }
    }
    render(){
        const disabledIngredient = {...this.state.ingredients}
        for(let key in disabledIngredient){
            disabledIngredient[key] = disabledIngredient[key] <= 0;
        }


        return(
            <div>
                <Modal>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    names={NAMES}
                    />
                </Modal>
                <Burger orts={this.state.ingredients}/>
                <BuildControls 
                    disabled={!this.state.purchasing}
                    price={this.state.totalPrice} 
                    disabledIngredient={disabledIngredient} 
                    ortsHasah={this.ortsHasah} 
                    ortsNemeh={this.ortsNemeh}
                    names={NAMES}
                    />
                    
            </div>
        )
    }
}