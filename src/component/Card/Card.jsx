import React, { Component } from "react";
import style from "../Card/Card.module.scss";

export default class Card extends Component {
    render() {
        return (
            <div className={style.main}>
                <div className={style.box}>
                    <h3>{this.props.pokemons.Name}</h3>
                    <img className={style.picture} src={this.props.pokemons.Image} />
                    <div className={style.description}>
                        {this.props.pokemons.Description}
                    </div>
                    <div><span className={style.type}>Type</span><br></br>{this.props.pokemons.Type}</div>
                </div>
            </div>
        );
    }
}