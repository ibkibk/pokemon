import React, { Component } from "react";
import style from "../Header/Header.module.scss";


export default class Header extends Component{
    render(){
        return(
            <h1 className={style.head}>Pokemon</h1>
        )
    }
}