import React, { Component } from 'react';


import './styles.css';

// import SearchBar from './../searchbar';

class Main extends Component {

    render () {
        return(
            <div className="main">{ this.props.children }</div>
           
        );
    }


}

export default Main;