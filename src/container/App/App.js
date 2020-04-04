import React, { Component } from 'react';
import '../App/App.css';
import CardList from '../../component/CardList/CardList';
import Header from "../../component/Header/Header";
import Routes from "../../Routes/Routes";
// import SearchBar from "../../component/SearchBar/SearchBar"

export default class App extends Component {

  render() {
    return (
      <div>
        
        <Header />
        <CardList pokemons={this.props.pokemons} />
        <Routes />
      </div>
    );
  }
}

