import React, { Component } from 'react';

import Modal from 'react-awesome-modal';

import axios from 'axios';



import './styles.css';

export default class Notes extends Component {

    state = {
            notes: [],
            visible: false
    }

    componentDidMount() {

        this.loadNotes();
       

    }

    loadNotes() {
        axios.get('http://localhost:3002/api/notes')
        .then(res => {
            const notes = res.data;
            this.setState({ notes });
        })
    }
    
    // MODAL WINDOW ACTIONS
    openModal() {
        this.setState({
            visible : true
        });
    }
 
    closeModal() {
        this.setState({
            visible : false
        });
    }

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
                            
                            <small>
                                <span onClick={() => this.openModal() }>
                                    + Add new Note
                                </span>
                            </small>
                            {/* <input type="button" value="Open" onClick={() => this.openModal()} /> */}

                           


                        </div>
                    </div>
                    <div className="notes-content">

                    {/* {this.state.notes.map(note => <li>{ note.title }</li>)} */}

                    {this.state.notes.map((note) => (
                        <article>
                        <div className="date">
                            {note.createdAt}
                        </div>
                        <div className="title">
                            { note.title }
                            
                        </div>
                        <p>
                            { note.body }
                            
                        </p>
                        <div className="footer">note.categories</div>
                        </article>

                ))}

                          
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
                    
                    {/* MODAL WINDOW */}
                    <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                <div className="modal-class">
                                    <h1>Title</h1>
                                    <p>Some Contents</p>
                                    <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                                </div>
                    </Modal>
                
            </div>
        );
    }

}