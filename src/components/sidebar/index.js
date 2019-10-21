import React, { Component } from 'react';
import './styles.css';


export default class Sidebar extends Component {
    render() {
        return(
        <div class="sidebar">
            <div class="logo">                
                <h1>Simple Note It</h1>
            </div>
            <ul>
                <li>New Note</li>
                <li>View All Notes</li>
                <li>Calendar</li>
                <li>Manage Categories</li>
                <li>Urgent</li>
            </ul>
        </div>
        );
    }
}


