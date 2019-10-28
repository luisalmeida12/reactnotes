import React, { Component } from 'react';
import './styles.css';


export default class Sidebar extends Component {
    render() {
        return(
        <div className="sidebar">
            <div className="logo">                
                <h1>Simple Note It</h1>
            </div>
            <div className="nav">
                <ul>
                    <li>New Note</li>
                    <li>View All Notes</li>
                    <li>Calendar</li>
                    <li>Manage Categories</li>
                    <li>Urgent</li>
                </ul>
            </div>
        </div>
        );
    }
}


