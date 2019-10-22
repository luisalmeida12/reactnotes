import React, { Component } from 'react';
import './styles.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar">
                
                <div className="search-box">
                    <input type="text" className="input-search-box" placeholder="Search a note here... " />
                </div>

                <div className="user-info">
                    Hello, Luís Almeida
                </div>

            </div>
            );
        }
    }
    
    export default SearchBar;