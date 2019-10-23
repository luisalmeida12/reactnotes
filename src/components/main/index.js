import React, { Component } from 'react';


import './styles.css';

// import SearchBar from './../searchbar';

class Main extends Component {

    render () {
        return(
            // <div>
                <div className="content">
                    {/* <div className="content"> */}
                        { this.props.children }
                    </div>
                // </div>
            // </div>
        );
    }


}

export default Main;