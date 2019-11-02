import React, { Component } from 'react';

import Modal from 'react-awesome-modal';

import axios from 'axios';



import './styles.css';

export default class Notes extends Component {

    state = {
            notes: [],
            visible: false,
            articleHovered: false,
            editingArticleKey: '',
            // newNote: {
            //     title: '',
            //     categories: '',
            //     body: '',
            //     createdAt: Date.now()
            // }
            title: '',
            categories: '',
            body: '',
            createdAt: Date.now()
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
    

    handleInputChange = (event) => {

        // get the target
        const target = event.target;

        // get the value
        const value = target.value;

        // get the element name
        const name = target.name;
        
        // updating state using the name element as a comuted property
        this.setState({ [name]: value });

    }

    // handling form new note
    handleSubmitNewNote = () => {
        
        // submit post request to the api
        axios.post('http://localhost:3002/api/notes', {
            title: this.state.title,
            body: this.state.body,
            category: this.state.categories
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    // delete note
    deleteNote = (e) => {
        
        // getting the note id to delete
        const noteId = e.target.id;

        // delete note with the id received with axios
        axios.delete(`http://localhost:3002/api/notes/${noteId}`);

        // remove note from the component or hide note
        const article = document.getElementById(noteId);
        article.remove();

    }

    onMouseEnter = (id) => {
        
        const a = id.target;
        const key = a.id;
        this.setState({ articleHovered: true, editingArticleKey: key })

    }
    
    onMouseLeave = e => {
        this.setState({ articleHovered: false }) 
        // console.log("q");       
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
        const { articleHovered } = this.state;
        const style = articleHovered ? { display: 'block'} : {};
        const deleteClass = this.state.deleteIcon ? "delete-available" : "";
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
                        <article id={ note._id } key={ note._id } onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} >
                            <div className="article-header">
                                <div className="date">
                                    {note.createdAt}
                                </div>
                                <div className="article-delete" key={note._id} id={note._id} onClick={this.deleteNote} style={style}>
                                    X
                                </div>
                            </div>    

                            <div className="title">
                                { note.title }
                                
                            </div>
                            <p>
                                { note.body }
                                
                            </p>
                            <div className="footer">{ note.category }</div>
                        </article>

                ))}

                          
                        
              
                        </div>
                    </div>
                    
                    {/* MODAL WINDOW */}
                    <Modal visible={this.state.visible} width="600" height="400" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                <div className="modal-class">
                                    Create a new Note
                                    <div className="separator"></div>
                                <form>
                                    <div>
                                       
                                        <input type="text" name="title" value={this.state.title} placeholder="Note Title" onChange={ this.handleInputChange} />
                                        
                                    </div>
                                    <div>
                                       
                                        <textarea type="text" name="body" value={this.state.body} placeHolder="insert the description here" onChange={ this.handleInputChange} />
                                        
                                    </div>
                                    <div>
                                        
                                        <input type="text" name="categories" value={this.state.categories} placeholder="insert the categories here separated by a comma" onChange={ this.handleInputChange} />
                                       
                                    </div>
                                    <div className="footer-form-new-note">
                                        <div><input type="submit" id="submit" onClick={this.handleSubmitNewNote } value="Create a New Note" /></div>
                                        <div><input type="submit" id="cancel" onClick={() => this.closeModal()} value="Cancel" /></div>
                                        {/* <a href="#" onClick={() => this.closeModal()}>Close</a> */}
                                    </div>

                                </form>
                                   
                                </div>
                    </Modal>
                
            </div>
        );
    }

}