import React, { Component } from "react";
import styles from "./SearchBar.module.scss"

export default class SearchBar extends Component {
    render() {
        return (
            <div>
            <input
                className={styles.searchBar}
                placeholder="Search pokemon..."
                value={this.props.searchText}
                onChange={this.props.setSearchText}
            /><span className={styles.search}>Search</span>
            </div>
        )
    }
}