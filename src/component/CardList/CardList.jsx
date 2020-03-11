import React, { Component } from "react";
import style from "../CardList/CardList.module.scss";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import { firestore } from "../../firebase";


export default class CardList extends Component {
    state = {
        pokemons: [],
        searchText: "",
        filteredPokemons: []
      }
      setSearchText = (e) => {
        const searchText = e.target.value;
        this.setState({ searchText }, this.filteredPokemons);
      }
      filteredPokemons = () => {
        let filteredPokemons = this.state.pokemons.filter(pokemon => {
          return pokemon.Name.includes(this.state.searchText)
        })
        this.setState({ filteredPokemons })
      }
      componentDidMount() {
        firestore
          .collection("pokemon")
          .get()
          .then((query) => {
            const pokemons = query.docs.map(doc => doc.data())
            this.setState({
              pokemons: pokemons,
              filteredPokemons: pokemons
            });
          })
      }
    render() {
        return (
            <>
                <SearchBar searchText={this.state.searchText} setSearchText={this.setSearchText} />
                <section className={style.cards}>
                    {this.state.filteredPokemons.map((pokemon, index) =>
                        <Card pokemons={pokemon} key={index} />
                    )}
                </section>
            </>
        )
    }
}