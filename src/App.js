import React, { Component} from 'react';

import './styles.css';
import Sidebar from './components/sidebar';
import Main from './components/main'; 
import SearchBar from './components/searchbar';
import Notes from './components/notes';

class App extends Component {
  
  render() {
    return (
      <div className="wrapper">
        
        {/* <Sidebar />
        
        <SearchBar />
        <Notes /> */}
        <Sidebar />
        <Main>
          <SearchBar ></SearchBar>
          <Notes></Notes>
        </Main> 
       
      </div>
      );
    }
}
  
  export default App;
  