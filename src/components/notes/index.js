import React, { Component } from 'react';

import './styles.css';

export default class Notes extends Component {


    render() {
        return (
            <div>
                <div className="container">
                    <div className="main-header-notes">

                        <div className="categories-bar">
                            <ul>
                                <li>All</li>
                                <li>Business</li>
                                <li>Project</li>
                                <li>Personal</li>
                            </ul>
                        </div>
                        <div className="qa-new-note">
                            <small>+ Add new Note</small>
                        </div>
                    </div>
                    
                   
                </div>
            </div>
        );
    }

}