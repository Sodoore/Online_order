import React, { Component } from "react";
import Burger from "../../components/Burger";
export default class BurgerBuilder extends Component{
    render(){
        return(
            <div>
                <Burger />
                <div>Orts</div>
            </div>
        )
    }
}