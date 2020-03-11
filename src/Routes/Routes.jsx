import React, { Component } from "react";
import { Router,Redirect } from "@reach/router";
import CardList from "../component/CardList/CardList";
import SearchBar from "../component/SearchBar/SearchBar";

export default class Routes extends Component{
    render(){
        return(
            <Router>
               <CardList path="card"/>
               <SearchBar path="Search"/>
            </Router>
        )
    }
}