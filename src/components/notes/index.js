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
                                <li className="selected">All</li>
                                <li>Business</li>
                                <li>Project</li>
                                <li>Personal</li>
                            </ul>
                        </div>
                    
                        <div className="qa-new-note">
                            <small>+ Add new Note</small>
                        </div>
                    </div>
                    <div className="notes-content">
                            <article>
                                <div className="date">
                                    20 June, 2019
                                </div>
                                <div className="title">
                                    this is my first title.
                                    this is my first title.
                                </div>
                                <p>
                                    Lorem ipsum dolor it cum to me and let's see what happen in the future
                                    Lorem ipsum dolor it cum to me and let's see what happen in the future
                                    Lorem ipsum dolor it cum to me and let's see what happen in the future
                                    Lorem ipsum dolor it cum to me and let's see what  Lorem ipsum dolor it cum to me and let's see what happen in the future
                                    Lorem ipsum dolor it cum to me and let's see what happen in the future
                                </p>
                                <div className="footer">this is my footer</div>
                            </article>
                            <article>
                                <div className="date">
                                    20 June, 2019
                                </div>
                                <div className="title">
                                    this is my first title.
                                    this is my first title.
                                </div>
                                <p>
                                    Lorem ipsum dolor it cum to me and let's see what happen in the future
                                    Lorem ipsum dolor it cum to me and let's see what happen in the future
                                </p>
                                <div className="footer">project, personal</div>
                            </article>
              
                        </div>
                    </div>
                    
                   
                
            </div>
        );
    }

}